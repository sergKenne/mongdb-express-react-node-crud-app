import React from 'react';

const EditUser = () => {
    return (
        <div className="container">
            <div className="add-user card blue-grey draken-1">
                <h3 className="center">Edit user</h3>
                <form className="col s12 form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Enter Your Name" type="text" className="validate" />
                        </div>
                        <div className="input-field col s12">
                            <input
                                placeholder="Enter Your User Name"
                                type="text"
                                className="validate"
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                placeholder="Enter Your Email"
                                type="text"
                                className="validate"
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                placeholder="Enter Your Phone Number"
                                type="text"
                                className="validate"
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                placeholder="Enter Your Website Name"
                                type="text"
                                className="validate"
                            />
                        </div>
                        <button type="submit" className="waves-effect waves-light btn btn-large">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
