import "./nouvelUtilisateur.css";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


export default function NouvelUtilisateur() {
  const [id_utilisateur, setIDutilisateur] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre]= useState("");
  const [tel, setTel] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");
  const history = useHistory();
  
  const id_utilisateurRef = useRef();
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const genreRef = useRef();
  const telRef = useRef();
  const mot_de_passeRef = useRef();


  const handleFinish = async (e) => {
    e.preventDefault();
    setIDutilisateur(id_utilisateurRef.current.value);
    setNom(nomRef.current.value);
    setPrenom(prenomRef.current.value);
    setEmail(emailRef.current.value);
    setGenre(genreRef.current.value);
    setMot_de_passe(mot_de_passeRef.current.value);
    setTel(telRef.current.value);
    try {
      await axios.post("auth/register", {id_utilisateur,nom,prenom, email,genre,tel, mot_de_passe });
      history.push("/utilisateurs");
    } catch (err) {}
  };
 
  return (
    <div className="nouvelUtilisateur">
        <h1 className="nouveauUtilisateurTile">Nouvel Utilisateur</h1>
        
          <div className="nouvelUtilistauerItem">
           <label>Email</label>  
           <input type="email"   ref={emailRef} />
          </div> 
        <form className="nouvelUtilisateurForm">
          <div className="nouvelUtilistauerItem">
           <label>Id</label>  
           <input type="text"  ref={id_utilisateurRef}/>
          </div> 
          <div className="nouvelUtilistauerItem">
           <label>Nom</label>  
           <input type="text"  ref={nomRef} />
          </div> 
          <div className="nouvelUtilistauerItem">
           <label>Prenom</label>  
           <input type="text"   ref={prenomRef} />
          </div>  
        
          <div className="addProductItem">
          <select name="genre" id="genre" ref={genreRef}>
            <option  >Genre</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
        </div> 
          <div className="nouvelUtilistauerItem">
           <label>Tel</label>  
           <input type="text"   ref={telRef} />
          </div>  
          <div className="nouvelUtilistauerItem">
           <label>Mot De Passe</label>  
           <input type="password"   ref={mot_de_passeRef}/>
          </div>
          
           <button className="NouvelUtilisateurButton" onClick={handleFinish}>Creer</button>
        </form>    
    </div>
  )
}
