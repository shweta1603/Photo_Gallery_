import React from "react";
import {Form,Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
const SignupValidation = () => {
    const [formData,setFormData]= useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        gender:'',
        state:'',
        tnC: false
   })

   const [formDataError, setformDataError]= useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:'',
    state:'',
    tnC: ''
})

  const [formSubmitted, setFormSubmitted] = useState(false)

  const validate = (e) =>{ 
      e.preventDefault()
      setFormSubmitted(true)
      let {name, email, password, confirmPassword, gender, state, tnC} = formData
      if(name === ''){
          setformDataError((formDataError) => ({...formDataError, name:'Please enter a valid name',
          }));  //state update through callback with previous value using spread operator.
      }
      else{
        setformDataError((formDataError) => ({...formDataError, name:'',
         }));
      }
      if(email === '' || email.startsWith('@') || !email.includes('@') || !email.includes('.') || email.endsWith('.') || email.indexOf('.')>(email.length-3)){
        setformDataError((formDataError)=> ({...formDataError, email:'Please enter a valid email',
      }));
    }
    else{
        setformDataError((formDataError) => ({...formDataError, email:'',
         }));
      }

      if(password === '' || password.length<8 ){
        setformDataError((formDataError)=> ({...formDataError, password:'Please enter a valid password (Minimum character:8)',
      }));
    }
    else{
        setformDataError((formDataError) => ({...formDataError, password:'',
         }));
      }

      if(confirmPassword === '' || confirmPassword !== password){
        setformDataError((formDataError)=> ({...formDataError, confirmPassword:"Password didn't match!",
      }));
    }
    else{
        setformDataError((formDataError) => ({...formDataError, confirmPassword:'',
         }));
      }

      if(gender === '' ){
        setformDataError((formDataError)=> ({...formDataError, gender:"Please select a gender!",
      }));
    }
    else{
        setformDataError((formDataError) => ({...formDataError, gender:'',
         }));
      }
      if(state === '' ){
        setformDataError((formDataError)=> ({...formDataError, state:"Please select a State!",
      }));
    }
    else{
        setformDataError((formDataError) => ({...formDataError, state:'',
         }));
      }

      if(!tnC ){
        setformDataError((formDataError)=> ({...formDataError, tnC:"Please agree to terms and conditions!",
      }));
    }
    else{
        setformDataError((formDataError) => ({...formDataError, tnC:'',
         }));
      }

   }

    let statesOption=
    [ "Andaman & Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh",
    "Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
    "Mizoram","Nagaland","Orissa","Punjab","Pondicherry","Rajasthan","Sikkim","Tamil Nadu","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal" ]

    return (
        <Form style={{width: '500px', margin: '50px auto'}}>
            <h1 className="display-4"> Sign Up </h1>
            <br/>
               <Form.Group className="mb-3" controlId="name">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={formData.name} 
                 onChange={(e)=> setFormData({...formData, name: e.target.value})}/>  
                 {/* object will be upadated with latest value */}
                 {formSubmitted && (
                     <>
                 <Form.Control.Feedback style={formDataError.name ? {display:'none'} : {display:'block'}}>
                     Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback style={formDataError.name ? {display:'block'} : {display:'none'}}
                   type="invalid">{formDataError.name}</Form.Control.Feedback>
                   </>
                 )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})} /> 
                 {formSubmitted && (
                     <>
                 <Form.Control.Feedback style={formDataError.email ? {display:'none'} : {display:'block'}}>
                     Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback style={formDataError.email ? {display:'block'} : {display:'none'}}
                   type="invalid">{formDataError.email}</Form.Control.Feedback>
                   </>
                 )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={formData.password} 
                 onChange={(e)=> setFormData({...formData, password: e.target.value})}/>
                  {formSubmitted && (
                     <>
                 <Form.Control.Feedback style={formDataError.password ? {display:'none'} : {display:'block'}}>
                     Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback style={formDataError.password ? {display:'block'} : {display:'none'}}
                   type="invalid">{formDataError.password}</Form.Control.Feedback>
                   </>
                 )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={formData.confirmPassword} 
                 onChange={(e)=> setFormData({...formData, confirmPassword: e.target.value})}/>
                  {formSubmitted && (
                     <>
                 <Form.Control.Feedback style={formDataError.confirmPassword ? {display:'none'} : {display:'block'}}>
                     Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback style={formDataError.confirmPassword ? {display:'block'} : {display:'none'}}
                   type="invalid">{formDataError.confirmPassword}</Form.Control.Feedback>
                   </>
                 )}
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
                 {formSubmitted && (
                     <>
                 <Form.Control.Feedback style={formDataError.gender ? {display:'none'} : {display:'block'}}>
                     Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback style={formDataError.gender ? {display:'block'} : {display:'none'}}
                   type="invalid">{formDataError.gender}</Form.Control.Feedback>
                   </>
                 )}      
            </Form.Group>
            <Form.Group className="mb-3" controlId="state">
                <Form.Label> State</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e)=> setFormData({...formData, state:e.target.value})}>
                <option disabled> Select State </option>
                {statesOption.map((state, index) => (    
                    <option value={state}> {state} </option>
                ))}
            </Form.Select>
            {formSubmitted && (
                     <>
                 <Form.Control.Feedback style={formDataError.state ? {display:'none'} : {display:'block'}}>
                     Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback style={formDataError.state ? {display:'block'} : {display:'none'}}
                   type="invalid">{formDataError.state}</Form.Control.Feedback>
                   </>
                 )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="You agree to terms and conditions"
                 onClick={(e)=> setFormData({...setFormData, tnc:e.target.checked})}/>
                  {formSubmitted && (
                     <>
                 <Form.Control.Feedback style={formDataError.tnC ? {display:'none'} : {display:'block'}}>
                     Looks good!</Form.Control.Feedback>
                 <Form.Control.Feedback style={formDataError.tnC ? {display:'block'} : {display:'none'}}
                   type="invalid">{formDataError.tnC}</Form.Control.Feedback>
                   </>
                 )}
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:'100%'}} onClick={(e) => validate(e)}>
                Sign Up
            </Button>
        </Form>
    )
}

export default SignupValidation

// To make the page rounting, use reactrouter- https://reactrouter.com/docs/en/v6/getting-started/overview


