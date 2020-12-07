import React, { Component } from 'react'

import './Register.css'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class Register extends Component {
    state = {
        fullname: null,
        email: null,
        password: null,
        formErrors: {
            fullname: "",
            email: "",
            password: ""
        }
    }

    handleChange = e => {
        e.preventDefault()
    
        const {name,value} = e.target
        let formErrors = {...this.state.formErrors}
        
        if (name == "fullname") {
            formErrors.fullname = value.length < 3 ? "minimum 3 characters required" : ""
        }if (name == "email") {
            formErrors.email = emailRegex.test(value) ? "" : "invalid email address"
        }if (name == "password") {
            formErrors.password = value.length < 8 ? "minimum 8 characters required" : ""
        }

        this.setState({
            [name]: value,
            formErrors:formErrors           
        })
    }

    render() {
        const {formErrors} = this.state
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <form className="form-container" onSubmit={this.handleSubmit}>
                            <div className="text-center">
                                <h3>Create Account</h3>
                                <br></br>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input 
                                    className={formErrors.fullname.length>0
                                    ? "error" : null} 
                                    type="text"
                                    name="fullname"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.fullname.length > 0
                                ?<span className="errorMessage">{formErrors.fullname}</span>:""}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                    className={formErrors.email.length>0
                                    ? "error" : null}
                                    type="email"
                                    name="email"
                                    formNoValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.email.length > 0
                                ?<span className="errorMessage">{formErrors.email}</span>:""}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    className={formErrors.password.length>0
                                    ? "error" : null}
                                    type="password"
                                    name="password"
                                    formNoValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.password.length > 0
                                ?<span className="errorMessage">{formErrors.password}</span>:""}
                            </div>
                            <div className="text-center">
                                <br></br>
                                <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                                <small>Already have an Account?</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
