import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink, Modal } from 'react-bootstrap';
import Makeprescription from './datosMedico';
import Editarmedico from './editarMedico';
import {Button} from "reactstrap";

class Doctorsblock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            selectedDoctor: null,
            showPrescription: false,
            showEditModal: false,
            showDeleteModal: false
        };
    }

    componentDidMount() {
        // Fetch doctors data from API
        fetch( `${process.env.REACT_APP_API_URL}/medico`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error buscar doctores');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    this.setState({ doctors: data });
                } else {
                    throw new Error('Formato invalido');
                }
            })
            .catch(error => console.error('Error buscar doctores:', error));
    }

    handleShowPrescription = (doctor) => {
        this.setState({ selectedDoctor: doctor, showPrescription: true });
    }

    handlePrescriptionClose = () => {
        this.setState({ showPrescription: false });
    }


    handleUpdateDoctor = (updatedDoctor) => {
        fetch(`${process.env.REACT_APP_API_URL}/medico/${updatedDoctor._id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDoctor),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update doctor');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful update
                // You might want to update the doctors list in the state
                // or refresh the data from the server
                this.setState(prevState => ({
                    doctors: prevState.doctors.map(doctor => {
                        if (doctor._id === updatedDoctor._id) {
                            return updatedDoctor;
                        } else {
                            return doctor;
                        }
                    })
                }));
                this.handleEditModalClose(); // Cerrar el modal de edición después de la actualización
            })
            .catch(error => console.error('Error al actulizar  medico:', error));
    }
    // Otras funciones de manejo de estado aquí

    handleShowEditModal = (doctor) => {
        this.setState({ selectedDoctor: doctor, showEditModal: true });
    }

    handleEditModalClose = () => {
        this.setState({ showEditModal: false, selectedDoctor: null });
    }
    handleShowDeleteModal = (doctor) => {
        this.setState({ selectedDoctor: doctor, showDeleteModal: true });
    }

    handleDeleteModalClose = () => {
        this.setState({ showDeleteModal: false });
    }

    handleDeleteDoctor = () => {
        const { selectedDoctor } = this.state;
        fetch(`${process.env.REACT_APP_API_URL}/medico/${selectedDoctor._id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo eliminar el doctor');
                }
                // Remove the deleted doctor from the state
                this.setState(prevState => ({
                    doctors: prevState.doctors.filter(doctor => doctor._id !== selectedDoctor._id),
                    selectedDoctor: null, // Reset selectedDoctor after deletion
                    showDeleteModal: false // Close the delete confirmation modal
                }));
            })
            .catch(error => console.error('Error al eliminar medico:', error));
    }
    render() {
        const { doctors, selectedDoctor, showPrescription, showEditModal,showDeleteModal  } = this.state;

        return (
            <Fragment>
                {doctors.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-body">
                                <div className="media fs-14">
                                    <div className="media-body">
                                        <h6>{item.nombre}</h6>
                                        <Dropdown className="float-right">
                                            <Dropdown.Toggle as={NavLink} className="p-0 toggle-icon-none"><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right">
                                                <li className="ms-dropdown-list">
                                                    <Link className="media p-2" to="#" onClick={() => this.handleShowPrescription(item)}>
                                                        <div className="media-body">
                                                            <span>Ver detalles</span>
                                                        </div>
                                                    </Link>
                                                    <Link className="media p-2" to="#" onClick={() => this.handleShowEditModal(item)}>
                                                        <div className="media-body">
                                                            <span>Editar</span>
                                                        </div>
                                                    </Link>
                                                    <Link className="media p-2" to="#" onClick={() => this.handleShowDeleteModal(item)}>
                                                        <div className="media-body">
                                                            <span>Eliminar</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <p className="fs-12 my-1 text-disabled">{item.especialidad}</p>
                                        <h6 className="mt-2">
                                            <span className="fs-14">
                                                <i className="fas fa-map-marker-alt" />
                                            </span> {item.direccion}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Modal show={showPrescription} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handlePrescriptionClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">INFORMACION</h4>
                        <button type="button" className="close text-white" onClick={this.handlePrescriptionClose}>x</button>
                    </Modal.Header>
                    <Modal.Body className="p-0 text-left">
                        <Makeprescription doctor={selectedDoctor} />
                    </Modal.Body>
                </Modal>
                <Modal show={showEditModal} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handleEditModalClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">INFORMACION</h4>
                        <button type="button" className="close text-white" onClick={this.handleEditModalClose}>x</button>
                    </Modal.Header>
                    <Modal.Body>
                        <Editarmedico doctor={selectedDoctor} handleEdit={this.handleUpdateDoctor} />
                    </Modal.Body>
                </Modal>

                <Modal show={showDeleteModal} onHide={this.handleDeleteModalClose} centered>
                    <Modal.Header>
                        <Modal.Title>Confirmar Eliminación</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        ¿Estás seguro de que deseas eliminar este medico?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleDeleteModalClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={this.handleDeleteDoctor}>
                            Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Doctorsblock;

