import "./utilisateur.css"
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { UtilisateurContext } from "../../context/utilisateurContext/UtilisateurContext";
import { updateUtilisateur } from "../../context/utilisateurContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {useLocation } from "react-router-dom";
export default function Utilisateur() {
  const location = useLocation();
  const utilisateur = location.utilisateur;

  const uti = location.utilisateur;
  
  const [utili,setUtilisateur] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(UtilisateurContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUtilisateur({ ...utili, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUtilisateur(uti._id, utili, dispatch);
    history.push("/utilisateurs");
  };
  return (
    <div className="utilisateur">
      <div className="userTitleContainer">
        <h1 className="userTitle">Modifier Utilisteur</h1>
          
      </div>
      <div className="userContainer">
        <div className="userShow"> 
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowNom">{utilisateur.nom}</span>
              <span className="userShowPrenom">{utilisateur.prenom}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Details</span>
            <div className="userShowInfo">
               <BadgeIcon className="userShowIcon"/>
               <span className="showUserInfoTitle">{utilisateur.id_utilisateur}</span>
            </div>
            <div className="userShowInfo">
               <PersonIcon className="userShowIcon"/>
               <span className="showUserInfoTitle">{utilisateur.nom}</span>
            </div>
            <div className="userShowInfo">
               <PersonIcon className="userShowIcon"/>
               <span className="showUserInfoTitle">{utilisateur.prenom}</span>
            </div>
            <div className="userShowInfo">
               <AlternateEmailIcon className="userShowIcon"/>
               <span className="showUserInfoTitle">{utilisateur.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
           <div className="userUpdateTitle">Modifier</div>  
           <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Id</label>
                  <input type="text" placeholder={utilisateur.id_utilisateur} name="id_utilisateur"defaultValue={utilisateur.id_utilisateur} className="userUpdateInput"onChange={handleChange} />
                </div>
                <div className="userUpdateItem">
                  <label>Nom</label>
                  <input type="text" placeholder={utilisateur.nom} name="nom" defaultValue={utilisateur.nom} className="userUpdateInput" onChange={handleChange} />
                </div>
                <div className="userUpdateItem">
                  <label>Prenom</label>
                  <input type="text" placeholder={utilisateur.prenom} name="prenom" defaultValue={utilisateur.prenom} className="userUpdateInput" onChange={handleChange}/>
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="email" placeholder={utilisateur.email} name="email" defaultValue={utilisateur.email}className="userUpdateInput" onChange={handleChange}/>
                </div>
                <div className="userUpdateItem">
                  <input type="hidden" placeholder={utilisateur._id} defaultValue={utilisateur._id} name="hid"   />
                </div>
                <button className="userUpdateButton"onClick={handleSubmit}>Enregistrer</button>
              </div>
              
              <div className="userUpdateRight">
                
                
              </div>
           </form>
        </div>     
      </div>
    </div>
  )
}
