import "./nouvelCategorie.css";
import { CategorieContext } from "../../context/categorieContext/CategorieContext";
import { createCategorie } from "../../context/categorieContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";



export default function NouvealCategorie() {
  const [categorie,setCategorie] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(CategorieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setCategorie({ ...categorie, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createCategorie(categorie, dispatch);
    history.push("/categories");
  };
  return (
    <div className="nouvelCategorie">
        <h1 className="nouveauCategorieTile">Nouvel Categorie</h1>
        <form className="nouvelCategorieForm">
          <div className="nouvelCategorieItem">
           <label>Id</label>  
           <input type="text"   name="id_categorie"  onChange={handleChange} />
          </div> 
          <div className="nouvelCategorieItem">
           <label>Libelé</label>  
           <input type="text"  name="nom"  onChange={handleChange}  />
          </div>  
          <div className="nouvelCategorieItem">
           <label>Description</label>  
           <input type="text"  name="description"  onChange={handleChange} />
          </div> 
          
          <button className="NouvelCategorieButton" onClick={handleSubmit}>Creer</button>
        </form>    
    </div>
  )
}
