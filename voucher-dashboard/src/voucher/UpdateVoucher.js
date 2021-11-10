import HeaderVoucher from './HeaderVoucher';
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UpdateVoucher(props) {
    const [data, setData] = useState([]);
    const [CodeVoucher, setCodeV] = useState("")
    const [Prix, setPrix] = useState("")
    const [NameVoucher, setNameV] = useState("")
    const [Description, setDesc] = useState("")
    const [file_image, setFile] = useState("")
    const [DateExpiration, setDate] = useState("")


    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/getvoucher/" + props.match.params.id);
        result = await result.json();
        setData(result)
    })
    async function update() {

        const formData = new FormData();
        formData.append('file_image', file_image);
        formData.append('CodeVoucher', CodeVoucher);
        formData.append('Prix', Prix);
        formData.append('NameVoucher', NameVoucher);
        formData.append('Description', Description);

        formData.append('DateExpiration', DateExpiration);

        let result = await fetch("http://localhost:8000/api/updatevoucher/" + props.match.params.id, {
            method: 'PUT',
            body: formData

        });
        alert("Data has been Changed")


    }
    return (
        <div>
            <HeaderVoucher />
            <div className="row">
                <div class="col-lg-10 col-md-12 offset-sm-1">
                    <div class="card bg-light">
                        <div class="card-body table-responsive">
                            <h1> Update Voucher page</h1>
                            <br />
                            <div className="col-sm-6 offset-sm-3">
                                <input className="form-control" type="text" defaultValue={data.Prix} /><br />
                                <input className="form-control" type="text" defaultValue={data.CodeVoucher} aria-label="Disabled input example" disabled readonly /><br />
                                <input className="form-control" type="text" defaultValue={data.NameVoucher} /><br />
                                <input className="form-control" type="text" defaultValue={data.Description} /><br />
                                <input className="form-control" type="date" defaultValue={data.DateExpiration} /><br />
                                <input className="form-control" type="file" defaultValue={data.file_image} /><br />
                                <img className="img-thumbnail" style={{ width: 200 }} src={"http://localhost:8000/" + data.file_image} /><br />
                                <button onClick={update} className="btn btn-warning" >Update Voucher</button>
                            </div>
                        </div>
                    </div></div></div></div>
    )
}
export default withRouter(UpdateVoucher);