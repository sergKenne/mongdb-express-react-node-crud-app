import React from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <div className="container">
            <br />
            <br />
            <Link to="/" className="waves-effect waves-light btn purple">
                Go Back
            </Link>
            <h3>User id: {5}</h3>
            {/* <hr /> */}
            <br />
            <div className="row">
                <div className="col s6">
                    <ul className="collection">
                        <li className="collection-item">Alvin</li>
                        <li className="collection-item">Alvin</li>
                        <li className="collection-item">Alvin</li>
                        <li className="collection-item">Alvin</li>
                    </ul>
                </div>    
            </div>
        </div>
    );
};

export default Detail;
