//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from './components/AddBook';
import GetBooks from './components/GetBooks';
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="showBooks" index element ={<GetBooks/>}/>
        <Route path="addBook" element ={<AddBook/>}/>
        <Route path="updateBook" element ={<UpdateBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
