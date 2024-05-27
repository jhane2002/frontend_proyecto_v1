import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, Col } from 'react-bootstrap';

function EditModal({ show, onHide, data }) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            try {
                // Aquí podrías realizar la lógica para enviar los datos editados al servidor
                console.log('Datos editados:', formData);
                onHide(); // Cierra el modal después de editar
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        }
        setValidated(true);
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>NOMBRES</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>CEDULA DE IDENTIDAD</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter CI"
                                    name="ci"
                                    value={formData.ci}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    {/* Agrega el resto de los campos de formulario aquí */}
                    <Button type="submit" className="mt-4 d-inline w-20">Guardar Cambios</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EditModal;
