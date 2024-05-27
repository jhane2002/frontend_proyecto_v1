import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import {  HiEye, HiEyeOff} from 'react-icons/hi';

function Medico() {
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Cambia el estado para mostrar u ocultar la contraseña
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        // Marcamos los campos no completados como inválidos
        form.querySelectorAll('input:required').forEach(input => {
            if (!input.value) {
                input.classList.add('is-invalid');
            }
        });

        // Activamos la validación del formulario para mostrar los mensajes de error
        setValidated(true);

        if (form.checkValidity() === false) {
            return;
        }

        const formData = new FormData(form);
        const doctorData = {};
        formData.forEach((value, key) => {
            doctorData[key] = value;
        });

        try {
            const response = await fetch('http://localhost:8000/api/medico', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(doctorData),
            });
            if (!response.ok) {
                throw new Error('Error al agregar doctor');
            }
            // Reset form after successful submission
            form.reset();
            setValidated(false);
            // Optionally, you can handle success message or redirection here
        } catch (error) {
            console.error('Error al agregar doctor:', error);
            // Optionally, you can display an error message to the user
        }
    };

    return (
        <div className="col-xl-12 col-md-12">
            <div className="ms-panel">
                <div className="ms-panel-header ms-panel-custome">
                    <h6>AGREGAR MÉDICO</h6>
                    <Link to="/doctor/doctor-list" className="ms-text-primary">LISTA DE MÉDICO</Link>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom01">
                                <Form.Label>NOMBRE</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nombre"
                                        name="nombre"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa el nombre.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom02">
                                <Form.Label>CEDULA DE IDENTIDAD</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Cédula de Identidad"
                                        name="ci"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa la cédula de identidad.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom03">
                                <Form.Label>SEXO</Form.Label>
                                <ul className="ms-list d-flex">
                                    <li className="ms-list-item pl-0">
                                        <label className="ms-checkbox-wrap">
                                            <input type="radio" name="sexo" value="Masculino" required />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Masculino </span>
                                    </li>
                                    <li className="ms-list-item">
                                        <label className="ms-checkbox-wrap">
                                            <input type="radio" name="sexo" value="Femenino" required />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Femenino </span>
                                    </li>
                                </ul>
                                <Form.Control.Feedback type="invalid">Por favor selecciona el sexo.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom04">
                                <Form.Label>FECHA DE NACIMIENTO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="Fecha de Nacimiento"
                                        name="fechaNacimiento"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa la fecha de nacimiento.</Form.Control.Feedback>
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
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa la dirección.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom06">
                                <Form.Label>CELULAR</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Celular"
                                        name="telefono"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa el teléfono.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom07">
                                <Form.Label>MATRICULA</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Matrícula"
                                        name="matricula"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa la matrícula.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom08">
                                <Form.Label>ESPECIALIDAD</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Especialidad"
                                        name="especialidad"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa la especialidad.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom09">
                                <Form.Label>CORREO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa un email válido.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom10">
                                <Form.Label>CONTRASEÑA</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        name="password"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" onClick={togglePasswordVisibility} className="btn-sm">
                                            {showPassword ? <HiEye /> : <HiEyeOff />}
                                        </Button>
                                    </InputGroup.Append>
                                    <Form.Control.Feedback type="invalid">Por favor ingresa una contraseña.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="reset" variant="warning" className="mt-4 d-inline w-20 mr-2">Reset</Button>
                        <Button type="submit" className="mt-4 d-inline w-20">Agregar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Medico;
