import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Sidebar from "./component/SideBar";
import Login from "./component/Login";
import Accueil from "./component/Accueil";
import Offer from "./component/Offer";
import Profil from "./component/Profil";
import Livre from "./component/Livre";
import Tarif from "./component/Tarif";
import NouveauOffre from "./component/NouveauOffre";
import { Modal } from "react-bootstrap";
import Dashboard from "./component/Dashboard";
import FilAcceuil from "./component/FilAcceil";
import Chat from "./component/Chat";
import Communité from "./component/Communité";
import Contact from "./component/Contact";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Login/> */}
        <Sidebar />
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
        </div>
      </div>
    </Router>
  );
};

export default App;
