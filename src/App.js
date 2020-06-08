import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomeModal from "./components/MainModalsContainer/ParentHomeModalsContainer/HomeModal";
import OpzioneCategoriaModal from "./components/MainModalsContainer/AllOpzioneCategoriaModalsContainer/OpzioneCategoriaModal";
import BiografiaModal from "./components/MainModalsContainer/AllBiografiaModalContainer/BiografiaModal";
import ComunicatoStampaModal from "./components/MainModalsContainer/AllComunicatoStampaModalsContainer/ComunicatoStampaModal"; 
import IntervisteModal from "./components/MainModalsContainer/AllIntervisteModalsContainer/IntervisteModal";
import ModaModal from "./components/MainModalsContainer/AllModaModalsContainer/ModaModal";
import FotoDellaModal from "./components/MainModalsContainer/AllFotoDellaModalsContainer/FotoDellaModal";
import FotomodellaClassicaModal from "./components/MainModalsContainer/AllFotomodellaClassicaModalsContainer/FotomodellaClassicaModal";
import FotomodellaClassicaModalList from "./components/MainModalsContainer/AllFotomodellaClassicaModalsContainer/FotomodellaClassicaModalsLists";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeModal} />
        <Route path="/opzione-categoria-modal" component={OpzioneCategoriaModal} />
        <Route path="/biografia-modal" component={BiografiaModal} />
        <Route path="/comunicato-stampamodal" component={ComunicatoStampaModal} />
        <Route path="/interviste-modal" component={IntervisteModal} />
        <Route path="/moda-modal" component={ModaModal} />
        <Route path="/foto-della-modal" component={FotoDellaModal} />
        <Route path="/fotomodella-classica-modal" component={FotomodellaClassicaModal} />
        <Route path="/fotomodella-classica-modal-list" component={FotomodellaClassicaModalList} />
      </Switch>
    </div>
  );
}

export default App;
