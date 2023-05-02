import "./userlist.css"
import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import  {UtilisateurContext} from "../../context/utilisateurContext/UtilisateurContext";
import { useContext, useEffect} from "react";
import { deleteUtilisateur, getUtilisateurs } from "../../context/utilisateurContext/apiCalls";

export default function Userlist() {
  const {utilisateurs,dispatch} = useContext(UtilisateurContext);

  useEffect(()=>{
    getUtilisateurs(dispatch);

  },[dispatch]);


  const handleDelete = (id)=>{
    deleteUtilisateur(id,dispatch);
  };
  const columns = [
    { field: 'id_utilisateur', headerName: 'ID', width:127 },
    { field: 'nom', headerName: 'Nom', width: 130 },
    { field: 'prenom', headerName: 'Prenom', width: 130 },
    { field: 'genre', headerName: 'Genre', width: 130 },
    { field: 'tel', headerName: 'Tel', width: 130 },

    

    {
      field: 'email',
      headerName: 'email',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field:'action',
      headerName:'Action',
      width: 150,
      renderCell: (params)=>{
        return(
        <>
        <Link
              to={{pathname:"/utilisateur/" + params.row._id,utilisateur: params.row}}>
         <button className="userListSetting">Modifier</button>
        </Link>
          <DeleteIcon className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
        </>);
      },
    }
  ];
  
  return (
    <div className="userlist">
      <Link
              to={"/nouvelUtilisateur"}>
           <button className="userAddButton">Nouvel Utilisateur</button>
          </Link>
       <h1 className="nouveauArticleTile">Utilisateur</h1>
       <DataGrid rows={utilisateurs} disabledSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection getRowId={(r)=> r._id}/>
    </div>
  )
}
