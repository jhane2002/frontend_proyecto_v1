import React, { useState } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
function Editarmedico({ doctor, handleEdit }) {
    const [formData, setFormData] = useState({
        _id: doctor ? doctor._id : '',
        nombre: doctor ? doctor.nombre : '',
        ci: doctor ? doctor.ci : '',
        sexo: doctor ? doctor.sexo : '',
        fechaNacimiento: doctor ? doctor.fechaNacimiento : '',
        direccion: doctor ? doctor.direccion : '',
        telefono: doctor ? doctor.telefono : '',
        matricula: doctor ? doctor.matricula : '',
        especialidad: doctor ? doctor.especialidad : '',
        email: doctor ? doctor.email : '',
        password: doctor ? doctor.password : '',

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
                    <h6>EDITAR INFORMACIÓN DEL MÉDICO</h6>
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
                                <Form.Label>SEXO</Form.Label>
                                <Form.Control
                                    name="sexo"
                                    value={formData.sexo}
                                    onChange={handleChange}
                                    as="select" // Cambiar el tipo de entrada a "select"
                                    style={{
                                        border: '1px solid #ccc', // Borde gris claro
                                        borderRadius: '4px', // Bordes redondeados
                                        backgroundColor: '#fff', // Fondo blanco
                                        padding: '8px' // Espacio interno
                                    }}
                                >
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb-3" controlId="fechaNacimiento">
                                <Form.Label>FECHA DE NACIMIENTO</Form.Label>
                                <Form.Control
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                    type="date" // Cambiar el tipo de entrada a "date"
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
                            <Form.Group as={Col} md="4" className="mb-3" controlId="matricula">
                                <Form.Label>MATRÍCULA</Form.Label>
                                <Form.Control
                                    name="matricula"
                                    value={formData.matricula}
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
                            <Form.Group as={Col} md="4" className="mb-3" controlId="especialidad">
                                <Form.Label>ESPECIALIDAD</Form.Label>
                                <Form.Control
                                    name="especialidad"
                                    value={formData.especialidad}
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
                            <Form.Group as={Col} md="4" className="mb-3" controlId="email">
                                <Form.Label>CORREO</Form.Label>
                                <InputGroup>
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
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="password">
                                <Form.Label>CONTRASEÑA</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type="password"
                                        style={{
                                            border: '1px solid #ccc', // Borde gris claro
                                            borderRadius: '4px', // Bordes redondeados
                                            backgroundColor: '#fff', // Fondo blanco
                                            padding: '8px' // Espacio interno
                                        }}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        {/* Más filas de formulario aquí */}
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Editarmedico;

