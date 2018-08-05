import React, { Component } from 'react';
import logo from '../../Images/Logos/black_logo.png';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="40" height="40" alt={"logo"}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#what-we-do">What we provide?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contributors</a>
              </li>
              <li className="nav-item">
                <Link to="aboutus"><a className="nav-link" href="#">About</a></Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right ml-md-auto ">
              <li className="nav-item">
                <a className="nav-link" target="_blank" href="https://bit.ly/2NwWLhp">Join</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sign in
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/login/student">Student</Link>
                  <Link className="dropdown-item" to="/login/professor">Professor</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sign up
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link  className="dropdown-item" to="/signup/student">Student</Link>
                  <Link className="dropdown-item" to="/signup/professor">Professor</Link>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""></a>
              </li>
              
            </ul>
          </div>
    </nav>
    )
  }
}

export default Navigation;
