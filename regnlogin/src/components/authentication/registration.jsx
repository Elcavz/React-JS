import React from 'react'
import { Link } from 'react-router-dom';

function Registration() {

    const togglePassword = function () {
        const passwordInput = document.getElementById('pwd');
        const eyeIcon = document.getElementById('eye-icon');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }

    const toggleCPassword = function () {
        const passwordInput = document.getElementById('cPwd');
        const eyeIcon = document.getElementById('eye-icon2');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }

    const regBtn = function() {
        const uName = document.getElementById('userName');
        const fName = document.getElementById('firstName');
        const lName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const password = document.getElementById('pwd');
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: fName.value,
                lastname: lName.value,
                email: email.value,
                username: uName.value,
                password: password.value,
            })
        }).then(function(data) {
            return data.json()
        }).then(function(data) {
            const usernameExist = document.getElementById('usernameExist')
            const username = document.getElementById('username')
            let userSpan = document.getElementById('userSpan');
            
            if (data.success) {
                usernameExist.innerHTML = ""
                userSpan.innerHTML = uName.value
                window.$('#myModal').modal('toggle')
            } else {
                username.classList.add('m-0');
                usernameExist.innerHTML = "Username already exists"
            }
        })
    }

    return (
        <div>
            <div className="register wrapper">
                <div className="logo">
                    <img width="96" height="96" src="https://img.icons8.com/windows/96/add-user-male--v1.png" alt="add-user-male--v1"/>
                </div>
                <div className="text-center mt-4 name">
                    REGISTER
                </div>
                <div className="p-3 mt-3">
                    <div className="d-flex flex-row justify-content-around">
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="ms-2">
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-envelope"></span>
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </div>
                        <div id="username" className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="userName" id="userName" placeholder="Username" />
                        </div>
                        <p id="usernameExist" className="ms-5 text-danger"></p>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" id="pwd" placeholder="Password" />
                            <button className="border-0" onClick={togglePassword}>
                                <i id="eye-icon" className="far fa-eye fa-lg me-3"></i>
                            </button>
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="Password" name="cPassword" id="cPwd" placeholder="Confirm Password" />
                            <button className="border-0" onClick={toggleCPassword}>
                                <i id="eye-icon2" className="far fa-eye fa-lg me-3"></i>
                            </button>
                        </div>
                        </div>
                    <div className="d-flex justify-content-center flex-row">
                        <button id="registerBtn" className="btn mt-3 trigger-btn" href="#myModal" onClick={regBtn}>Register</button>
                    </div>
                </div>
                <div className="text-center fs-6">
                    <p className="m-0">Already have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            </div>

            <div id="myModal" className="modal fade">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="icon-box">
                                <i className="material-icons">&#xE876;</i>
                            </div>				
                            <h4 className="modal-title">Successfully Registered!</h4>	
                        </div>
                        <div className="modal-body">
                            <p className="text-center">Welcome <span id="userSpan" className="fw-bold"></span>! Click LOG-IN to continue.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;