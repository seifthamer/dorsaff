import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/dash-client/NavBar";
import Sidebar from "./component/dash-client/SideBar";
import Login from "./component/dash-client/Login";
import Accueil from "./component/dash-client/Accueil";
import Offer from "./component/dash-client/Offer";
import Profil from "./component/dash-client/Profil";
import Livre from "./component/dash-client/Livre";
import Tarif from "./component/dash-client/Tarif";
import NouveauOffre from "./component/dash-client/NouveauOffre";
import { Modal } from "react-bootstrap";
import Dashboard from "./component/dash-client/Dashboard";
import FilAcceuil from "./component/dash-client/FilAcceil";
import Chat from "./component/dash-client/Chat";
import Communité from "./component/dash-client/Communité";
import Contact from "./component/dash-client/Contact";
import Homee from "./component/front-site/Homee";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* <Login/> */}
      <Homee/>
        {/* <Sidebar />
        <NavBar />
        <div id="content" style={{ marginLeft: "250px", padding: "20px" }}>
          <Routes>
            <Route path="/Livre" element={<Livre />} />
            <Route path="/Offer" element={<Offer />} />
            <Route path="/Profil" element={<Profil/>}/>
            <Route path="/Tarif" element={<Tarif/>}/>
            <Route path="/NouveauOffre" element={<NouveauOffre/>}/>
            <Route path="/Modal" element={<Modal/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/FilAcceuil" element={<FilAcceuil/>}/>
            <Route path="/Accueil" element={<Accueil/>}/>
            <Route path="/Chat" element={<Chat/>}/>
            <Route path="/Communité" element={<Communité/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </div> */}
      </div>
    </Router>
  );
};

export default App;
