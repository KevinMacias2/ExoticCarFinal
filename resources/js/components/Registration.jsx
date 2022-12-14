import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();
  
    const registerUser = async (e) => {
      e.preventDefault();
  
      const format = new FormData();
      format.append('name', name);
      format.append('email', email);
      format.append('password', password);
  
      axios.post("http://localhost/proyectCar/public/api/register", format,
        { headers: { 'Content-Type': 'application/json' }, }
      ).then((response) => {
        console.log("response: ");
        console.log(response);
        navigate('/proyectCar/public/');
      }).catch((error) => {
        console.log(error.response.data);
      });
    }
  
    return (
      <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#34495E', color: 'white', width: '40%' }}>
        <h1>User Register</h1>
        <Form onSubmit={registerUser} >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label> Full Name </Form.Label>
            <Form.Control placeholder="Type your full name" onChange={(e) => setName(e.target.value)} value={name} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="useremail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                  </Form.Group>
  
          <Button variant="secondary" style={{ backgroundColor: "#072f4e" }} type="submit" >
            Save
          </Button>
          <Link to={"/proyectCar/public/"}>
              <Button variant="secondary" style={{ backgroundColor: "#072f4e" }}>Cancel</Button>
          </Link>
        </Form>
      </Container>
    );

}
export default Registration;