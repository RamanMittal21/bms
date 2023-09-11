import React from 'react'; 
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let UpdateBook = ()=>{

    const navigate = useNavigate();
    const [data, setData] = useState({
        bookId:"",
        bookName: "",
        price:""
      });

      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            bookId:data.bookId,
            bookName: data.bookName,
            price: data.price
        };
        axios.put(`demo/updateBook/${data.bookId}`, userData).then((response) => {
          console.log(response.status, response.data.token);
            navigate("/showBooks");
        });
      };

    return (
        <div>
        <h1>Update Book</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="bookId" class="form-label">Book Id</label>
            <input type="number" class="form-control" name="bookId" value={data.bookId} onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label for="bookName" class="form-label">Book Name</label>
            <input type="text" class="form-control" name="bookName" value={data.bookName} onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" name="price" value={data.price} onChange={handleChange}/>
          </div>
          
          
          <button type="submit" className='btn btn-primary'>Update Book</button>
        </form>
        </div>
    );
}

export default UpdateBook;