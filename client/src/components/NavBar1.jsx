import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


function NavBar1() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#0096C7", maxHeight: "1.2rem" }} variant="dark"
                sticky="top" expand="sm" collapseOnSelect className=" justify-content-end">


                <Navbar.Toggle className="coloring" />
                <Nav >
                    <Nav.Link href="#more">More</Nav.Link>
                </Nav>

            </Navbar>
        </div >
    );
}

export default NavBar1;