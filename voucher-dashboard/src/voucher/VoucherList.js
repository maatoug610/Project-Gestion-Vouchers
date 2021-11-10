import HeaderVoucher from './HeaderVoucher';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VoucherList() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        getData();
    }, [])
    async function deleteOperation(id) {
        {/*alert(id)*/ }
        let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result)
        getData();
    }

    async function getData() {
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result)
    }
    return (
        <div>
            <HeaderVoucher />
            <div className="row">
                <div class="col-lg-10 col-md-12 offset-sm-1">
                    <div className="card bg-light">
                        <h1>Application De Gestion De Voucher</h1>
                        <div class="card-body table-responsive">
                            <Table className="table table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <td scope="col"><i class="fa fa-key"></i>ID</td>
                                        <td scope="col"><i class="fa fa-shopping-cart"></i>Prix</td>
                                        <td scope="col"><i class="fa fa-qrcode"></i>CodeV</td>
                                        <td scope="col"><i class="fa fa-keyboard-o"></i>NameV</td>
                                        <td scope="col"><i class="fa fa-comments-o"></i>Description</td>
                                        <td scope="col"><i class="fa fa-calendar"></i>Date Expiration</td>
                                        <td scope="col"><i class="fa fa-image"></i>Photo</td>
                                        <td scope="col"><i class="fa fa-pie-chart"></i>Categorie</td>
                                        <td><i class="fa fa-cogs"></i>Operation</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item) =>
                                            <tr>
                                                <td scope="row">{item.id}</td>
                                                <td>{item.Prix}</td>
                                                <td>{item.CodeVoucher}</td>
                                                <td>{item.NameVoucher}</td>
                                                <td>{item.Description}</td>
                                                <td>{item.DateExpiration}</td>
                                                <td><img className="card-img-top" style={{ width: 70 }} src={"http://localhost:8000/" + item.file_image} /></td>
                                                <td>{item.NameCategorie}</td>
                                                <td>
                                                    <button onClick={() => deleteOperation(item.id)} className="btn btn-danger"><i class="fa fa-trash-o"></i></button>
                                                    <Link to={"update/" + item.id}>
                                                        <button className="btn btn-success"><i class="fa fa-edit"></i></button>
                                                    </Link>
                                                    <Link to={"show/" + item.id}>
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
export default VoucherList;