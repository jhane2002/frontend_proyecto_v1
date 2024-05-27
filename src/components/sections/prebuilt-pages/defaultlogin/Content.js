import React, { Fragment, useState , useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, InputGroup, Button, Modal } from 'react-bootstrap';
import { HiMail, HiLockClosed , HiEye, HiEyeOff} from 'react-icons/hi';



function Content() {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación
    const [isMounted, setIsMounted] = useState(true); // Flag de montaje
    const history = useHistory();
    const [error, setError] = useState(null); // Estado para el mensaje de error

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Cambia el estado para mostrar u ocultar la contraseña
    };

    useEffect(() => {
        return () => {
            setIsMounted(false); // Establece el flag de montaje como falso al desmontar el componente
        };
    }, []);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevent default form submission
            const formData = new FormData(form);

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: formData.get('email'),
                        password: formData.get('password')
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (isMounted) { // Verifica si el componente está montado antes de actualizar el estado
                    if (response.ok) {
                        // Handle successful login
                        const data = await response.json();
                        console.log('Login successful:', data);
                        setIsLoggedIn(true); // Establece el estado de autenticación como true
                        history.push('/dashboard/client-management'); // Redirige al usuario a la página del dashboard
                    } else {
                        // Handle login failure
                        const errorData = await response.json();
                        setError(errorData.error); // Establece el mensaje de error
                        console.error('Login failed:', errorData.error);
                    }
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        }

        setValidated(true);
    };
    return (
        <div className="ms-content-wrapper ms-auth">
            <div className="ms-auth-container">
                <div className="ms-auth-col">
                    <div className="ms-auth-bg" />
                </div>
                <div className="ms-auth-col">
                    <div className="ms-auth-form">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h1>Iniciar Sesión</h1>
                            <p>Ingrese su correo electrónico y contraseña</p>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label>Correo</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><HiMail /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Correo electrónico"
                                        name="email"
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor proporcione un correo electrónico válido.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="validationCustom02">
            <Form.Label>Contraseña</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text><HiLockClosed /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    required
                    type={showPassword ? "text" : "password"} // Usa el tipo de entrada "text" para mostrar la contraseña si showPassword es true
                    placeholder="Contraseña"
                    name="password"
                />
                <InputGroup.Append>
                    <InputGroup.Text onClick={togglePasswordVisibility}> {/* Agrega un manejador de eventos para mostrar u ocultar la contraseña */}
                        {showPassword ? <HiEyeOff /> : <HiEye />} {/* Muestra el ícono de ojo abierto o cerrado según el estado de showPassword */}
                    </InputGroup.Text>
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid">Ingrese su contraseña.</Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
                            
                            {error && <p className="text-danger">{error}</p>}
                            <Button type="submit" className="mt-4 d-block w-100">Iniciar sesión</Button>
                           
                            <p className="mb-0 mt-3 text-center">¿No tienes cuenta? <Link className="btn-link" to="/prebuilt-pages/dprebuilt-pages/default-loginefault-register">Crear cuenta</Link> </p>
                        </Form>
                        <Modal show={show} className="modal-min" onHide={handleClose} centered>
                            <Modal.Body className="text-center">
                                <Fragment>
                                    <button type="button" className="close" onClick={handleClose}><span aria-hidden="true">×</span></button>
                                    <i className="flaticon-secure-shield d-block" />
                                    <h1>¿Ha olvidado su contraseña?</h1>
                                    <p> ingrese su correo electrónico para recuperar tu contraseña </p>
                                    <form>
                                        <div className="ms-form-group has-icon">
                                            <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" />
                                            <i className="material-icons">email</i>
                                        </div>
                                        <button type="submit" className="btn btn-primary shadow-none">Restablecer contraseña</button>
                                    </form>
                                </Fragment>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
