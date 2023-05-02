import "./article.css";
import BadgeIcon from '@mui/icons-material/Badge';
import AbcIcon from '@mui/icons-material/Abc';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { ArticleContext } from "../../context/articleContext/ArticleContext";
import { updateArticle } from "../../context/articleContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {useLocation } from "react-router-dom";

export default function Article() {
  const location = useLocation();
  const article = location.article;

  const art = location.article;
  
  const [arti,setArticle] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(ArticleContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setArticle({ ...arti, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateArticle(art._id, arti, dispatch);
    history.push("/");
  };
  return (
    <div className="article">
    <div className="articleTitleContainer">
      <h1 className="articleTitle">Modifier Article</h1>
    </div>
    <div className="articleContainer">
      <div className="articleShow"> 
        <div className="articleShowTop">
          <div className="articleShowTopTitle">
            <span className="articleShowNom">{article.designation}</span>
          </div>
        </div>
        <div className="articleShowBottom">
          <span className="articleShowTitle">Details</span>
          <div className="articleShowInfo">
             <BadgeIcon className="articleShowIcon"/>
             <span className="articleUserInfoTitle">{article.id_article}</span>
          </div>
          <div className="articleShowInfo">
             <AbcIcon className="articleShowIcon"/>
             <span className="showArticleInfoTitle">{article.designation}</span>
          </div>
          <div className="articleShowInfo">
             <CalendarMonthIcon className="articleShowIcon"/>
             <span className="articleUserInfoTitle">{article.date_achat}</span>
          </div>
          <div className="articleShowInfo">
             <AbcIcon className="articleShowIcon"/>
             <span className="articleUserInfoTitle">{article.fournisseur}</span>
          </div>
          <div className="articleShowInfo">
             <EventAvailableIcon className="articleShowIcon"/>
             <span className="showArticleInfoTitle">{article.prixHT}</span>
          </div>
        
          <div className="articleShowInfo">
             <EventAvailableIcon className="articleShowIcon"/>
             <span className="showArticleInfoTitle">{article.numero_serie}</span>
          </div>
          <div className="articleShowInfo">
             <AbcIcon className="articleShowIcon"/>
             <span className="showArticleInfoTitle">{article.employe}</span>
          </div>
          <div className="articleShowInfo">
             <EventAvailableIcon className="articleShowIcon"/>
             <span className="showArticleInfoTitle">{article.quantite}</span>
          </div>
          <div className="articleShowInfo">
             <EventAvailableIcon className="articleShowIcon"/>
             <span className="showArticleInfoTitle">{article.numero_serie}</span>
          </div>
        </div>
      </div>
      <div className="articleUpdate">
         <div className="articleUpdateTitle">Modifier</div>  
         <form className="articleUpdateForm">
            <div className="articleUpdateLeft">
              <div className="articleUpdateItem">
                <label>Id</label>
                <input type="text" placeholder={article.id_article}className="articleUpdateInput" name="id_article"defaultValue={article.id_article} onChange={handleChange}  />
              </div>
              <div className="articleUpdateItem">
                <label>Nom</label>
                <input type="text" placeholder={article.designation} className="articleUpdateInput" name="designation"defaultValue={article.designation}  onChange={handleChange}/>
              </div>
              <div className="articleUpdateItem">
                <label>Date_achat</label>
                <input type="date" placeholder={article.date_achat} className="articleUpdateInput" name="date_achat"defaultValue={article.date_achat}  onChange={handleChange} />
              </div>
              <div className="articleUpdateItem">
                <label>Quantite</label>
                <input type="text" placeholder={article.quantite}className="articleUpdateInput"name="quantite"defaultValue={article.quantite} onChange={handleChange} />
              </div>
              <div className="articleUpdateItem">
                <label>Numero_serie</label>
                <input type="text" placeholder={article.numero_serie} className="articleUpdateInput"name="numero_serie"defaultValue={article.numero_serie}  onChange={handleChange} />
              </div>
            </div>
            <div className="articleUpdateRight">
              <div className="articleUpdateItem">
                <label>PrixHt</label>
                <input type="text" placeholder={article.prixHT} className="articleUpdateInput"name="prixHT"defaultValue={article.prixHT}  onChange={handleChange} />
              </div>
              <div className="articleUpdateItem">
               
              </div>
              <div className="articleUpdateItem">
            
               </div>
               <input type="hidden" placeholder={article._id} defaultValue={article._id} name="hid"   />
              <button className="articleUpdateButton" onClick={handleSubmit}>Enregistrer</button>
            </div>
         </form>
      </div>     
    </div>
  </div>
  )
}
