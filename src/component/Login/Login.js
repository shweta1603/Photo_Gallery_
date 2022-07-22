import React from "react";
import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Form style={{width: '500px', margin: '50px auto'}}>
        <h1 className="display-4"> Login </h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}
                onChange={(e) => setEmail(e.target.value)} /> 
                {/* any change in input will be detected by onChange event and then it will fire a callback.
                Inside callback it'll call set email which will set the email. */}
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} 
                 onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="You agree to terms and conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log in
            </Button>
        </Form>
    )
}

export default Login

//  controlled compounts-
//  Bind Form input value to React this.state. 
//  Bind event handlers to React state handlers.