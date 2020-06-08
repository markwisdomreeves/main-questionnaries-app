import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../AllOpzioneCategoriaModalsContainer/OpzioneCategoria.css";

class HomeModal extends Component {
    render() {
        return(
            <Fragment>
                <div id="main-questionaries">
                    <Link to="/moda-modal">
                        <button className="block" type="button">
                           Opzione Categoria
                        </button>
                    </Link>
                </div>
                
                <div className="go-back-route">
                    <Link to="/moda-modal" class="next">Next &raquo;</Link>
                    <Link to="/" class="previous">&laquo; Previous</Link>  
                </div>
            </Fragment>
        );
    }
}

export default HomeModal;
