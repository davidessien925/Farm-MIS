import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import React from 'react'
import './../sass/login.scss'
import PropTypes from 'prop-types';

   
async function loginUser(credentials) {
    return fetch('http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}


function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    return(
        <div className="defcon">
            <div className="overlay d-flex justify-content-center align-items-center">
                <Form className="rounded p-4 p-sm-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" onChange={e => setUserName(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me"/>
                    </Form.Group>

                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>  
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired  
}

export default Login
