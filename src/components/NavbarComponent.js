import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavbarComponent() {

  const handleLogin = (userType) => {
    alert(`${userType} Login\nUsername: ${username}\nPhone Number: ${phoneNumber}\nPassword: ${password}`);
  
  };

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          CafetTera
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link className="nav-link ml-lg-5" to="/">
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button
              type="button"
              className="btn btn-outline-success"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-success ml-2"
              data-toggle="modal"
              data-target="#exampleModal2"
            >
              Register
            </button>
          </form>
        </div>
      </nav>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* Additional login form fields can be added here */}
               
              </form>

              <div>
                
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => alert("Admin Login")}
                >
                  Admin
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => alert("Customer Login")}
                >
                  Customer
                </button>
              </div>

           
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Customer Register
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input type="email" className="form-control" id="username" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* Additional login form fields can be added here */}
               
              </form>

              <div>
                
             
                <button
                  className="btn btn-success"
                  onClick={() => alert("Customer Register")}
                >
                  Customer
                </button>
              </div>

           
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
