import HeaderCategorie from "./HeaderCategorie";
import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

function UpdateVoucher() {

    const { id } = useParams();

    {/****************** Login ******************************* */ }
    let user = JSON.parse(localStorage.getItem('user-info'))

    const history = useHistory(); {/* used in routing */ }
    function logOut() {
        localStorage.clear();
        history.push('/register')
    }


    const [data, setData] = useState([]);
    const [NameCategorie, setNameC] = useState("")




    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/getCategorie/" + id);
        result = await result.json();
        setData(result)
    })
    {/**************************** Update ***************************** */ }
    async function update() {
        console.log(NameCategorie);
        let categorie = {
            id: id,
            NameCategorie: NameCategorie
        }
        let formData = new FormData();
        formData.append('NameCategorie', NameCategorie);
        formData.append('id', id);
        console.log(categorie);
        const res = await axios.put(`http://localhost:8000/api/updateCategorie/${id}`, categorie);
        if (res.data.status === 200) {
            history.push("/categorielist");
        }
        /*let result = await fetch("http://localhost:8000/api/updateCategorie/" + id, {
            method: 'PUT',
            body: formData

        });
        alert("Data Categorie has been Changed")*/


    }

    return (
        <div>
            <HeaderCategorie/>
            <div className="row">
                <div class="col-lg-10 col-md-12 offset-sm-1">
                    <div class="card bg-light">
                        <div class="card-body table-responsive">
                            <h1> Update Categorie page</h1>
                            <br />
                            <div className="col-sm-6 offset-sm-3">
                                <input className="form-control" type="text" defaultValue={data.NameCategorie} onChange={(e) => setNameC(e.target.value)} /><br />
                                <button onClick={update} className="btn btn-warning" >Update Voucher</button>
                            </div>
                        </div>
                    </div></div></div>
        </div>
    )
}
export default UpdateVoucher;