import { Link,useHistory } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Dashboard() {
  
  let user = JSON.parse(localStorage.getItem('user-info'))
  
  {/*console.warn(user)*/}

  const history = useHistory();{/* used in routing */}
  function logOut(){
    localStorage.clear();
    history.push('/register')
  }
  return (
    <>
      <div class="wrapper">
    <div class="sidebar" data-color="purple" data-background-color="green" data-image="../assets/img/sidebar-1.jpg">

      <div class="logo"><a  class="simple-text logo-normal">
        <img src="../assets/img/Logo.png" alt="" width="50" height="50"/>
          Voucher OnLine
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active ">
            <Link to="/dashboard" className="nav-link" >
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link to="/voucherlist" className="nav-link">
            <i class="fa fa-credit-card-alt"></i>
              <p>Gestion Vouchers</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link to="/categorielist" className="nav-link">
            <i class="fa fa-tags"></i>
              <p>Gestion Categorie</p>
            </Link>
          </li>


           <li class="nav-item ">
            <a class="nav-link" href="{{ url('note') }}">
              <i class="material-icons">receipt</i>
              <p>Gestion Notes</p>
            </a>
          </li>

          <li class="nav-item ">
            <a class="nav-link" href="{{ url('cour') }}">
              <i class="material-icons">school</i>
              <p>Gestion Cours</p>
            </a>
          </li>

          <li class="nav-item ">
            <a class="nav-link" href="{{ url('diplome') }}">
              <i class="material-icons">badge</i>
              <p>Gestion Diplome</p>
            </a>
          </li>

          <li class="nav-item ">
            <a class="nav-link" href="{{ url('user')}}">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>
        
          
        </ul>
      </div>
    </div>
    <div class="main-panel">
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/dashboard"><button className="btn btn-dark"><strong>Dashboard</strong></button></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navbar_warapper">
            
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* this is to hide navDropdown after Logout*/}
      { localStorage.getItem('user-info')?
      <Nav className="col-sm-2">
       
        <NavDropdown title={user && user.name} >
          <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
        </NavDropdown>
        <i class="fa fa-user-circle"></i>
      </Nav>
      :null 
          }
    </Navbar>

      <div class="content">
        
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                  </div>
                  <p class="card-category">Used Space</p>
                  <h3 class="card-title">49/50
                    <small>GB</small>
                  </h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons text-danger">warning</i>
                    <a href="javascript:;">Get More Space...</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">store</i>
                  </div>
                  <p class="card-category">Revenue</p>
                  <h3 class="card-title">$34,245</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">info_outline</i>
                  </div>
                  <p class="card-category">Fixed Issues</p>
                  <h3 class="card-title">75</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">local_offer</i> Tracked from Github
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                  <div class="card-icon">
                    <i class="fa fa-facebook"></i>
                  </div>
                  <p class="card-category">Followers</p>
                  <h3 class="card-title">+245</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <footer class="footer">
        <div class="container-fluid">
          <nav class="float-left">
            <ul>
              
              <li>
                <a href="#">
                  About Us
                </a>
              </li>
             
            </ul>
          </nav>
          <div class="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, made with <i class="material-icons">favorite</i> by
            <a href="https://www.facebook.com/khalil.maatoug.77" target="_blank">Maatoug Khalil</a>.
          </div>
        </div>
      </footer>
    </div>
  </div>
 
        </>
        )
}

export default Dashboard;
