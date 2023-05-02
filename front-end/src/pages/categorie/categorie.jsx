import "./categorie.css"
import BadgeIcon from '@mui/icons-material/Badge';
import AbcIcon from '@mui/icons-material/Abc';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { CategorieContext } from "../../context/categorieContext/CategorieContext";
import { updateCategorie } from "../../context/categorieContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {useLocation } from "react-router-dom";

export default function Categorie() {
  const location = useLocation();
  const categorie = location.categorie;

  const cat = location.categorie;
  
  const [categ,setCategorie] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(CategorieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setCategorie({ ...categ, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategorie(cat._id, categ, dispatch);
    history.push("/categories");
  };
  

  return (
    <div className="categorie">
    <div className="categorieTitleContainer">
      <h1 className="categorieTitle">Modifier Categorie</h1>
       
    </div>
    <div className="categorieContainer">
      <div className="categorieShow"> 
        <div className="categorieShowBottom">
          <span className="categorieShowTitle">Details</span>
          <div className="categorieShowInfo">
             <BadgeIcon className="categorieShowIcon"/>
             <span className="categorieUserInfoTitle">{categorie.id_categorie}</span>
          </div>
          <div className="categorieShowInfo">
             <AbcIcon className="categorieShowIcon"/>
             <span className="showCategorieInfoTitle">{categorie.nom}</span>
          </div>
          <div className="categorieShowInfo">
             <AlternateEmailIcon className="categorieShowIcon"/>
             <span className="categorieUserInfoTitle">{categorie.description}</span>
          </div>
        </div>
      </div>
      <div className="categorieUpdate">
         <div className="categorieUpdateTitle">Modifier</div>  
         <form className="categorieUpdateForm">
            <div className="categorieUpdateLeft">
              <div className="categorieUpdateItem">
                <label>Id</label>
                <input type="text" placeholder={categorie.id_categorie} className="categorieUpdateInput" name="id_categorie"defaultValue={categorie.id_categorie} onChange={handleChange} />
              </div>
              <div className="categorieUpdateItem">
                <label>Nom</label>
                <input type="text" placeholder={categorie.nom} className="categorieUpdateInput" name="nom" defaultValue={categorie.nom}onChange={handleChange}  />
              </div>    
            </div>
            <div className="categorieUpdateRight">
            <div className="categorieUpdateItem">
                <label>description</label>
                <input type="text" placeholder={categorie.description} defaultValue={categorie.description} className="categorieUpdateInput" name="description" onChange={handleChange}  />
                
                <input type="hidden" placeholder={categorie._id} defaultValue={categorie._id} name="hid"   />
       
              </div>
              <button className="categorieUpdateButton" onClick={handleSubmit}>Enregistrer</button>
            </div>
         </form>
      </div>     
    </div>
  </div>
  )
}
