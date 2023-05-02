import "./articleList.css"
import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useEffect} from "react";
import  {ArticleContext} from "../../context/articleContext/ArticleContext";
import { deleteArticle, getArticles } from "../../context/articleContext/apiCalls";
import { Link } from "react-router-dom";


export default function Articlelist() {
  const {articles,dispatch}= useContext(ArticleContext);

  useEffect(()=>{
    getArticles(dispatch);

  },[dispatch]);

  const handleDelete = (id)=>{
     deleteArticle(id,dispatch);
  };
  const columns = [
    { field: 'id_article', headerName: 'Code Article', width:100 },
    { field: 'designation', headerName: 'Désignation', width: 90 },
    { field: 'date_achat', headerName: 'Date_achat', width: 100 },
    { field: 'fournisseur', headerName: 'Fournisseur', width: 100 },
    { field: 'prixHT', headerName: 'PrixHt', width: 80 },
    { field: 'employe', headerName: 'Employé', width: 100 },
    { field: 'quantite', headerName: 'Quantité', width: 90 },
    { field: 'numero_serie', headerName: 'Numero_série', width: 100 },
    { field: 'categorie', headerName: 'catégorie', width: 100 },

    {
      field:'action',
      headerName:'Action',
      width: 140,
      renderCell: (params)=>{
        return(
        <>
        <Link
              to={{pathname:"/article/" + params.row._id, article:params.row}}>
         <button className="articleListSetting">Modifier</button>
        </Link >
          <DeleteIcon className="articleListDelete" onClick={()=>handleDelete(params.row._id)}/>
        </>);
      },
    }
  ];
  
  return (

    <div className="articlelist">
          <div className="Nouv">
          <Link
              to={ "/nouvelArticle/"}
            > 
             <button className="articleAddButton">Nouvel Article</button> </Link>
            <h1 className="nouveauArticleTile">Article</h1></div>
          <DataGrid rows={articles} disabledSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection getRowId={(r)=> r._id}/>
    </div>
  )
}
