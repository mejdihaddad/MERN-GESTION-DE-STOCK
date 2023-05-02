import "./sidebar.css";
import ArticleIcon from '@mui/icons-material/Article'; 
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import "../../../src/app.css";
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
          
            <ul className="sidebarList">
            <Link
              to= {"/"} className="link">
              <li className="sidebarListItem">
                    <ArticleIcon/>
                    Article
              </li>
              </Link>
              <Link
              to= {"/fournisseurs"} className="link">
              <li className="sidebarListItem">
                    <StorefrontIcon/>
                    Fournisseur
              </li>
              </Link>
              <Link
              to= {"/categories"} className="link">
              <li className="sidebarListItem">
                    <CategoryIcon/>
                    Catégorie
              </li>
              </Link>
              <Link
              to= {"/employes"} className="link">
              <li className="sidebarListItem">
                    <PersonIcon/>
                    Employé
              </li>
              </Link>
              <Link
              to= {"/utilisateurs"} className="link">
              <li className="sidebarListItem">
                    <PersonIcon/>
                    Utilisateur
              </li>
              </Link>
            </ul>
          </div>
        </div>
      
    </div>
  )
}
