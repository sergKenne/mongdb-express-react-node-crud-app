import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <h1>Page Contact</h1>
            <div className="card blue-grey draken-1 contact">
                <form className="card-content white-text">
                    <div className="input-field col s12">
                        <input type="text" placeholder="Email" className="white-text" />
                        <label className="write-text active">Email address</label>
                        <span className="helper-text" data-error="wrong" data-success="right">
                            we'll never share your email with anyone else
                        </span>
                    </div>
                    <br />
                    <div className="input-field col s12">
                        <input type="text" placeholder="password" className="white-text" />
                        <label className="write-text active">Password</label>
                    </div>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Checked me out</span>
                        </label>
                    </p><br/>
                    <div>
                        <button className="waves-effect waves-light btn-large">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact
