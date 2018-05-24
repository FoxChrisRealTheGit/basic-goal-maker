import React from "react"
import { Link } from "react-router-dom";
import { firebaseApp } from "../Firebase";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: {
                message: ""
            }
        }
    }

    signIn() {
        const { email, password } = this.state
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log("error", error)
                this.setState({ error })
            })
    }

    render() {
        return (
            <div className="form-inline">
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={event => this.setState({ password: event.target.value })}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signIn()}
                    >Sign In</button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={"/signup"}>Sign up instead</Link></div>
            </div>
        )
    }
}

export default SignIn