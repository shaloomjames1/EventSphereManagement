import React from 'react'

const UserList = () => {
  return (
    
    <>
{/* 
<div className="breadcrumb-area breadcrumb-mt breadcrumb-ptb-2">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h2>Login / Register</h2>
                            <ul>
                                <li>
                                    <Link to="/">Home </Link>
                                </li>
                                <li><span> </span></li>
                                <li>
                                    <a href="index.html">Product </a>
                                </li>
                                <li><span> </span></li>
                                <li className="active">Register </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

      <div className="login-register-area bg-gray pt-155 pb-160">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 ms-auto me-auto">
              <div className="login-register-wrapper">
                <div className="login-register-tab-list nav">
                  <a data-bs-toggle="tab" href="#lg2">
                    <h4> User List </h4>
                  </a>
                </div>
                <div className="tab-content">
                  <div id="lg1" className="tab-pane active">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <div className="container-fluid">
                          <div className="container-fluid">
                            <table class="table table-striped table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList