import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../AllModaModalsContainer/ModaModal.css";

class Moda extends Component {
    render() {
        return(
            <Fragment>
                <div id="main-questionaries">
                    <Link to="/foto-della-modal">
                        <button className="block" type="button">
                           Moda
                        </button>
                    </Link>
                </div>
                
                <div className="go-back-route">
                    <Link to="/foto-della-modal" class="next">Next &raquo;</Link>
                    <Link to="/opzione-categoria-modal" class="previous">&laquo; Previous</Link>  
                </div>
            </Fragment>
        );
    }
}

export default Moda;
