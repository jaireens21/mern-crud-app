import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/Book';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList/>}/>
        <Route path="/add" element={<AddBook/>}/>
        <Route path="/books/:id" element={<Book/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

