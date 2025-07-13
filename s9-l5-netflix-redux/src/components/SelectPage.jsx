import { Button } from "react-bootstrap";

const SelectPage = (props) => {
  const home = document.querySelector(props.home);
  const user = document.querySelector(props.user);
  const settings = document.querySelector(props.settings);

  function homePage() {
    home.classList.remove("d-none");
    user.classList.add("d-none");
    user.classList.remove("d-block");
    settings.classList.add("d-none");
    settings.classList.remove("d-block");
  }

  function userPage() {
    user.classList.remove("d-none");
    home.classList.add("d-none");
    home.classList.remove("d-block");
    settings.classList.add("d-none");
    settings.classList.remove("d-block");
  }

  function settingsPage() {
    settings.classList.remove("d-none");
    home.classList.add("d-none");
    home.classList.remove("d-block");
    user.classList.add("d-none");
    user.classList.remove("d-block");
  }
  return (
    <div className="text-center">
      <Button onClick={homePage} className="bg-black text-white border-0">
        Home
      </Button>
      <Button onClick={userPage} className="bg-black text-white border-0 mx-4">
        User
      </Button>
      <Button onClick={settingsPage} className="bg-black text-white border-0">
        Settings
      </Button>
    </div>
  );
};

export default SelectPage;

//Sono più che sicuro che avrei potuto farlo con lo state, ma non avevo idea di come riferirmi alla pagina da nascondere.
//In questo modo funziona ma SOLO se salvo la pagina, altrimenti non rileva il querySelector. Se la ricarico non funziona più
//Immagino non funzioni perché carica la pagina dopo il tentativo di querySelector?
