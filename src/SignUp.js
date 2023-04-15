import './SignUp.css';
import React from 'react';


const SignUp = () => {
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
          <div className="image">
          </div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <span className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-user"></i></span>
              </span>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
              </span>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-lock"></i></span>
              </span>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-lock"></i></span>
              </span>
              <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <button type="button" className="btn btn-secondary btn-block">SIGNUP</button>
            <div className="message">
              <div><input type="checkbox" /> Remember Me</div>
            </div>
          </form>
          <div className="social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
