import {connect} from 'react-redux';
import SignUp from './SignUp';
import {signUp,login} from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signUp(user)),
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);