import React,{useState} from 'react';
import axios from 'axios';

export default function AddBook(){

  const initialBookState = {
    title: "",
    isbn:"",
    author:"",
  };

  const [book, setBook] = useState(initialBookState);

  const handleChange=(e)=>{
    const {id,value}=e.target;
    setBook({...book,[id]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(book);
    //send the data to Node server via axios
    axios.post('http://localhost:8000/add',book)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
        
  }

  return(
    <div className="d-flex my-5 flex-column mx-auto w-50">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">Enter Book Title:</label>
        <input className="form-control mb-3" type="text" value={book.title} id="title" onChange={handleChange} required/>

        <label htmlFor="author" className="form-label">Enter Book Author:</label>
        <input className="form-control mb-3" type="text" value={book.author} id="author" onChange={handleChange} required/>

        <label htmlFor="isbn" className="form-label">Enter Book ISBN:</label>
        <input className="form-control mb-3" type="text" value={book.isbn} id="isbn" onChange={handleChange} required/>

        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )

}
