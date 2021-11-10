import HeaderCategorie from "./HeaderCategorie";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
function SearchCategorie() {
    const [data, setData] = useState([])
    useEffect(async () => {
        getData();
    }, [])
    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/searchCategorie/" + key);
        result = await result.json();
        console.warn(result)
        setData(result)
    }
    async function deleteOperation(id) {
        {/*alert(id)*/ }
        let result = await fetch("http://localhost:8000/api/deleteCategorie/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result)
        getData();
    }

    async function getData() {
        let result = await fetch("http://localhost:8000/api/listCategorie");
        result = await result.json();
        setData(result)
    }
    let user = JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory(); {/* used in routing */ }

    function logOut() {
        localStorage.clear();
        history.push('/register')
    }
    return (
        <div>
            <HeaderCategorie/>
            {/* *********************************************8 */}

            <div className="row">
                <div class="col-lg-10 col-md-11 offset-sm-1">

                    <div className="card bg-light">
                        <h1>Search Categorie</h1>
                        <div class="card-body table-responsive">
                            <br />
                            <div className="col-sm-6 offset-sm-3">
                                <i class="fa fa-search"></i><input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search Voucher.." />
                            </div>

                            <Table className="table table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <td scope="col"><i class="fa fa-key"></i>ID</td>

                                        <td scope="col"><i class="fa fa-keyboard-o"></i>Name Categorie</td>
                  
                                        <td><i class="fa fa-cogs"></i>Operation</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item) =>
                                            <tr>
                                                <td scope="row">{item.id}</td>
                                                
                                                <td>{item.NameCategorie}</td>
                                               
                                                <td>
                                                    <button onClick={() => deleteOperation(item.id)} className="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                                                    <Link to={"updateCategorie/" + item.id}>
                                                        <button className="btn btn-success"><i class="fa fa-edit"></i></button>
                                                    </Link>
                                                    <Link to={"showCategorie/" + item.id}>
                                                        <button className="btn btn-warning"><i class="fa fa-eye"></i></button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SearchCategorie;