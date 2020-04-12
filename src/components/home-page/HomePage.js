import React from 'react';
import './HomePage.css';

import Sidenav from '../sidenav/Sidenav';

export default function HomePage(){
    return (
        <React.Fragment>
            <Sidenav />
            <div className="HomePage">This is my homepage</div>
        </React.Fragment>
    )
}