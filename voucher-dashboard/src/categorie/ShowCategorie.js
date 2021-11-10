import HeaderCategorie from "./HeaderCategorie";
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function ShowCategorie(props) {

    let user = JSON.parse(localStorage.getItem('user-info'))

    {/*console.warn(user)*/ }

    const history = useHistory(); {/* used in routing */ }
    function logOut() {
        localStorage.clear();
        history.push('/register')
    }
    async function getData() {
        let result = await fetch("http://localhost:8000/api/listCategorie");
        result = await result.json();
        setData(result)
    }
    useEffect(async () => {
        getData();
    }, [])
    const [data, setData] = useState([]);
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/getCategorie/" + props.match.params.id);
        result = await result.json();
        setData(result)
    })
    return (
        <div>
            <HeaderCategorie/>
            <br /><br /><br /><br />
            <div className="row">
                <div class="col-lg-6 col-md-12 offset-sm-3">
                    <div class="card text-center">
                        <div class="card-body bg-light">
                            <h1 class="card-title">Categorie</h1>
                            <p class="card-text">Name Of Categorie is :</p>
                            <a href="" class="btn btn-primary"><strong>{data.NameCategorie}</strong></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default withRouter(ShowCategorie);