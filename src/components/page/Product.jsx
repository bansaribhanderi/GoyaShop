import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaFacebookF, FaInstagram, FaPinterest, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { IoMenu, IoSearch } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Login from "../Login";
const Product = () => {

    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getallproduct")
      .then(function (res) {
        // handle success
        console.log(res.data.productData);
        setData(res.data.productData.reverse());
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);

  
    return(
        <>

               {/* =========================== header start ========================== */}
               <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div>
      <Navbar expand="lg" className="bg-body-tertiary1">
        <Container className="naviogation">
          <IoMenu className="menu" />
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#main"><Link to="/home">Home</Link></Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#product"><Link to="/product">Product</Link></Nav.Link>
              <Nav.Link href="#pages">Pages</Nav.Link>
              <Nav.Link href="#journal">Journal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="img_logo m-auto">
            <img src={require("../img/logo-light.png.webp")} alt="" />
          </div>
          <Nav.Link href="#login" onClick={() => setModalShow(true)}>Login</Nav.Link>
          <IoSearch className="serach" />
          <FaRegHeart className="heart" />
          <FiShoppingBag className="bag" />
        </Container>
      </Navbar>
      </div>

      {/* ============================== header end ========================= */}

      {/* =========================== all product =========================*/}

             <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6 all">
                  <h1>All product</h1>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {data.map((item) => {
                  return (
                    <>
                      {/* left column */}
                      <div className="col-xxl-3 d-flex justify-content-center">
                        <div class="outer-image">
                        <Link to={`/Singaldata/${item._id}`}>
                          <img src={item.image[0]} alt="" />
                          </Link>
                          <div class="inner-image">
                          <Link to={`/Singaldata/${item._id}`}>
                            <img src={item.image[1]} alt="" />
                          </Link>
                          </div>
                          <div class="products-fonts">
                            <h3>{item.title}</h3>
                            <div className="product-price">
                              <span className="first-span">${item.price}</span>
                              <span className="second-span">
                                ({item.discount}% OFF)
                              </span>
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>

      {/* =========================== all product end =========================*/}
      {/* ============================ section 6 ================================= */}

      <div className="line2"></div>
      <div className="d-flex container">
        <div className="p1">
          <p className="p-color">COMPANY</p>
          <p className="p-line">About Us</p>
          <p className="p-line">Contact</p>
          <p className="p-line">Store Locations</p>
          <p className="p-line">Careers</p>
        </div>

        <div className="p2">
          <p className="p-color">HELP</p>
          <p className="p-line">Order Tracking</p>
          <p className="p-line">FAQ’s</p>
          <p className="p-line">Privacy Policy</p>
          <p className="p-line">Terms & Conditions</p>
        </div>

        <div className="p3">
          <p className="p-color">STORE</p>
          <p className="p-line">Women</p>
          <p className="p-line">Men</p>
          <p className="p-line">Speakers</p>
        </div>

        <div className="p4">
          <p className="p-color">FOLLOW US</p>
          <p>And get Free Shipping on all your orders!</p>
          <div className="d-flex">
          <FaFacebookF className="face"/>
          <img className="logo-x" src={require("../img/x-social-media-black-icon.png")} alt=""/>
          <FaInstagram className="insta"/>
          <FaPinterest className="pin"/>
          </div>
        </div>
      </div>
      <div>
        <h3 className="h3_visit">Sign up now & get 10% off</h3>
        <p className="p_visit">
        Be the first to know about our new arrivals and exclusive offers.
        </p>
        <div className="input-type">
          <input type="email" name="" id="" placeholder="Your email address" className="email-com"/>
          <input type="submit" value="Sign up" className="boder-btn"/>
        </div>
      </div>
      <div className="line2"></div>
      <div className="d-flex container">
        <p className="text-p1">Privcy Policy</p>
        <p className="text-p2">Terms & Conditions</p>
        <p className="text-p3">©2021 Goya - WordPress Theme</p>
      </div>
      {/* ============================ section 6 end ================================= */}
        

        </>
    )
}
export default Product
    
