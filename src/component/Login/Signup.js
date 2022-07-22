import React from "react";
import {Form,Button, type} from 'react-bootstrap'
import {useState, useEffect} from 'react'
const Signup = () => {
    // const [name, setName]= useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    // const [gender, setGender] = useState('')
    // const [state, setStates] = useState('')

    //As shown above, each attribute has same intital state and there are many attributes so we can make a 
    // common object formData.
    const [formData,setFormData]= useState({
         name:'',
         email:'',
         password:'',
         confirmPassword:'',
         gender:'',
         state:'',
         tnC: false
    })
    
    useEffect(() => {
            console.log('FormData updated')
    }, [formData]);

    let citiesOption=
    [ "Andaman & Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh",
    "Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
    "Mizoram","Nagaland","Orissa","Punjab","Pondicherry","Rajasthan","Sikkim","Tamil Nadu","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal" ]

    return (
        <Form style={{width: '500px', margin: '50px auto'}}>
            {/* <Form.Group className="mb-3" controlId="name">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={name} 
                 onChange={(e)=> setName(e.target.value)}/>
            </Form.Group> */}
               <Form.Group className="mb-3" controlId="name">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={formData.name} 
                 onChange={(e)=> setFormData({...formData, name: e.target.value})}/>  
                 {/* object will be upadated with latest value */}
                 <Form.Control.Feedback style={{display:'block'}}>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})} /> 
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={formData.password} 
                 onChange={(e)=> setFormData({...formData, password: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={formData.confirmPassword} 
                 onChange={(e)=> setFormData({...formData, confirmPassword: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Gender">
                <Form.Label>Gender</Form.Label>
                <br/>
                {['Male', 'Female', 'Others'].map((gender,index) => (
                <Form.Check
                    inline
                    label={gender}
                    name="gender"
                    type='radio'
                    id={`inline-${index}`}
                    onClick={() => setFormData({...formData, gender: gender})}
                />
                ))}       
            </Form.Group>
            <Form.Group className="mb-3" controlId="state">
                <Form.Label> Select State</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e)=> setFormData({...formData, state:e.target.value})}>
                {citiesOption.map((city, index) => (
                    <option value={city}> {city} </option>
                ))}
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="You agree to terms and conditions"
                 onClick={(e)=> setFormData({...setFormData,tnc:e.target.checked})}/>
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:'100%'}}>
                Sign Up
            </Button>
        </Form>
    )
}

export default Signup




let x={
    a:5,
    b:10
}
console.log(x)     // {a: 5, b: 10}

let y={...x, a:15}
console.log(y)    //{a: 15, b: 10}  updated with latest value