import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function Addcard() {
const { id } = useParams();
  const [data, setData] = useState([]);
  const [cartId, setCartId] = useState([])
  const isLogged = sessionStorage.getItem('isLogged');
  const [modalShow, setModalShow] = React.useState(false);



  var total = 0;
  let userid = sessionStorage.getItem('userId');
  useEffect(() => {
    if(!userid){
      setModalShow(true);
    }
    axios
      .get(`http://localhost:5000/admin/getalldataofcart/${userid}`)
      .then(async (res) => {
        // handle success
        console.log(res);
          await setData(res.data.addtocartdata.user.product)
          setCartId(res.data.addtocartdata.cartId)
      })
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

{/* <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className="container">
            <div className="singal-pro1">
              <div class="outer1-image1 d-flex">
                <img src={data.image ? data.image[0] : ""} alt="" />
                <div class="inner11-image">
                  <img src={data.image ? data.image[1] : ""} alt="" />
                </div>
                <div class="products11-fonts">
                  <h5 className="title-text">{data.title}</h5>
                  <div className="product1-price">
                    <span className="first1-span1">${data.price}</span>
                    <span className="second1-span1">({data.discount}% OFF)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Modal.Body>
      <Modal.Footer>
      <div className='d-flex'>
                        <div className='sub_total'>
                            <b>Sub Total</b>
                        </div>
                        <div>
                            <p>{total}</p>
                        </div>
                    </div>
      </Modal.Footer>
    </Modal> */}

    



    </>
  );
}
export default Addcard
