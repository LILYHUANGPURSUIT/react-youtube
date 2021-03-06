import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {


    render(){
        return (
            <div>
                <nav>
                    <Link to = "/" onClick = {this.props.handleClear}>YouTube</Link>
                    <Link to ="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;