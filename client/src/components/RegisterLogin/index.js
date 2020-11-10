import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <h2> Login </h2>
                <div className="row">
                    <form className="col s12" onSubmit={ event => this.onsubmitForm(event) }>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    name="email"
                                    //value=""{this.state.email}
                                    //onChange={e => this.handleChange(e)}
                                    id="email"
                                    type="email"
                                    className="validate"
                                />
                                <label htmlFor="email"> Email </label>
                                <span 
                                    className="helper-text"
                                    data-error="Type a right email"
                                    data-success="right"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    name="password"
                                    //value=""{this.state.password}
                                    //onChange={e => this.handleChange(e)}
                                    id="password"
                                    type="password"
                                    className="validate"
                                />
                                <label htmlFor="password"> Password </label>
                                <span 
                                    className="helper-text"
                                    data-error="Wrong password"
                                    data-success="right"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col 12">
                                <button 
                                    className="waves-effect waves-light btn"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}
                                >
                                    Login
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
