import React from 'react';
import SignUpForm from './SignUpForm';

class SignUpMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let errors=[<li key={-1}></li>];
        if(this.props.errors.length>0){
            for(let i = 0; i< this.props.errors.length;i++){
                errors.push(<li key={i}>{this.props.errors[i]}</li>)
            }
        }
        return (
            <div className="signup-main-content">

            <div className="signup-main-content-mid">
                <div className="signup-left-bar">
                    <h2>Connect with friends and the world around you on FakedBook.</h2>
    
                    <div className="left-bar-list">
                        <div className="left-bar-list-element">
                            <div className="signup-logo-photos"></div>
                            <p><b>See photos and updates</b> from friends in News Feed.</p>
                        </div>
                        <div className="left-bar-list-element">
                            <div className="signup-logo-share"></div>
                            <p><b>Share what's new</b> in your life on Timeline.</p> 
                        </div>
                        <div className="left-bar-list-element">
                        <div className="signup-logo-find-more"></div>
                            <p><b>Find more</b> of what you're looking for with Facebook Search</p> 
                        </div>
                    </div>
                </div>
    
                <div className="signup-right-bar">
                   <SignUpForm signup={this.props.signup} login={this.props.login} />
                <ul className="errors-ul">
                    {errors}
                    </ul>
                </div>
            </div>
            </div>
    
       
        )
    }
}

export default SignUpMain;