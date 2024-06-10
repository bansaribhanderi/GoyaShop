import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoMenu, IoSearch } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import Login from "./Login";
import { IoIosClose } from "react-icons/io";

const Singaldata = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/getsingleproduct/${id}`)
      .then(function (res) {
        // handle success
        console.log(res.data);
        setData(res.data.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);

  const addCart = (prodId) => {
    console.log(prodId);
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      setModalShow(true);
    }
    if (userId) {
      axios
        .post(
          `http://localhost:5000/cart/addtocart?userId=${userId}&productId=${prodId}`
        )
        .then(function (response) {
          // handle success
          console.log(response);
          setVisible(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    if (!userid) {
      setModalShow(true);
    }
    axios
      .get(`http://localhost:5000/cart/getalldataofcart/${userId}`)
      .then(async (res) => {
        // handle success
        console.log(res.data.addtocartdata.user.product);
        await setCartData(res.data.addtocartdata.user.product);
        setCartId(res.data.addtocartdata.cartId);
      });
  };

  var total = 0;
  let userid = sessionStorage.getItem("userId");
  useEffect(() => {
   
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/getsingleproduct/${id}`)
      .then(function (res) {
        // handle success
        console.log(res.data);
        setData(res.data.data);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* =========================== header start ========================== */}
      <Login show={modalShow} onHide={() => setModalShow(false)} />
      <div>
        <Navbar expand="lg" className="bg-body-tertiary1">
          <Container className="naviogation">
            <IoMenu className="menu" />
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#main">
                  <Link to="/home">Home</Link>
                </Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>
                <Nav.Link href="#product">
                  <Link to="/product">Product</Link>
                </Nav.Link>
                <Nav.Link href="#pages">Pages</Nav.Link>
                <Nav.Link href="#journal">Journal</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="img_logo m-auto">
              <img src={require("./img/logo-light.png.webp")} alt="" />
            </div>
            <Nav.Link href="#login" onClick={() => setModalShow(true)}>
              Login
            </Nav.Link>
            <IoSearch className="serach" />
            <FaRegHeart className="heart" />
            <FiShoppingBag className="bag" />
          </Container>
        </Navbar>
      </div>

      {/* ============================== header end ========================= */}

      {/* {modalShow1 ? (
        <Addcard
          show={modalShow1}
          onHide={() => setModalShow1(false)}
          productId={id}
        />
      ) : null} */}

      <div className="container">
        <div className="singal-pro">
          <div class="outer1-image d-flex">
            <img src={data.image ? data.image[0] : ""} alt="" />
            <div class="inner1-image">
              <img src={data.image ? data.image[1] : ""} alt="" />
            </div>
            <div class="products1-fonts">
              <h1>{data.title}</h1>
              <div className="product1-price">
                <span className="first1-span">${data.price}</span>
                <span className="second1-span">({data.discount}% OFF)</span>
              </div>
              <p className="icon1 d-flex">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </p>
              <p>{data.description}</p>
              <button
                className="add-btn"
                onClick={() => {
                  addCart(data._id);
                  handleShow();
                }}
              >
                Add to cart
              </button>

              {/* ========================== Add to Cart =========================== */}

              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {console.log(data)}
                  {(cartData.length)?cartData.map((item) => {
                    total += parseInt(item.productPrice);
                    console.log(item);
                    return (
                      <>
                        <div className="container">
                          <div className="singal-pro1">
                            <div class="outer1-image1 d-flex">
                              <img
                                src={item.productImage ? item.productImage[0] : ""}
                                alt=""
                              />
                              <div class="inner11-image">
                                <img
                                  src={item.productImage ? item.productImage[1] : ""}
                                  alt=""
                                />
                              </div>
                              <div class="products11-fonts">
                                <div className="d-flex delbtnclo">
                                <h5 className="title-text">{item.productTitle}</h5>
                                <button className="closee"><IoIosClose /></button>
                                </div>
                                <div className="count-num d-flex">
                                  <p className="coun">ProductQty : {item.productQty}</p>
                                  <span className="first1-span1">
                                    ${item.productPrice}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }):null}
                  <hr className="linee" />
                </Offcanvas.Body>
                <div className="container">
                  <p>Subtotal:</p>
                  <p className="shiping">You've got free shipping!</p>
                </div>
                <div className="container d-flex justify-content-center align-items-center">
                  <div>
                    <ProgressBar variant="success" now={100} className="bar" />
                  </div>
                  <div>
                    <h5 className="per">100%</h5>
                  </div>
                </div>
                <div className="container">
                  <button className="cart1">View cart</button>
                </div>
                <div className="container">
                  <button className="checkout">Checkout</button>
                </div>
              </Offcanvas>

              {/* ======================= end Add to Cart ====================== */}
            </div>
          </div>
        </div>
      </div>
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
          <p className="p-line">FAQ's</p>
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
            <FaFacebookF className="face" />
            <img
              className="logo-x"
              src={require("../components/img/x-social-media-black-icon.png")}
              alt=""
            />
            <FaInstagram className="insta" />
            <FaPinterest className="pin" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="h3_visit">Sign up now & get 10% off</h3>
        <p className="p_visit">
          Be the first to know about our new arrivals and exclusive offers.
        </p>
        <div className="input-type">
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email address"
            className="email-com"
          />
          <input type="submit" value="Sign up" className="boder-btn" />
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
  );
};
export default Singaldata;
