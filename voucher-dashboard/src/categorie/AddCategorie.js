import HeaderCategorie from './HeaderCategorie';

import {  useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function AddCategorie() {
    const [NameCategorie, setNameC] = useState("")
    let user = JSON.parse(localStorage.getItem('user-info'))

    {/*console.warn(user)*/ }

    const history = useHistory(); {/* used in routing */ }
    function logOut() {
        localStorage.clear();
        history.push('/register')
    }

    async function addCategorie() {
        const formData = new FormData();
        formData.append('NameCategorie', NameCategorie);
        let result = await fetch("http://localhost:8000/api/addCategorie", {
            method: 'POST',
            body: formData
        });
        alert("Categorie Data Has Been Saved ..")
    }




    return (
        <div>
            <HeaderCategorie/>
            <div className="row">
                <div class="col-lg-10 col-md-12 offset-sm-1">
                    <div class="card bg-light">
                        <h1>Add Categorie page</h1>
                        <div class="card-body table-responsive">

                            <div className="col-sm-6 offset-sm-3">
                                <br />

                                <input type="text" id="req" className="form-control" placeholder="Name Categorie" onChange={(e) => setNameC(e.target.value)} required />
                                <br />

                                <button onClick={addCategorie} className="btn btn-primary">Add Categorie</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AddCategorie;