import "./nouveauFournisseur.css";
import { FournisseurContext } from "../../context/fournisseurContext/FournisseurContext";
import { createFournisseur } from "../../context/fournisseurContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

export default function NouveauFournisseur() {
  const [fournisseur,setFournisseur] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(FournisseurContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setFournisseur({ ...fournisseur, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createFournisseur(fournisseur, dispatch);
    history.push("/fournisseurs")
  };
  return (
    <div className="nouvelFournisseur">
        <h1 className="nouveauFournisseurTile">Nouveau Fournisseur</h1>
        <form className="nouvelFournisseurForm">
          <div className="nouvelFournisseurItem">
           <label>Id</label>  
           <input type="text"  name="id_fournisseur"  onChange={handleChange}/>
          </div> 
          <div className="nouvelFournisseurItem">
           <label>Nom</label>  
           <input type="text"  name="nom"  onChange={handleChange}/>
          </div>  
          <div className="nouvelFournisseurItem">
           <label>Email</label>  
           <input type="email"   name="email"  onChange={handleChange}/>
          </div> 
          <div className="nouvelFournisseurItem">
           <label>Tel</label>  
           <input type="text"   name="tel"  onChange={handleChange} />
          </div>
          <div className="nouvelFournisseurItem">
           <label>Adresse</label>  
           <input type="text"   name="adresse"  onChange={handleChange} />
          </div>
          
          <button className="NouvelFournisseurButton" onClick={handleSubmit}>Creer</button>
        </form>    
    </div>
  )
}
