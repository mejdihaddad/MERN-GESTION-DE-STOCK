import "./fournisseurList.css"
import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import  {FournisseurContext} from "../../context/fournisseurContext/FournisseurContext";
import { deleteFournisseur, getFournisseurs } from "../../context/fournisseurContext/apiCalls";

export default function FournisseurList() {
  const {fournisseurs,dispatch}= useContext(FournisseurContext);
  useEffect(()=>{
    getFournisseurs(dispatch);

  },[dispatch]);

  const handleDelete = (id)=>{
    deleteFournisseur(id,dispatch);
 };
    const columns = [
      { field: 'id_fournisseur', headerName: 'Id', width:120 },
      { field: 'nom', headerName: 'Nom', width: 120 },
      { field: 'email', headerName: 'Email', width: 120 },
      { field: 'tel', headerName: 'Tel', width: 120 },
      { field: 'adresse', headerName: 'Adresse', width: 120 },
      {
        field:'action',
        headerName:'Action',
        width: 140,
        renderCell: (params)=>{
          return(
          <>
          <Link
              to= {{pathname:"/fournisseur/" + params.row._id, fournisseur:params.row}}>
           <button className="fournisseurListSetting">Modifier</button>
          </Link>
            <DeleteIcon className="fournisseurListDelete" onClick={()=>handleDelete(params.row._id)}/>
          </>);
        },
      }
    ];
    
    return (
      <div className="fournisseurlist">
       <Link
              to={"/nouveauFournisseur"}>
         <button className="fournisseurAddButton">Nouveau Fournisseur</button>
        </Link>
        <h1 className="nouveauArticleTile">Fournisseur</h1>
        
         <DataGrid rows={fournisseurs} disabledSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection getRowId={(r)=> r._id}/>
      </div>
    )
}
