import React, { Component, Fragment } from 'react';
import "../AllComunicatoStampaModalsContainer/ComunicatoStampaModal.css";
import { Link } from "react-router-dom";

class ComunicatoStampaModal extends Component {
    render() {
        return (
            <Fragment>
            <div id="main-questionaries">
                <Link to="/#####">
                    <button className="block" type="button">
                       Comunicato Stampa
                    </button>
                </Link>
            </div>
            <div className="go-back-route">
                <Link to="/###" class="next">Next &raquo;</Link>
                <Link to="/###" class="previous">&laquo; Previous</Link>  
            </div>
           
        </Fragment>
        )
    }
}


export default  ComunicatoStampaModal;