import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../AllFotoDellaModalsContainer/FotoDellaModal.css";

class FotoDella extends Component {
    render() {
        return(
            <Fragment>
                <div id="main-questionaries">
                    <Link to="fotomodella-classica-modal">
                        <button className="block" type="button">
                           FotoMoDella
                        </button>
                    </Link>
                </div>
                <div className="go-back-route">
                    <Link to="/fotomodella-classica-modal" class="next">Next &raquo;</Link>
                    <Link to="/moda-modal" class="previous">&laquo; Previous</Link>  
                </div>
            </Fragment>
        );
    }
}

export default FotoDella;
