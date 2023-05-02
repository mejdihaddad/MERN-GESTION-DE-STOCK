import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ArticleContextProvider } from './context/articleContext/ArticleContext';
import { UtilisateurContextProvider } from './context/utilisateurContext/UtilisateurContext';
import { FournisseurContextProvider } from './context/fournisseurContext/FournisseurContext';
import { CategorieContextProvider } from './context/categorieContext/CategorieContext';
import { EmployeContextProvider } from './context/employeContext/EmployeContext';



ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ArticleContextProvider>
        <UtilisateurContextProvider>
          <FournisseurContextProvider>
            <CategorieContextProvider>
              <EmployeContextProvider>
               <App />
              </EmployeContextProvider>
           </CategorieContextProvider>
          </FournisseurContextProvider>
        </UtilisateurContextProvider>
      </ArticleContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

