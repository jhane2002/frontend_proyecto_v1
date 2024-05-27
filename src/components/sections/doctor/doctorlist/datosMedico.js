import React, { useState } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

function Makeprescription({ doctor }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-panel-bshadow-none">
                <div className="ms-panel-header">
                    <h6>DETALLE DE MEDICO</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom01">
                                <Form.Label>NOMBRE</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.nombre : ''}
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom02">
                                <Form.Label>CEDULA DE IDENTIDAD</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.ci : ''}
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom03">
                                <Form.Label>SEXO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.sexo : ''}
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom04">
                                <Form.Label>FECHA DE NACIMIENTO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.fechaNacimiento.split('T')[0] : ''}
                                        type="text"
                                    />

                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom05">
                                <Form.Label>DIRECCION</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.direccion : ''}
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom06">
                                <Form.Label>CELULAR</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.telefono : ''}
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom07">
                                <Form.Label>MATRICULA</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.matricula : ''}
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom08">
                                <Form.Label>ESPECIALIDAD</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.especialidad : ''}
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom09">
                                <Form.Label>CORREO</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        readOnly
                                        value={doctor ? doctor.email : ''}
                                        type="email"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                          </Form>
                </div>
            </div>
        </div>
    );
}

export default Makeprescription;
