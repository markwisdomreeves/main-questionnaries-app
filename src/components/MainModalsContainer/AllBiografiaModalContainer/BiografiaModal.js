import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "../AllBiografiaModalContainer/BiografiaModal.css";

class BiografiaModal extends Component {
    render() {
        return (
            <Fragment>
                <div id="main-questionaries">
                    <Link to="/#####">
                        <button className="block" type="button">
                           Biografia
                        </button>
                    </Link>
                </div>
                <div className="go-back-route">
                    <Link to="/###" class="next link-style">Next &raquo;</Link>
                    <Link to="/###" class="previous link-style">&laquo; Previous</Link>  
                </div>
            </Fragment>
        );
    };
};


export default  BiografiaModal;