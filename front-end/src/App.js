import Sidebar from "./components/sidebar/sidebar";
import Topbar  from "./components/topbar/topbar";
import "./app.css";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Userlist from "./pages/userlist/userlist";
import ArticleList from "./pages/articleList/articleList";
import Utilisateur from "./pages/user/utilisateur";
import NouvelUtilisateur from "./pages/nouvelUtilisateur/nouvelUtilisateur";
import Article from "./pages/article/article";
import NouvelArticle from "./pages/nouvelArticle/nouvelArticle";
import FournisseurList from "./pages/fournisseurList/fournisseurList";
import NouveauFournisseur from "./pages/nouveauFournisseur/nouveauFournisseur";
import Fournisseur from "./pages/fournisseur/fournisseur";
import CategorieList from "./pages/categorieList/categorieList";
import Categorie from "./pages/categorie/categorie";
import NouvealCategorie from "./pages/nouvelCategorie/nouvealCategorie";
import EmployeList from "./pages/employeList/employeeList";
import Employe  from "./pages/Employe/employe";
import NouvelEmploye  from "./pages/nouvelEmploye/nouvelEmploye";
import Login from "./pages/login/Login";
import {AuthContext} from "./context/authContext/AuthContext"
import {useContext} from "react";
import { Redirect } from 'react-router';
function App() {
  const {utilisateur} = useContext(AuthContext);
  return(
   <Router>
    <Switch>
    <Route path="/login">{utilisateur ? <Redirect to="/" /> : <Login />}</Route>
    {utilisateur && (
          <>
     <Topbar/>
     <div className="container">
       <Sidebar/>
      
        <Route  exact  path="/">
             <ArticleList/>
        </Route>
       
        <Route path="/article/:articleId">
          <Article />
        </Route>
        <Route  path="/nouvelArticle">
           <NouvelArticle />
        </Route>
        <Route path="/utilisateurs">
          <Userlist/>
        </Route>
        <Route path="/utilisateur/:utilisateurId">
          <Utilisateur />
        </Route>
        <Route  path="/nouvelUtilisateur">
           <NouvelUtilisateur />
        </Route>
        <Route path="/fournisseurs">
          <FournisseurList/>
        </Route>
        <Route path="/fournisseur/:fournisseurId">
          <Fournisseur />
        </Route>
        <Route  path="/nouveauFournisseur">
           <NouveauFournisseur />
        </Route>
        <Route path="/categories">
          <CategorieList/>
        </Route>
        <Route path="/categorie/:categorieId">
          <Categorie />
        </Route>
        <Route  path="/nouvelCategorie">
           <NouvealCategorie />
        </Route>
        <Route path="/employes">
          <EmployeList/>
        </Route>
        <Route path="/employe/:employeId">
          <Employe />
        </Route>
        <Route  path="/nouvelEmploye">
           <NouvelEmploye/>
        </Route>
     </div>
     </>
     )}
     </Switch>

   </Router>);
}

export default App;
