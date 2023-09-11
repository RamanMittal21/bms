import React from 'react'; 
import {useEffect,useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
let GetBooks=()=>{
    const [myData,setMyData]=useState([]);
    useEffect(()=>{
        axios.get("demo/showBooks")
        .then((res)=>{
            setMyData(res.data);
            console.log(res);
        })
    },[]);

    const deleteBook = (bookId)=>{

        axios.delete(`demo/deleteBook/${bookId}`).then(res => {
            const del = myData.filter(data => bookId !== data.bookId);
            setMyData(del);
        })
    }

    

    return(
        <div>
            <nav class="navbar bg-body-tertiary  bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Book Store</a>
            </div>
            </nav>
            <br/>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th scope='col'>Book id</th>
                    <th scope='col'>Book Name</th>
                    <th scope='col'>Book Price</th>
                    <th scope='col'>Action</th>

                </tr>
                </thead>
                <tbody>
               {
                myData.map((row)=>{
                    return(
                        <tr>
                            <td>{row.bookId}</td>
                            <td>{row.bookName}</td>
                            <td>{row.price}</td>
                            <td>
                                <button class="btn btn-danger" onClick={e=>deleteBook(row.bookId)}>Delete</button>
                                <Link class="btn btn-primary" to="/updateBook">Update</Link>
                            </td>
                        </tr>
                    );
                })
               }
               </tbody>
            </table>
            <Link className='btn btn-primary' to ="/addBook">Add Book</Link>
        </div>
    );
}
export default GetBooks;