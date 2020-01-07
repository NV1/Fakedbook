import React from 'react';

class SignUpNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin(e) {
        // e.preventDefault();
        this.props.login(this.state);
    }

    update(value) {
        return e => this.setState({
            [value]: e.currentTarget.value
        })
    }

    render() {
        return (    
            <div className="signup-nav-bar">
                <div className="signup-nav-bar-content"> 
                <div className="signup-main-logo"></div>
                <div className="login-form">
                    <form onSubmit={this.submitLogin} className="signin-form">
                        <label className="signin-form-label">Email or phone
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                        </label>
                        <label className="signin-form-label">Password
                                <input type="password" 
                                value={this.state.password}
                                onChange={this.update('password')}/>
                        </label>
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default SignUpNav;