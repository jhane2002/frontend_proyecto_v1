import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editarpaciente from './editarpaciente';
import Editarmedico from "../../doctor/doctorlist/editarMedico";
import {Button} from "reactstrap";

// Función para calcular la edad a partir de la fecha de nacimiento
function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function Patientlist() {
    const [patients, setPatients] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [patientToDelete, setPatientToDelete] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/usuarios')
            .then(response => response.json())
            .then(data => setPatients(data))
            .catch(error => console.error('Error fetching patients:', error));
    }, []);

    const handleDeleteConfirmation = (patientId) => {
        setPatientToDelete(patientId);
        setDeleteModalVisible(true);
    };
    const handleDeletePatient = () => {
        fetch(`http://localhost:8000/api/usuario/${patientToDelete}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete patient');
                }
                return response.json();
            })
            .then(data => {
                // Remove the deleted patient from the state
                setPatients(prevPatients => prevPatients.filter(patient => patient._id !== patientToDelete));
                setDeleteModalVisible(false); // Close the delete confirmation modal
            })
            .catch(error => console.error('Error deleting patient:', error));
    };

    const columns = [
        { name: "Nombres", selector: "nombre", sortable: true  },
        { name: "CI", selector: "ci", sortable: true },
        { name: "Género", selector: "sexo", sortable: true },
        { name: "Edad", selector: "edad", sortable: true },
        { name: "Dirección", selector: "direccion", sortable: true },
        { name: "Teléfono", selector: "telefono", sortable: true },
        { name: "Estado Civil", selector: "estadoCivil", sortable: true },
        { name: "Correo ", selector: "email", sortable: true },
        {
            name: "Acción",
            cell: row => (
                <div data-tag="allowRowEvents">
                    <button onClick={() => handleShowModal(row)} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}>
                        <i className='fas fa-pencil-alt ms-text-primary' />
                    </button>

                    <button onClick={() => handleDeleteConfirmation(row._id)} style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}>
                        <i className='far fa-trash-alt ms-text-danger' />
                    </button>
                </div>
            ),
            sortable: true
        },
    ];

    const modifiedColumns = columns.map(column => {
        if (column.selector === 'fechaNacimiento') {
            return { ...column, name: 'Edad' };
        }
        return column;
    });

    const patientsWithAge = patients.map(patient => ({
        ...patient,
        edad: calculateAge(patient.fechaNacimiento),
    }));

    const handleShowModal = (patient) => {
        setSelectedPatient(patient);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPatient(null);
    };

    const handleUpdatePatient = (updatedPatient) => {
        fetch(`http://localhost:8000/api/usuario/${updatedPatient._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPatient),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update patient');
                }
                return response.json();
            })
            .then(data => {
                setPatients(prevPatients => prevPatients.map(patient => {
                    if (patient._id === updatedPatient._id) {
                        return updatedPatient;
                    } else {
                        return patient;
                    }
                }));
                handleCloseModal();
            })
            .catch(error => console.error('Error al actualizar paciente:', error));
    };

    return (
        <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
                <h6>Lista de Pacientes</h6>
                <Link to="/patient/add-patient" className="ms-text-primary">Agregar Paciente</Link>
            </div>
            <div className="ms-panel-body">
                <div className="thead-primary datatables">
                    <DataTableExtensions columns={modifiedColumns} data={patientsWithAge} pagination responsive={true} striped noHeader>
                        <DataTable columns={modifiedColumns} data={patientsWithAge} pagination responsive={true} striped noHeader />
                    </DataTableExtensions>
                </div>
            </div>
            <Modal show={showModal} className="ms-modal-dialog-width ms-modal-content-width" onHide={handleCloseModal} centered>
                <Modal.Header className="ms-modal-header-radius-0" closeButton>
                    <Modal.Title className="modal-title text-white">INFORMACIÓN DEL PACIENTE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Pasa la función handleUpdatePatient como una prop al componente Editarpaciente */}
                    <Editarpaciente paciente={selectedPatient} handleEdit={handleUpdatePatient} />

                </Modal.Body>
            </Modal>
            <Modal show={deleteModalVisible} onHide={() => setDeleteModalVisible(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación de eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Está seguro que desea eliminar al paciente?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setDeleteModalVisible(false)}>Cancelar</Button>
                    <Button variant="danger" onClick={handleDeletePatient}>Eliminar</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Patientlist;
