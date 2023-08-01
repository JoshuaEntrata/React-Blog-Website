import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Category } from "./components/category/Category";
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";
import { Login } from "./pages/login/Login";
import { Account } from "./pages/account/Account";
import { Register } from "./pages/login/Register";
import { Create } from "./components/create/Create";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;