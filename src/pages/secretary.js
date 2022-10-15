
import './secretary.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { margin } from '@mui/system';
const Secretary = () => {
    return (
<Container>
<div id="heading"><h1><b>Hostel Secretaries</b></h1></div>
{/* make 2 responsive rows with 4 cards in each row */}
<Row>
  <Col>
    <Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s"  />  
      <Card.Body>
        <Card.Title>General Secretary</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Anshid K</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" />  
      <Card.Body>
        <Card.Title>Social Secretary</Card.Title><hr  color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Gokul</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" />  
      <Card.Body>
        <Card.Title>Hostel Legislator</Card.Title><hr  color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Arpit Garg</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" />  
      <Card.Body>
        <Card.Title>Health Secretary</Card.Title><hr  color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Laveen</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col>
  <Card style={{ width: '15rem', margin:'5px'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" />  
      <Card.Body>
        <Card.Title>Sports Secretary</Card.Title><hr  color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Aahan</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" />  
      <Card.Body>
        <Card.Title>Technical Secretary</Card.Title><hr  color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Gopal</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" />  
      <Card.Body>
        <Card.Title>Warden</Card.Title><hr  color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Janmenjaya Panda</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeu1JU1avFzQtN-az4HZqEpR1VvEBN-SEXfEuOtt8Xg&s" />  
      <Card.Body>
        <Card.Title>Manager</Card.Title><hr  color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Janmenjaya Panda</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          <EmailIcon fontSize='12px'></EmailIcon>&nbsp;
          xyz@smail.iitm.ac.in
          <br></br>
          <LocationOnIcon fontSize='12px'></LocationOnIcon>&nbsp;
          Room 205, Hostel 1

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>

    );
    }
    
export default Secretary;