import "./fournisseur.css"
import BadgeIcon from '@mui/icons-material/Badge';
import AbcIcon from '@mui/icons-material/Abc';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';
import {useLocation } from "react-router-dom";
import { FournisseurContext } from "../../context/fournisseurContext/FournisseurContext";
import { updateFournisseur } from "../../context/fournisseurContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
export default function Fournisseur() {
  const location = useLocation();
  const fournisseur = location.fournisseur;

  const four = location.fournisseur;
  
  const [fourn,setFournisseur] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(FournisseurContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setFournisseur({ ...fourn, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFournisseur(four._id, fourn, dispatch);
    history.push("/fournisseurs");
  };
  return (
    <div className="fournisseur">
    <div className="fournisseurTitleContainer">
      <h1 className="fournisseurTitle">Modifier Fournisseur</h1>
        
    </div>
    <div className="fournisseurContainer">
      <div className="fournisseurShow"> 
        <div className="fournisseurShowBottom">
          <span className="fournisseurShowTitle">Details</span>
          <div className="fournisseurShowInfo">
             <BadgeIcon className="fournisseurShowIcon"/>
             <span className="fournisseurUserInfoTitle">{fournisseur.id_fournisseur}</span>
          </div>
          <div className="fournisseurShowInfo">
             <AbcIcon className="fournisseurShowIcon"/>
             <span className="showFournisseurInfoTitle">{fournisseur.nom}</span>
          </div>
          <div className="fournisseurShowInfo">
             <AlternateEmailIcon className="fournisseurShowIcon"/>
             <span className="fournisseurUserInfoTitle">{fournisseur.email}</span>
          </div>
          <div className="articleShowInfo">
             <ContactPhoneIcon className="articleShowIcon"/>
             <span className="showFournisseurInfoTitle">{fournisseur.tel}</span>
          </div>
          <div className="fournisseurShowInfo">
             <PlaceIcon className="fournisseurShowIcon"/>
             <span className="showFournisseurInfoTitle">{fournisseur.adresse}</span>
          </div>
        </div>
      </div>
      <div className="fournisseurUpdate">
         <div className="fournisseurUpdateTitle">Modifier</div>  
         <form className="fournisseurUpdateForm">
            <div className="fournisseurUpdateLeft">
              <div className="fournisseurUpdateItem">
                <label>Id</label>
                <input type="text" placeholder={fournisseur.id_fournisseur} defaultValue={fournisseur.id_fournisseur}name="id_fournisseur" className="fournisseurUpdateInput" onChange={handleChange}/>
              </div>
              <div className="fournisseurUpdateItem">
                <label>Nom</label>
                <input type="text" placeholder={fournisseur.nom}defaultValue={fournisseur.nom}name="nom" className="fournisseurUpdateInput" onChange={handleChange}/>
              </div>
              <div className="fournisseurUpdateItem">
                <label>Email</label>
                <input type="email" placeholder={fournisseur.email}defaultValue={fournisseur.email}name="email" className="fournisseurUpdateInput" onChange={handleChange} />
              </div>        
            </div>
            <div className="fournisseurUpdateRight">
            <div className="fournisseurUpdateItem">
                <label>Tel</label>
                <input type="text" placeholder={fournisseur.tel}defaultValue={fournisseur.tel}name="tel" className="fournisseurUpdateInput" onChange={handleChange} />
              </div>
            <div className="fournisseurUpdateItem">
                <label>Adresse</label>       
                <input type="text" placeholder={fournisseur.adresse}defaultValue={fournisseur.adresse}name="adresse" className="fournisseurUpdateInput" onChange={handleChange} />
                <input type="hidden" placeholder={fournisseur._id} defaultValue={fournisseur._id} name="hid"   />
              </div>
              <button className="fournisseurUpdateButton" onClick={handleSubmit}>Enregistrer</button>
            </div>
         </form>
      </div>     
    </div>
  </div>
  )
}
