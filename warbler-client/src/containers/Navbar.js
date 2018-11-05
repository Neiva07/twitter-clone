import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../images/warbler-logo.png';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Home"/>
                        </Link>
                    </div>    
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/Signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/Signin">Sign In</Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUse
    }
}

export default connect(mapStateToProps, null)(Navbar);