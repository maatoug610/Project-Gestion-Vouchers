import HeaderVoucher from './HeaderVoucher';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
function AddVoucher() {
    {/* Declaration */ }
    const history = useHistory();
    const [data, setData] = useState([]);
    const [CodeVoucher, setCodeV] = useState("")
    const [Prix, setPrix] = useState("")
    const [NameVoucher, setNameV] = useState("")
    const [Description, setDesc] = useState("")
    const [file_image, setFile] = useState("")
    const [DateExpiration, setDate] = useState("")
    const [Categorie_id, setCat] = useState("")
    useEffect(async () => {
        getData();
    }, [])
    async function getData() {
        let result = await fetch("http://localhost:8000/api/listCategorie");
        result = await result.json();
        setData(result)

    }
    async function addVoucher() {
        console.warn(CodeVoucher, Prix, NameVoucher, Description, file_image, DateExpiration)
        const formData = new FormData();
        formData.append('file_image', file_image);
        formData.append('CodeVoucher', CodeVoucher);
        formData.append('Prix', Prix);
        formData.append('NameVoucher', NameVoucher);
        formData.append('Description', Description);
        formData.append('DateExpiration', DateExpiration);
        formData.append('Categorie_id', Categorie_id);

        let result = await fetch("http://localhost:8000/api/addVoucher", {
            method: 'POST',
            body: formData
        });

        history.push("/add");
    }
    return (
        <div>
            <HeaderVoucher />
            <div className="row">
                <div class="col-lg-10 col-md-12 offset-sm-1">
                    <div class="card bg-light">
                        <h1>Add Voucher page</h1>
                        <div class="card-body table-responsive">

                            <div className="col-sm-6 offset-sm-3">
                                <br />
                                <input type="text" id="req" className="form-control" placeholder="Titre.." onChange={(e) => setNameV(e.target.value)} required />
                                <br />
                                <input type="text" id="req" className="form-control" placeholder="Prix.." onChange={(e) => setPrix(e.target.value)} required />
                                <br />
                                <input type="text" id="req" className="form-control" placeholder="Code Voucher" onChange={(e) => setCodeV(e.target.value)} required />
                                <br />
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" onChange={(e) => setDesc(e.target.value)}></textarea>

                                </div>

                                <br />
                                <input type="file" id="req" className="form-control" placehloder="file_image.." onChange={(e) => setFile(e.target.files[0])} required />
                                <br />
                                <input type="date" id="req" className="form-control" placeholder="DateExpiration" onChange={(e) => setDate(e.target.value)} required />
                                <br />
                                <select onChange={(e) => setCat(e.target.value)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option value="">Select Categorie</option>
                                    {

                                        data.map((item) => {
                                            return <option value={item.id} >{item.NameCategorie}</option>
                                        }
                                        )}
                                </select>
                                <br />
                                <button onClick={addVoucher} className="btn btn-primary">Add Voucher</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddVoucher;