import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button, Col, Alert, Modal } from 'react-bootstrap';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import image from './demo.jpg';

function RegistroUsuario() {
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        form.querySelectorAll('input:required').forEach(input => {
            if (!input.value) {
                input.classList.add('is-invalid');
            }
        });

        setValidated(true);

        if (form.checkValidity() === false) {
            return;
        }

        const formData = new FormData(form);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        try {
            const response = await fetch('http://localhost:8000/api/registrarse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.error);
            }
            form.reset();
            setValidated(false);
            setErrorMessage(null); // Limpiar mensaje de error si se registró correctamente
            setShowSuccessModal(true); // Mostrar modal de éxito
        } catch (error) {
            console.error('Error al registrar usuario:', error.message);
            setErrorMessage(error.message); // Mostrar mensaje de error
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="col-xl-12 col-md-12">


            <div className="ms-panel">
                <div className="ms-panel-header ms-panel-custome">
                    <h6>REGISTRAR USUARIO</h6>
                </div>

                <div className="ms-panel-body">
                    {errorMessage && (
                        <Alert variant="danger" onClose={() => setErrorMessage(null)} dismissible>
                            {errorMessage}
                        </Alert>
                    )}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>




                        <Form.Row>
                            {/* Resto de los campos del formulario */}
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom01">
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
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom02">
                                <Form.Label>CÉDULA DE IDENTIDAD</Form.Label>
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
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom03">
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
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom04">
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
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom05">
                                <Form.Label>DIRECCIÓN</Form.Label>
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
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom06">
                                <Form.Label>TELÉFONO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Teléfono"
                                        name="telefono"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa el teléfono.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom07">
                                <Form.Label>ESTADO CIVIL</Form.Label>
                                <Form.Control as="select" required name="estadoCivil">
                                    <option value="">Seleccionar...</option>
                                    <option value="Soltero">Soltero</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Divorciado">Divorciado</option>
                                    <option value="Viudo">Viudo</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">Por favor selecciona el estado civil.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom08">
                                <Form.Label>CORREO ELECTRÓNICO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Correo electrónico"
                                        name="email"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingresa un correo electrónico válido.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-2" controlId="validationCustom09">
                                <Form.Label>CONTRASEÑA</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Contraseña"
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

                        <Button type="submit" className="mt-4 d-inline w-20">Registrar cuenta</Button>
                        <p className="mb-0 mt-3 text-center">¿Ya tienes una cuenta? <Link className="btn-link" to="/prebuilt-pages/default-login">Iniciar sesión</Link> </p>

                        </Form>
                </div>
            </div>
            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registro Exitoso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¡Tu cuenta ha sido registrada exitosamente!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSuccessModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default RegistroUsuario;
