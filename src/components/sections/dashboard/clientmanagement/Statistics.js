import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const statbox = [
    {
        icon: 'folder',
        title: 'HISTORIAS CLINICAS',
        text: 'Archivos',
        notification: 6
    },
    {
        icon: 'people',
        title: 'PACIENTES',
        text: 'Archivos',
        notification: 5
    },
    {
        icon: 'help',
        title: 'CITAS MEDICAS',
        text: 'Ver citas',
        notification: 3
    },
    {
        icon: 'graphic_eq',
        title: 'ADMINISTRACION',
        text: '',
        notification: 2
    },
];

class Statistics extends Component {
    render() {
        return (
            <Fragment>
                {statbox.map((item, i) => (
                    <div key={i} className="col-xl-3 col-md-6">
                        <Link to="#">
                            <div className="ms-panel ms-widget ms-panel-hoverable has-border ms-has-new-msg ms-notification-widget">
                                <span className="msg-count">{item.notification}</span>
                                <div className="ms-panel-body media">
                                    <i className="material-icons">{item.icon}</i>
                                    <div className="media-body">
                                        <h6>{item.title}</h6>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default Statistics;