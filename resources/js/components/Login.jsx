import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login(){

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost/proyectCar/public/api/login', {
            email: email, password: password
        });
        if (res.data.status === 200){
            Swal.fire({
                title: "Success!",
                text: "Welcome to Exotic Cars",
                icon: "success",
            })
            navigate('/proyectCar/public/home', {
                state:{
                    u_token: res.data.token
                }
            });
            
        }
    }

    return(
        <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#34495E', color: 'white', width: '40%' }}>
            <form onSubmit={loginUser}>
            <h1>LOGIN</h1>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label style={{color: "#fff", size: "20px"}}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)}required/>
                    <Form.Text style={{color: "#fff"}}>
                        We'll never share your email anyone else
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                </Form.Group>

                <Button variante="secondary" style={{ backgroundColor: "#072f4e" }} type="submit">
                    LOGIN
                </Button><br></br>
                <Form.Text style={{color: "#fff"}} as={Link} to="/proyectCar/public/register">Don't have an account? Register</Form.Text>
            </form>
        </Container>
    );
        

}
export default Login;