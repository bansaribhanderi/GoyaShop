import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function Login(props) {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('');

  const navigate = useNavigate();


  const authenticate = (e) => {
    e.preventDefault();
      axios.post('http://localhost:5000/users/login', {
        email : email,
        password : pass
      })
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.status === 200) {
            console.log(response.data.status);
            sessionStorage.setItem("isLogged", true);
            sessionStorage.setItem('userId', response.data.data.userId);
            navigate('/')
        } else {
            sessionStorage.setItem("isLogged", false)
        }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
      {/* Horizontal Form */}
      <div className="card card-info mycontainer">
      <form className="form-horizontal">
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  
                  onChange={(e)=>{setPass(e.target.value)}}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">
                    Remember me
                  </label>
                </div>
              </div>
            </div>  
          </div>
          {/* /.card-body */}
          <div className="card-footer">
              <button type="submit" className="btn btn-info"  onClick={authenticate}>
                Sign in
              </button>
          </div>
          {/* /.card-footer */}
        </form>
      </div>
</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='close'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Login
