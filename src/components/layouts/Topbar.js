import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink, Modal } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar';
import Makeappointment from '../modals/Makeappointment';
import Makeprescription from '../modals/Makeprescription';
import Generatereport from '../modals/Generatereport';

import logo from '../../assets/img/medboard-logo-84x41.png';
import dashboarduser from '../../assets/img/dashboard/doctor-3.jpg';

class Topbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showappointment: false,
            showprescription: false,
            showreport: false,
        }
        // appointment
        this.handleAppointmentShow = this.handleAppointmentShow.bind(this);
        this.handleAppointmentClose = this.handleAppointmentClose.bind(this);
        // prescription
        this.handlePrescriptionShow = this.handlePrescriptionShow.bind(this);
        this.handlePrescriptionClose = this.handlePrescriptionClose.bind(this);
        // report
        this.handleReportShow = this.handleReportShow.bind(this);
        this.handleReportClose = this.handleReportClose.bind(this);
    }
    // appointment
    handleAppointmentShow() {
        this.setState({
            showappointment: true
        });
    }
    handleAppointmentClose() {
        this.setState({
            showappointment: false
        });
    }
    // prescription
    handlePrescriptionShow() {
        this.setState({
            showprescription: true
        });
    }
    handlePrescriptionClose() {
        this.setState({
            showprescription: false
        });
    }
    // report
    handleReportShow() {
        this.setState({
            showreport: true
        });
    }
    handleReportClose() {
        this.setState({
            showreport: false
        });
    }
    // Nav toggle
    navToggle = () => {
        document.getElementById('body').classList.toggle('ms-aside-left-open');
        document.getElementById('ms-side-nav').classList.toggle('ms-aside-open');
        document.getElementById('overlayleft').classList.toggle('d-block');
    }
    optionsToggle = () => {
        document.getElementById('ms-nav-options').classList.toggle('ms-slide-down');
    }
    render() {
        return (
            <Fragment>
                <nav className="navbar ms-navbar">
                    <div className="ms-aside-toggler ms-toggler pl-0" onClick={this.navToggle}>
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                    </div>
                    <div className="logo-sn logo-sm ms-d-block-sm">
                        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                        <li className="ms-nav-item  ms-d-none">
                            <Link to="#" className="text-white" onClick={this.handleAppointmentShow}>
                                <i className="flaticon-spreadsheet mr-2" /> Agregar cita
                            </Link>
                        </li>
                        <li className="ms-nav-item ms-d-none">
                            <Link to="#" className="text-white" onClick={this.handlePrescriptionShow}>
                                <i className="flaticon-pencil mr-2" /> Escribir una receta
                            </Link>
                        </li>
                        <li className="ms-nav-item ms-d-none" onClick={this.handleReportShow}>
                            <Link to="#" className="text-white">
                                <i className="flaticon-list mr-2" /> Generar Reportes
                            </Link>
                        </li>
                        <Dropdown className="ms-nav-item dropdown">
                            <Dropdown.Toggle as={NavLink} className="p-0 text-disabled ms-has-notification">
                                
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-right">
                                <li className="dropdown-menu-header">
                                    
                                </li>
                                <li className="dropdown-divider" />
                                <Scrollbar className="ms-scrollable ms-dropdown-list">
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>12 ways to improve your crypto dashboard</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>You have newly registered users</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>Your account was logged in from an unauthorized IP</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body">
                                            <span>An application form has been submitted</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                                        </div>
                                    </Link>
                                </Scrollbar>
                                <li className="dropdown-divider" />
                                <li className="dropdown-menu-footer text-center">
                                    <Link to="#">View all Notifications</Link>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="ms-nav-item ms-nav-user dropdown">
                            <Dropdown.Toggle as={NavLink} className="p-0 toggle-icon-none">
                                <img className="ms-user-img ms-img-round float-right" src={dashboarduser} alt="people" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
                                <li className="dropdown-menu-header">
                                   
                                </li>
                                <li className="dropdown-divider" />
                                
                            
                                <li className="dropdown-menu-footer">
                                    <Link className="media fs-14 p-2" to="/prebuilt-pages/default-login"> <span><i className="flaticon-shut-down mr-2" /> Cerrar sesion</span> </Link>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                    <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" onClick={this.optionsToggle}>
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                    </div>
                </nav>
                {/* Appointment */}
                <Modal show={this.state.showappointment} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handleAppointmentClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">Make An Appointment</h4>
                        <button type="button" className="close text-white" onClick={this.handleAppointmentClose}>x</button>
                    </Modal.Header>
                    <Modal.Body className="p-0 text-left">
                        <Makeappointment/>
                    </Modal.Body>
                </Modal>
                {/* prescription */}
                <Modal show={this.state.showprescription} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handlePrescriptionClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">Make a prescription</h4>
                        <button type="button" className="close text-white" onClick={this.handlePrescriptionClose}>x</button>
                    </Modal.Header>
                    <Modal.Body className="p-0 text-left">
                        <Makeprescription/>
                    </Modal.Body>
                </Modal>
                {/* report */}
                <Modal show={this.state.showreport} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handleReportClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">Generate report</h4>
                        <button type="button" className="close text-white" onClick={this.handleReportClose}>x</button>
                    </Modal.Header>
                    <Modal.Body className="p-0 text-left">
                        <Generatereport/>
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}

export default Topbar