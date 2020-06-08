import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../AllFotomodellaClassicaModalsContainer/FotomodellaClassica.css";

class FotomodellaClassica extends Component {
    render() {
        return(
            <Fragment>
                <div id="main-questionaries">
                    <Link to="/fotomodella-classica-modal-list">
                        <button className="block" type="button">
                           Fotomodella Classica
                        </button>
                    </Link>
                </div>
                <div className="go-back-route">
                    <Link to="/fotomodella-classica-modal-list" class="next">Next &raquo;</Link>
                    <Link to="/foto-della-modal" class="previous">&laquo; Previous</Link>  
                </div>
            </Fragment>
        );
    }
}

export default FotomodellaClassica;
