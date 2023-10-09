import React from 'react'
import './App.css';

import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Features from './components/features/Features'
import Menu from './components/menu/Menu'
import Gallery from './components/gallery/Gallery'
import Team from './components/team/Team'
import Reserve from './components/reserve/Reserve'
import Review from './components/review/Review'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import AdminDashboard from './components/dashboard/Dashboard';


//react-router-dom
const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/menu" element={<Menu />} />         
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Routes>
      </Router>
      <Footer />
    </>


    // <>
    // <Header/>
    // <Home/>
    // <About/>
    // <Features/>
    // <Menu/>
    // <Choose/>
    // <Figures/>
    // <Gallery/>
    // <Offer/>
    // <Team/>
    // <Reserve/>
    // <Review/>
    // <Footer/>
    // </>
  )
}

export default App;