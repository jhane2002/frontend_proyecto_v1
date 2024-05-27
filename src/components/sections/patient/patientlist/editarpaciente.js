import React, { useState } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

function EditarPaciente({ paciente, handleEdit }) {
    const [formData, setFormData] = useState({
        _id: paciente ? paciente._id : '',
        nombre: paciente ? paciente.nombre : '',
        ci: paciente ? paciente.ci : '',
        sexo: paciente ? paciente.sexo : '',
        fechaNacimiento: paciente ? paciente.fechaNacimiento : '',
        direccion: paciente ? paciente.direccion : '',
        telefono: paciente ? paciente.telefono : '',
        estadoCivil: paciente ? paciente.estadoCivil : '',
        email: paciente ? paciente.email : '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEdit(formData);
    };

    return (
        <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-panel-bshadow-none">
                <div className="ms-panel-header">
                    <h6>EDITAR INFORMACIÓN DEL PACIENTE</h6>
                </div>
                <div className="ms-panel-body">
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="nombre">
                                <Form.Label>NOMBRE</Form.Label>
                                <Form.Control
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    type="text"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="ci">
                                <Form.Label>CI</Form.Label>
                                <Form.Control
                                    name="ci"
                                    value={formData.ci}
                                    onChange={handleChange}
                                    type="text"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="sexo">
                                <Form.Label>GÉNERO</Form.Label>
                                <Form.Control
                                    name="sexo"
                                    value={formData.sexo}
                                    onChange={handleChange}
                                    as="select"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                >
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="fechaNacimiento">
                                <Form.Label>FECHA DE NACIMIENTO</Form.Label>
                                <Form.Control
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                    type="date"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="direccion">
                                <Form.Label>DIRECCIÓN</Form.Label>
                                <Form.Control
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    type="text"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="telefono">
                                <Form.Label>TELÉFONO</Form.Label>
                                <Form.Control
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    type="text"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="estadoCivil">
                                <Form.Label>ESTADO CIVIL</Form.Label>

                                <Form.Control
                                    name="estadoCivil"
                                    value={formData.estadoCivil}
                                    onChange={handleChange}
                                    as="select"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                >
                                    <option value="Soltero">Soltero</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Divorciado">Divorciado</option>
                                    <option value="Viudo">Viudo</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="email">
                                <Form.Label>CORREO</Form.Label>
                                <Form.Control
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default EditarPaciente;
