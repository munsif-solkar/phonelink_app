import {React,useState} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import logo from './logo.png'
import SearchResults from "./components/Search/SearchResults";

import ProductPage from "./components/ProductPage/ProductPage";
import CategoryResults from "./components/categories/CategoryResults";

import './App.css'



const App = () => {

  return (
  <div>
    <Router>
    <Navbar data={{logo:logo}} />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/category/:category" element={<CategoryResults/>}/>
        <Route path="/search" element={<SearchResults/>}/>
      </Routes>
    </Router>
  </div>)
};

export default App;
