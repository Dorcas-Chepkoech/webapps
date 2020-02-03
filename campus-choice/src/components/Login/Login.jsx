import React from 'react';
import './login.css';

function Login() {
  return (
    <div>
    <div className="container">
      <div className="dropdown button-dropdown">
        <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
          <span className="button-bar" />
          <span className="button-bar" />
          <span className="button-bar" />
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-header">Dropdown header</a>
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">One more separated link</a>
        </div>
      </div>
      <div className="navbar-translate">
        <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title data-placement="bottom" target="_blank" data-original-title="Designed by Invision. Coded by Creative Tim">
          Now Ui Kit
        </a>
        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar top-bar" />
          <span className="navbar-toggler-bar middle-bar" />
          <span className="navbar-toggler-bar bottom-bar" />
        </button>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="../assets/img/blurred-image-1.jpg">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="../index.html">Back to Kit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/creativetimofficial/now-ui-kit/issues">Have an issue?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter">
              <i className="fab fa-twitter" />
              <p className="d-lg-none d-xl-none">Twitter</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook">
              <i className="fab fa-facebook-square" />
              <p className="d-lg-none d-xl-none">Facebook</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram">
              <i className="fab fa-instagram" />
              <p className="d-lg-none d-xl-none">Instagram</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="section section-signup" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg")', backgroundSize: 'cover', backgroundPosition: 'top center', minHeight: '700px'}}>
      <div className="container">
        <div className="row">
          <div className="card card-signup" data-background-color="orange">
            <form className="form" method action>
              <div className="card-header text-center">
                <h3 className="card-title title-up">Sign Up</h3>
                <div className="social-line">
                  <a href="#pablo" className="btn btn-neutral btn-facebook btn-icon btn-round">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="#pablo" className="btn btn-neutral btn-twitter btn-icon btn-lg btn-round">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#pablo" className="btn btn-neutral btn-google btn-icon btn-round">
                    <i className="fab fa-google-plus" />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="input-group no-border">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="now-ui-icons users_circle-08" />
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="First Name..." />
                </div>
                <div className="input-group no-border">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="now-ui-icons text_caps-small" />
                    </span>
                  </div>
                  <input type="text" placeholder="Last Name..." className="form-control" />
                </div>
                <div className="input-group no-border">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="now-ui-icons ui-1_email-85" />
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Email..." />
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#pablo" className="btn btn-neutral btn-round btn-lg">Get Started</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className=" container ">
        <nav>
          <ul>
            <li>
              <a href="https://www.creative-tim.com">
                Creative Tim
              </a>
            </li>
            <li>
              <a href="http://presentation.creative-tim.com">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          <p className="mb-0">Made with <a href="https://demos.creative-tim.com/now-ui-kit/index.html" target="_blank">Now UI Kit</a> by Creative Tim</p>
        </div>
      </div>
    </footer>
  </div>
  )
}
export default Login;
