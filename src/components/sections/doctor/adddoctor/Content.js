import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Agregarmedico from './Agregarmedico';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb/>
                    <Agregarmedico/>
                </div>
            </div>
        );
    }
}

export default Content;