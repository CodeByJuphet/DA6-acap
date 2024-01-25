import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Villages from '../pages/Villages';
import Farmers from "../pages/Farmers";
import { useState } from "react";

function Nav() {
    
    return (
        <>
        <BrowserRouter basename="/">
        <header className="navbar navbar-expand-lg bd-navbar sticky-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">AMIA R6 VIEWING</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/villages" className="nav-link">Vilage</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">DOCUMENT MONITORING</a>
                    </li>
                    <li className="nav-item">
                    <Link to="/farmers" className="nav-link">Farmers</Link>
                    </li>
                    </ul>
                    <button className="btn btn-outline-success float-end" type="submit">Login</button>
                </div>
                </div>
            </nav>
        </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/villages' element={<Villages />}></Route>
        <Route path='/farmers' element={<Farmers />}></Route>
      </Routes>  
    </BrowserRouter>
    </>
    );
}

export default Nav;