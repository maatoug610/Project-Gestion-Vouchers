import HeaderVoucher from './HeaderVoucher';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SearchVoucher() {
    const [data, setData] = useState([])
    useEffect(async () => {
        getData();
    }, [])
    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/" + key);
        result = await result.json();
        console.warn(result)
        setData(result)
    }
    async function deleteOP(id) {
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
        <>
            <HeaderVoucher />

            <div className="row">
                <div class="col-lg-10 col-md-11 offset-sm-1">
                
                <div className="card bg-light">
                <h1>Search Voucher</h1>
                        <div class="card-body table-responsive">
                            <br />
                            <div className="col-sm-6 offset-sm-3">
                                <i class="fa fa-search"></i><input type="text" onChange={(e) => search(e.target.value)} className="form-control" placeholder="Search Voucher.." />
                            </div>

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
                                                <td><img style={{ width: 70 }} src={"http://localhost:8000/" + item.file_image} /></td>
                                                <td>
                                                    <button onClick={() => deleteOP(item.id)} className="btn btn-danger"><i class="fa fa-trash-o"></i></button>
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
            

        </>
    )
}
export default SearchVoucher;