import "./categorieList.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import  {CategorieContext} from "../../context/categorieContext/CategorieContext";
import { deleteCategorie, getCategories } from "../../context/categorieContext/apiCalls";


export default function CategorieList() {
     const {categories,dispatch}= useContext(CategorieContext);

     useEffect(()=>{
      getCategories(dispatch);
  
    },[dispatch]);
  
    const handleDelete = (id)=>{
       deleteCategorie(id,dispatch);
    };
    const columns = [
      { field: 'id_categorie', headerName: 'Id', width:100 },
      { field: 'nom', headerName: 'Nom', width: 90 },
      { field: 'description', headerName: 'Description', width: 200 },

      {
        field:'action',
        headerName:'Action',
        width: 140,
        renderCell: (params)=>{
          return(
          <>
          <Link
              to={{pathname:"/categorie/" + params.row._id, categorie:params.row}}>
           <button className="categorieListSetting">Modifier</button>
          </Link>
            <DeleteIcon className="categorieListDelete" onClick={()=>handleDelete(params.row._id)}/>
          </>);
        },
      }
    ];
    
    return (
      <div className="categorielist">
        <Link
              to={"/nouvelCategorie"}>
         <button className="categorieAddButton">Nouvel Categorie</button>
        </Link>
         <h1 className="nouveauArticleTile">Categorie</h1>
         <DataGrid rows={categories} disabledSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection getRowId={(r)=> r._id}/>
      </div>
    )
}
