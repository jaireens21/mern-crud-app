import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BookList(){

    const [bookList,setBookList]=useState([]);
    
    useEffect(()=>{
    axios.get('http://localhost:8000/books')
      .then(res => setBookList(res.data))
      .catch(err => console.log(err));
    },[]);
    
    return(
        <div>
            <ul>
                {bookList.map(book=>(
                <li key={book.isbn}><Link to={"/books/"+ book._id}>{book.title} by {book.author}</Link>  </li>))}
            </ul>
        </div>
    )

}