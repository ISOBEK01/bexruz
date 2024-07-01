import './App.css';
import { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { HiOutlineGlobe } from 'react-icons/hi';
import { IoMdMenu } from "react-icons/io";
// import Login from "./components/login/Login"
import logo from './assets/img/logo.svg';
import { CiSearch } from "react-icons/ci";
function App() {
  const [region, setRegion] = useState("Toshkent");
  const [languageValue, setLanguageValue] = useState("O'Z");
  const [active, setActive] = useState(false)
  
  return (
    <div className="App">
      <header>
        <div className="nav">
          <div className="navbar">
            <div className="container">
              <p className="text"><MdOutlineLocationOn title='location' className='lo' />{region}</p>
              <div className="box">
                <p onClick={() => setRegion("Sirdaryo")}>Buxoro</p>
                <p onClick={() => setRegion("Samarqand")}>Termiz</p>
                <p onClick={() => setRegion("Toshkent")}>Bagʻdod</p>
                <p onClick={() => setRegion("Sirdaryo")}>Toshkent</p>
                <p onClick={() => setRegion("Samarqand")}>Chirchiq</p>
                <p onClick={() => setRegion("Toshkent")}>Nukus</p>
                <p onClick={() => setRegion("Sirdaryo")}>Samarkand</p>
                <p onClick={() => setRegion("Samarqand")}>Andijon</p>
                <p onClick={() => setRegion("Toshkent")}>Qarshi</p>
                <p onClick={() => setRegion("Sirdaryo")}>Farg'ona</p>
                <p onClick={() => setRegion("Samarqand")}>Marg'ilon</p>
                <p onClick={() => setRegion("Toshkent")}>Namangan</p>
                <p onClick={() => setRegion("Sirdaryo")}>Chust</p>
                <p onClick={() => setRegion("Samarqand")}>Yangiyo‘l</p>
                <p onClick={() => setRegion("Toshkent")}>Qo‘qon</p>
                <p onClick={() => setRegion("Sirdaryo")}>Navoiy</p>
                <p onClick={() => setRegion("Samarqand")}>Keles</p>
                <p onClick={() => setRegion("Toshkent")}>Beshariq</p>
              </div>
            </div>
            <div className="pp">
              <p>Bizning do'konlarimiz</p>
              <p className='b'>Yuridik shaxslar uchun</p>
              <p>To'lov usullari</p>
              <a className='hra' href="tel:+998932382015"><p>Aloqa markazi :&nbsp;&nbsp;&nbsp;<span>+99871 209 99 44</span></p></a>
            </div>
            <div className='header-top-language-div'>
              <div className='header-top-language'>
                <HiOutlineGlobe className='language-global-icons' />
                <p className='language-global-value'>{languageValue}</p>
                <IoIosArrowDown className='language-arrow-icons' />
              </div>
              <div className='language-hover-value'>
                <p className='language-hover-value-list' onClick={() => setLanguageValue("РУ")}>РУ</p>
                <p className='language-hover-value-list' onClick={() => setLanguageValue("УЗ")}>УЗ</p>
              </div>
            </div>
          </div>

        </div>
        <div>
      </div>
      </header>

    </div>

  );

}

export default App;
