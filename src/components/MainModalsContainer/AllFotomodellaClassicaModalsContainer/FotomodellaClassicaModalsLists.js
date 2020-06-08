import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../AllFotomodellaClassicaModalsContainer/FotomodellaClassicaModalsLists.css";

class FotomodellaClassicaModalsLists extends Component {
    render() {
        return(
            <Fragment>
                <div id="main-questionaries">
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Abito Cerimonia
                        </button>
                    </Link>
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Look Book
                        </button>
                    </Link>
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Ritratto
                        </button>
                    </Link>
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Immagine
                        </button>
                    </Link>
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Fashion
                        </button>
                    </Link>
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Met Art
                        </button>
                    </Link>
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Beauty
                        </button>
                    </Link>
                    <Link to="#####">
                        <button className="block" type="button">
                           Fotomodella Hotess
                        </button>
                    </Link>
                </div>
                
                <div className="go-back-route">
                    <Link to="###" class="next">Next &raquo;</Link>
                    <Link to="/fotomodella-classica-modal" class="previous">&laquo; Previous</Link>  
                </div>
            </Fragment>
        );
    }
}

export default FotomodellaClassicaModalsLists;
