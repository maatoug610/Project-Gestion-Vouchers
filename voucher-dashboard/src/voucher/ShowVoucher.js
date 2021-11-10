import HeaderVoucher from './HeaderVoucher';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ShowVoucher(props) {
    const [data, setData] = useState([]);
    console.warn("props", props.match.params.id)

    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/getvoucher/" + props.match.params.id);
        result = await result.json();
        setData(result)
    })
    return (
        <>
            <HeaderVoucher />
            <div className="row">
                <div class="col-lg-10 col-md-12 offset-sm-1">
                    <div class="card-body table-responsive">

                        <div className="col-sm-6 offset-sm-4">
                            <div class="card bg-light" style={{ width: 400 }}>
                                <h1>Details</h1>
                                <img src={"http://localhost:8000/" + data.file_image} className="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 className="card-title">{data.NameVoucher}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Prix:{data.Prix}</li>
                                    <li className="list-group-item">Code:{data.CodeVoucher}</li>
                                    <li className="list-group-item">{data.Description}</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default withRouter(ShowVoucher);