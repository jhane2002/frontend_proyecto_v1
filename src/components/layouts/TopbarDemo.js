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
                    <div className="ms-aside-toggler ms-toggler pl-0" >
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="logo-sn logo-sm ms-d-block-sm">
                        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">


                    </ul>

                </nav>
                {/* Appointment */}

            </Fragment>
        );
    }
}

export default Topbar