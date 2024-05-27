import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

function Addform() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        ci: "",
        sexo: "",
        fechaNacimiento: "",
        direccion: "",
        telefono: "",
        estadoCivil: "",
        email: "",
        password: ""
    });

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
                const response = await fetch('http://localhost:8000/api/registrarse', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    // Registro exitoso
                    console.log('Registro exitoso');
                } else {
                    // Error en el registro
                    console.error('Error en el registro');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        }
        setValidated(true);
    };

    return (
        <div className="col-xl-12 col-md-12">
            <div className="ms-panel">
                <div className="ms-panel-header ms-panel-custome">
                    <h6>AGREGAR PACIENTE</h6>
                    <Link to="/patient/patient-list" className="ms-text-primary">Listado de pacientes</Link>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom01">
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
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom02">
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
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom03">
                                <Form.Label>SEXO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        as="select"
                                        name="sexo"
                                        value={formData.sexo}
                                        onChange={handleChange}
                                    >
                                        <option value="">-- Seleccione --</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom04">
                                <Form.Label>FECHA DE NACIMIENTO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="Fecha de Nacimiento"
                                        name="fechaNacimiento"
                                        value={formData.fechaNacimiento}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom05">
                                <Form.Label>DIRECCION</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Dirección"
                                        name="direccion"
                                        value={formData.direccion}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom06">
                                <Form.Label>CELULAR</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="tel"
                                        placeholder="Teléfono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom07">
                                <Form.Label>ESTADO CIVIL</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        as="select"
                                        name="estadoCivil"
                                        value={formData.estadoCivil}
                                        onChange={handleChange}
                                    >
                                        <option value="">-- Seleccione --</option>
                                        <option value="Soltero">Soltero</option>
                                        <option value="Casado">Casado</option>
                                        <option value="Divorciado">Divorciado</option>
                                        <option value="Viudo">Viudo</option>
                                    </Form.Control>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom08">
                                <Form.Label>CORREO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom09">
                                <Form.Label>CONTRASEÑA</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Contraseña"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Form.Group>
                            {/* Agrega más campos si es necesario */}
                        </Form.Row>

                        {/* Agrega el resto de los campos de formulario aquí */}

                        <Button type="submit" className="mt-4 d-inline w-20">AGREGAR PACIENTE</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Addform;
