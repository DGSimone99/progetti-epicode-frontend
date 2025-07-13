import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import User from "./components/User";
import Settings from "./components/settings";
/* import SelectPage from "./components/SelectPage"; */

function App() {
  const userImg = "../assets/User.jpg";
  const userName = "Simone";
  return (
    <div>
      <TopBar />
      {/* <SelectPage home="#home" user="#user" settings="#settings" /> */}
      {/* Tentativo andato male di provare a selezionare le pagine */}
      <div id="home">
        <Gallery movies="Alien" saga="Alien" />
        <Gallery movies="Pirates" saga="Pirates of the Caribbean + Extra" />
        <Gallery movies="Spider-Man" saga="Spider-Man" />
      </div>
      {/* <div id="user">
        <User img={userImg} name={userName} />
      </div> */}
      {/* <div id="settings">
        <Settings img={userImg} name={userName} />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;

/* Ho tolto il className="d-none" a user e settings visto che il sistema di pagine che ho fatto era sbagliato */
