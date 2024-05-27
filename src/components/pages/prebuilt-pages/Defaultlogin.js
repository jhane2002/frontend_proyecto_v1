import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../../layouts/TopbarDemo';
import Setting from '../../layouts/Settings';
import Sidenav from '../../layouts/Sidenav';
import Content from '../../sections/prebuilt-pages/defaultlogin/Content';

class Defaultlogin extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags> 
                    <title>Login</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <div className="body ms-body ms-primary-theme ms-logged-out" id="body">
                    <Setting />

                    <main className="body-content">
                        <Topbar />
                        <Content/>
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default Defaultlogin;