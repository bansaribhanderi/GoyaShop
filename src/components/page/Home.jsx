import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaPinterest, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoMenu } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";
import { GrView } from "react-icons/gr";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Login from "../Login.jsx";
import React from "react";

const Home = () => {

  const [modalShow, setModalShow] = React.useState(false); 


  return (
    <>
      {/* =========================== header start ========================== */}
      <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Navbar expand="lg" className="bg-body-tertiary">
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
            <img src={require("../img/logo-light.png.webp")} alt="" />
          </div>
          <Nav.Link href="#login"onClick={() => setModalShow(true)}>Login</Nav.Link>
          <IoSearch className="serach" />
          <FaRegHeart className="heart" />
          <FiShoppingBag className="bag" />
        </Container>
      </Navbar>

      {/* ============================== header end ========================= */}

      {/* =============================  carousal start ========================= */}

      <div class="">
        <OwlCarousel items={1} className="owl-theme" loop nav margin={0}>
          <div className="img_owl">
            <div className="tages">
              <p className="off">50% OFF</p>
              <h1 className="h1tag">New Cocktail Dresses</h1>
              <h4 className="h4tag">Shop Now</h4>
            </div>
          </div>
          <div className="img_owl1">
            <div className="tages">
              <p className="spring">SPRING/SUMMER '19</p>
              <h1 className="h1tag2">The Weekent Getaway </h1>
              <h4 className="h4tag2">Browse styles</h4>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/* =============================== carousal end =========================== */}

      {/* ============================== section 1 ================================ */}

      <div>
        <div className="container">
          <div className="row main-card">
            <div className="col-xxl-4 col-xl-4 col-lg-4  first-card">
              <div className="bg-card-img1 card-content">
                <div>
                  <h3 className="h3_intages1">Clearance Sales</h3>
                  <button className="btn_intages2">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 first-card">
              <div className="bg-card-img2 card-content">
                <div>
                  <h3 className="h3_intages1">Choose Your Price</h3>
                  <button className="btn_intages1">Choose Yours</button>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 ">
              <div className="bg-card-bg-color card-content third-card">
                <div>
                  <h3 className="h3_intages1">Clearance Sales</h3>
                  <p className="p_intages2">Up to 70% Off & Free Shipping</p>
                  <button className="btn_intages2">Browse Sales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================== section 1 end ================================ */}

      {/* ============================ section 2 ================================= */}

      <div className="line"></div>

      <div>
        <h3 className="h3_best">Best Selling</h3>
        <p className="p_best">
          Bushwick blue bottle photo booth copper mug marfa craft beer pour-over
          swag subway tile organic cloud bread.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wo-1">
            <div className="women-1">
              <div className="d-flex justify-content-end mx-3 py-3">
                <FaRegHeart />
              </div>
              <div className="women-1-hover">
                <div className="three-icons">
                  <div className="d-flex justify-content-canter align-items-center mx-3 py-3 reheart">
                    <FaRegHeart className="re1" />
                  </div>
                  <div className="d-flex justify-content-canter align-items-center mx-3 py-3 rishop">
                    <RiShoppingBag3Line className="re2" />
                  </div>
                  <div className="d-flex justify-content-canter align-items-center mx-3 py-3 view">
                    <GrView className="re3" />
                  </div>
                </div>
              </div>
            </div>

            <div className="women-1-text">
              <h5>Cashmere Tank + Bag</h5>
              <p>$39.00 - $98.00</p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wo-2">
            <div className="women-2">
              <div className="d-flex justify-content-end mx-3 py-3">
                <FaRegHeart />
              </div>
              <div className="women-2-hover">
                <div className="d-flex justify-content-canter mx-3 py-3 reheart">
                  <FaRegHeart className="re1" />
                </div>
                <div className="d-flex justify-content-canter mx-3 py-3 rishop">
                  <RiShoppingBag3Line className="re2" />
                </div>
                <div className="d-flex justify-content-canter mx-3 py-3 view">
                  <GrView className="re3" />
                </div>
              </div>
            </div>
            <div className="women-1-text">
              <h5>Micro Form Bag</h5>
              <p>$98.00</p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wo-3">
            <div className="women-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="new">New</p>
                </div>
                <div className="d-flex justify-content-end mx-3 py-3">
                  <FaRegHeart />
                </div>
              </div>
              <div className="women-3-hover">
                <div className="d-flex justify-content-canter mx-3 py-3 reheart">
                  <FaRegHeart className="re1" />
                </div>
                <div className="d-flex justify-content-canter mx-3 py-3 rishop">
                  <RiShoppingBag3Line className="re2" />
                </div>
                <div className="d-flex justify-content-canter mx-3 py-3 view">
                  <GrView className="re3" />
                </div>
              </div>
            </div>
            <div className="women-1-text">
              <h5>Cashmere Tank</h5>
              <p>$39.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================ section 2 end ================================= */}

      {/* ============================ section 3 ================================= */}

      <div>
        <div className="bg_img">
          <div className="bgimg">
            <p className="p_bg">Testimonials</p>
            <div className="main-owl">
              <OwlCarousel items={1} className="owl-theme" loop nav margin={0}>
                <div>
                  <p className="p-owl">
                    Disrupt single-origin coffee hammock quinoa cronut jean
                    shorts coloring book brooklyn seitan authentic craft beer.
                  </p>
                  <div className="img-photo" xs={6} md={4}>
                    <Image
                      className="img"
                      src={require("../img/woman-abstract-b1-150x150.jpg.webp")}
                      roundedCircle
                    />
                    <div className="h4-p-text">
                      <h4>Sarah Connor</h4>
                      <p>Waitress</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="p-owl">
                    Pok pok flannel drinking vinegar, succulents lumbersexual
                    XOXO artisan. Succulents tousled drinking vinegar, cardigan.
                  </p>
                  <div className="img-photo" xs={6} md={4}>
                    <Image
                      className="img"
                      src={require("../img/men-shirt-a1-150x150.jpg.webp")}
                      roundedCircle
                    />
                    <div className="h4-p-text">
                      <h4>Calvin Reeves</h4>
                      <p>Actor</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>

      {/* ============================ section 3 end ================================= */}

      {/* ============================ section 4 ================================= */}

      <div>
        <h3 className="h3_trend">Trending Outfits</h3>
        <p className="p_trend">
          Intelligentsia migas next level 90s woke ramps. Glossier vape celiac
          tumeric keffiyeh.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
            <div className="women-out1">
              <div className="d-flex justify-content-end mx-3 py-3">
                {/* <FaRegHeart /> */}
              </div>
              <div className="women-out1-hover"></div>
            </div>
            <div className="women-out1-text">
              <h5>Cashmere Tank + Bag</h5>
              <p>$39.00 - $98.00</p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="women-out2">
              <div className="d-flex justify-content-end mx-3 py-3">
                {/* <FaRegHeart /> */}
              </div>
              <div className="women-out2-hover"></div>
            </div>
            <div className="women-out1-text">
              <h5>Micro Form Bag</h5>
              <p>$98.00</p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="women-out3">
              <div className="d-flex justify-content-end mx-3 py-3">
                {/* <FaRegHeart /> */}
              </div>
              <div className="women-out3-hover"></div>
            </div>
            <div className="women-out1-text">
              <h5>Micro Form Bag</h5>
              <p>$98.00</p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <div className="women-out4">
              <div className="d-flex justify-content-end mx-3 py-3">
                {/* <FaRegHeart /> */}
              </div>
              <div className="women-out4-hover"></div>
            </div>
            <div className="women-out1-text">
              <h5>Micro Form Bag</h5>
              <p>$98.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================ section 4 end ================================= */}

      {/* ============================ section 5 ================================= */}

      <div className="line1"></div>

      <div>
        <h3 className="h3_visit">Visit Us</h3>
        <p className="p_visit">
          Stop by our stores to learn the stories behind our products, get a
          personal styling session, or shop the latest in person. See our store
          locations.
        </p>
      </div>

      <div className="container">
        <div className="bg-img-singal"></div>
      </div>

      {/* ============================ section 5 end ================================= */}

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
  );
};
export default Home;
