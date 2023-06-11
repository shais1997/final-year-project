import React from 'react';
import HomeCss from './home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';


class Home extends React.Component{
    render(){
       return(
        <>
        <div className={HomeCss.footer}></div>
        <div className={HomeCss.container}>
        <div className={HomeCss.welcom}>
            <h2>Welcome To</h2>
          </div>
        <div className={HomeCss.company}><img src='./images/Capture.jpg' alt=''/></div>
        <div className={HomeCss.btn}>
        <Button className={HomeCss.btnhomepri} variant="primary" >
        Create an Account
        </Button>{' '}
        <Button variant="primary" className={HomeCss.btnhomepri} >
          Log-In
        </Button>
      </div>
      </div>
        </>
       
        
       )
    
    }
}
export default Home


