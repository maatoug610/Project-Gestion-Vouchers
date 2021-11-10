import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link ,useHistory} from 'react-router-dom';

function HeaderVoucher() {
  {/* {user} variable is to show it in the NavDropdown */}

  let user = JSON.parse(localStorage.getItem('user-info'))
  
  {/*console.warn(user)*/}

  const history = useHistory();{/* used in routing */}
  function logOut(){
    localStorage.clear();
    history.push('/register')
  }
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navbar_warapper">
            {/* this is to deference between view after register and befor */}
            {
              localStorage.getItem('user-info') ?
                <>
                  <Link to="/voucherlist"><i class="fa fa-database"></i>Voucher List</Link>
                  <Link to="/addVoucher"><i class="fa fa-plus-circle"></i>Add Voucher</Link>
                  {/*<Link to="/update">Update Voucher</Link>*/}
                  <Link to="/searchVoucher"><i class="fa fa-search"></i>Search Voucher</Link>
                </>
                :
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>

            }

          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* this is to hide navDropdown after Logout*/}
      { localStorage.getItem('user-info')?
      <Nav className="col-sm-2">
       
        <NavDropdown title={user.name} >
          <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
        </NavDropdown>
        <i class="fa fa-user-circle"></i>
      </Nav>
      :null 
          }
    </Navbar>
  )
}
export default HeaderVoucher;
