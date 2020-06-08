import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "../AllIntervisteModalsContainer/IntervisteModal.css";

class IntervisteModal extends Component {
    render() {
        return (
            <Fragment>
            <div id="main-questionaries">
                <Link to="/#####">
                    <button className="block" type="button">
                        Interviste
                    </button>
                </Link>
            </div>
        
            <div className="go-back-route">
                <Link to="/###" class="next">Next &raquo;</Link>
                <Link to="/###" class="previous">&laquo; Previous</Link>  
            </div>
        </Fragment>
        );
    };
};


export default IntervisteModal;