import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Book(){

    const [book,setBook]=useState({});

    let {id}=useParams();
    // console.log(id);

    useEffect(()=>{
        axios.get(`http://localhost:8000/books/${id}`)
        .then(res => setBook(res.data))
        .catch(err => console.log("error in axios:",err));
    },[]);
    
    return (
        <div>
            <h1>BOOK details</h1>
            <h2>Title: {book.title}</h2>
            <h2>Author: {book.author}</h2>
            <h2>ISBN: {book.isbn}</h2>
        </div>
    )

}