import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./HomeModal.css";

class HomeModal extends Component {
    render() {
        return(
            <Fragment>
                <div id="main-questionaries">
                    <Link to="/opzione-categoria-modal">
                        <button className="block" type="button">
                             Questionnario
                        </button>
                    </Link>
                    <Link to="/biografia-modal" className="isDisabled">
                        <button className="block" type="button">
                             Biografia
                        </button>
                    </Link>
                    <Link to="/comunicato-stampamodal" className="isDisabled">
                        <button className="block" type="button">
                             Comunicato Stampa
                        </button>
                    </Link>
                    <Link to="/interviste-modal" className="isDisabled">
                        <button className="block" type="button">
                             Interviste
                        </button>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default HomeModal;
