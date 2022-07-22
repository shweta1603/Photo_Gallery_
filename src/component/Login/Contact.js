import {Link} from "react-bootstrap"
const Contact= () => {
    return(
        <div style={{marginTop:'50px',paddingLeft: '35%'}}>
        <h1 className="display-1">Hello!</h1>
        <div>
               What can we help you with?
        </div>

        {/* <Link to='/about'>About Us</Link> */}
        <h3>FAQ</h3>
        <h3 className="display-4">Contact information</h3>
        <div>
            <h3>Phone</h3>
            <p className="lead">+44 20 3862 5900
            Monday to Friday (10.00 to 17.00).
            </p>
            <p>For enquiries outside of these hours, please submit an online enquiry.</p>
            <h3>Email</h3>
            <p className="lead"> pictures.galley.8@gmail.com</p>
        
           
        </div>

        </div>
    )
}
export default Contact