import React from "react";
import "../App.css";
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";
import github from '../icons/github.png';
import linkedIn from '../icons/linkedIn.png';

const ContactInfo = () => {
    return(
        <Card className="card mx-auto"
        color="primary"
        inverse
        style={{
            width: '18rem'
          }}>
            <CardBody>
            <CardTitle>Contact Info</CardTitle>
                <a href="https://github.com/Rjkingg"><img src={github} alt="GitHub" className="icon-logo" />
                </a>
                <a href="https://www.linkedin.com/in/raquel-king/"><img src={linkedIn} alt="LinkedIn" className="icon-logo" /></a>
             </CardBody>
         </Card>
    )
}

export default ContactInfo