import React, { Component } from 'react';

const countrytable = [
    {
        countryflag: 'assets/img/dashboard/widgets/country-1.jpg',
        entrance: 725,
        bouncerate: 17.24,
        exits: 7.65,
    },
    {
        countryflag: 'assets/img/dashboard/widgets/country-2.jpg',
        entrance: 890,
        bouncerate: 12.90,
        exits: 9.12,
    },
    {
        countryflag: 'assets/img/dashboard/widgets/country-3.jpg',
        entrance: 729,
        bouncerate: 20.75,
        exits: 14.29,
    },
    {
        countryflag: 'assets/img/dashboard/widgets/country-4.jpg',
        entrance: 316,
        bouncerate: 32.09,
        exits: 10.99,
    },
];

class Countrytable extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
    <div className="ms-panel ms-widget ms-panel-fh">
        <div className="ms-panel-header">
            <h6>ESPECIALIDADES MÉDICAS</h6>
        </div>
        <div className="ms-panel-body">
            <ul class="list-group">
                <li class="list-group-item">
                    <i className="fas fa-heartbeat" style={{ fontSize: '28px', color: '#007bff' }}></i> Cardiología
                </li>
                <li class="list-group-item">
                    <i className="fas fa-stethoscope" style={{ fontSize: '28px', color: '#007bff' }}></i> Medicina Interna
                </li>
                <li class="list-group-item">
                    <i className="fas fa-briefcase-medical" style={{ fontSize: '28px', color: '#007bff' }}></i> Cirugía General
                </li>
                
            </ul>
        </div>
    </div>
</div>

        );
    }
}

export default Countrytable;