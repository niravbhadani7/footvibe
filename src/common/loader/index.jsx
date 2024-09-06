import React from 'react';
import './loader.scss';
import logo from '../../assets/logo/logo (1).svg';

export default function Loader() {
    return (
        <div className="loader">
            <div className="logo-container shoes-walking">
                <img src={logo} alt="Company Logo" className="logo" />
            </div>
        </div>
    );
}
