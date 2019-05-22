import React from 'react';
import {Navbar,Button,Form,FormControl,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class MyBar extends React.Component {
    render() {
        return (
            <Navbar id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                <li>
                    <Link  to='/home'>
                            Home
                    </Link>
                </li>
                <li>
                    <Link  to='/contact'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link  to='/Profile'>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link  to='/Portofolio'>
                        Portofolio
                    </Link>
                </li>
                </ul> {/* end #nav */}
            </Navbar>
        );
    }
}

export default MyBar;






