import"./nouvelArticle.css";
import { ArticleContext } from "../../context/articleContext/ArticleContext";
import { FournisseurContext } from "../../context/fournisseurContext/FournisseurContext";
import { getFournisseurs } from "../../context/fournisseurContext/apiCalls";
import { createArticle } from "../../context/articleContext/apiCalls";
import { useContext, useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { getEmployes } from "../../context/employeContext/apiCalls";
import { EmployeContext } from "../../context/employeContext/EmployeContext";
import { getCategories } from "../../context/categorieContext/apiCalls";
import { CategorieContext } from "../../context/categorieContext/CategorieContext";

export default function NouvelArticle() {
  const [article,setArticle] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(ArticleContext);
  const { fournisseurs,  dispatch:dispatchFournisseur } = useContext(FournisseurContext);
  const { employes,  dispatch:dispatchEmploye } = useContext(EmployeContext);
  const { categories,  dispatch:dispatchCategorie } = useContext(CategorieContext);


  useEffect(() => {
    getFournisseurs(dispatchFournisseur);
  }, [dispatchFournisseur]);
  useEffect(() => {
    getEmployes(dispatchEmploye);
  }, [dispatchEmploye]);
  useEffect(() => {
    getCategories(dispatchCategorie);
  }, [dispatchCategorie]);
  const handleChange = (e) => {
    const value = e.target.value;
    setArticle({ ...article, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createArticle(article, dispatch);
    history.push("/")
  };
 

  return (
    <div className="nouvelArticle">
        <h1 className="nouveauArticleTile">Nouvel Article</h1>
        <form className="nouvelArticleForm">
          
          <div className="nouvelArticleItem">
           <label>id_article</label>  
           <input type="text"  name="id_article"  onChange={handleChange} />
          </div> 
          <div className="nouvelArticleItem">
           <label>Désignation</label>  
           <input type="text"  name="designation"  onChange={handleChange} />
          </div> 
          <div className="nouvelArticleItem">
           <label>Date_achat</label>  
           <input type="date"  name="date_achat"  onChange={handleChange} />
          </div>  
          
          <div className="nouvelArticleItem">
                <label>PrixHt</label>  
                <input type="text"  name="prixHT"  onChange={handleChange} />
          </div>
           <div className="nouvelArticleItem">
               <label>Quantite</label>  
               <input type="text"  name="quantite"  onChange={handleChange}/>
           </div> 
           <div className="nouvelArticleItem">
               <label>Numéro Serie</label>  
               <input type="text"   name="numero_serie"  onChange={handleChange}/>
           </div> 

          <div className="nouvelArticleItem">
          <div className="addProductItemm">
          <select
          name="categorie"
          onChange={handleChange}
        >
          <option >Categorie :</option>
          {categories.map((categorie) => (
            
            <option  value={categorie.nom}>
              {categorie.nom}
            </option>
          ))}
        </select>
            </div>
            
          <div className="addProductItemm">
          <select
          name="employe"
          onChange={handleChange}
        >
          <option >Employe :</option>
          {employes.map((employe) => (
            
            <option  value={employe.nom}>
              {employe.nom}
            </option>
          ))}
        </select>
            </div>
          </div> 
          <div className="addProductItem">
          <select
          name="fournisseur"
          onChange={handleChange}
        >
          <option >Fournisseur :</option>
          {fournisseurs.map((fournisseur) => (
            
            <option  value={fournisseur.nom}>
              {fournisseur.nom}
            </option>
          ))}
        </select>
            </div>
          
          <button className="NouvelArticleButton"  onClick={handleSubmit}>Creer</button>
        </form>    
    </div>
  )
}
