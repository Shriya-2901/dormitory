import React from 'react';
import './hof.css';
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
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
const Hof = () => {
    return (
<Container>
{/* make 2 responsive rows with 4 cards in each row */}
<div id="heading"><h1><b>Hall of Fame</b></h1></div>
<Row>
  <Col>
    <Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiXJ1gpH6JRcJDjBV7wxTPt4ia2wmv8Yvaw&usqp=CAU" style={{onMouseOver:"this.border.radius='0'",borderRadius:"50%"}} />  
      <Card.Body>
        <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon
         

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Fz3ApQrIuYTIAD5k2619KFC90IDPsWe4Vw&usqp=CAU" style={{borderRadius:'50%'}} />  
      <Card.Body>
      <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Fz3ApQrIuYTIAD5k2619KFC90IDPsWe4Vw&usqp=CAU"style={{borderRadius:'50%'}} />  
      <Card.Body>
      <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiXJ1gpH6JRcJDjBV7wxTPt4ia2wmv8Yvaw&usqp=CAU" style={{borderRadius:'50%'}}/>  
      <Card.Body>
      <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col>
  <Card style={{ width: '15rem', margin:'5px'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiXJ1gpH6JRcJDjBV7wxTPt4ia2wmv8Yvaw&usqp=CAU"style={{borderRadius:'50%'}} />  
      <Card.Body>
      <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiXJ1gpH6JRcJDjBV7wxTPt4ia2wmv8Yvaw&usqp=CAU"style={{borderRadius:'50%'}} />  
      <Card.Body>
      <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Fz3ApQrIuYTIAD5k2619KFC90IDPsWe4Vw&usqp=CAU" style={{borderRadius:'50%'}}/>  
      <Card.Body>
      <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
  <Col>
<Card style={{ width: '15rem',margin:'5px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiXJ1gpH6JRcJDjBV7wxTPt4ia2wmv8Yvaw&usqp=CAU" style={{borderRadius:'50%'}}/>  
      <Card.Body>
      <Card.Title>Name</Card.Title><hr color="00B4D8" size="5"></hr>
        <Card.Text style={{fontSize:'12px'}}>
         <b>Web Development</b><br></br>
         <LocalPhoneIcon fontSize='12px'></LocalPhoneIcon>&nbsp; +91 9999999999
         <br></br>
          Gained 200 points in webops hackathon

         {/* Insert material ui email address */}

        </Card.Text>
        
      </Card.Body>
    </Card>
  </Col>
</Row>
</Container>
    )
}
export default Hof;