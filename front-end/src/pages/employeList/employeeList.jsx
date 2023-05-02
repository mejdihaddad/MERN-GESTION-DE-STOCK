import "./employeList.css"
import { DataGrid} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import  {EmployeContext} from "../../context/employeContext/EmployeContext";
import { deleteEmploye, getEmployes } from "../../context/employeContext/apiCalls";


export default function Employelist() {
  const {employes,dispatch}= useContext(EmployeContext);

  useEffect(()=>{
    getEmployes(dispatch);

  },[dispatch]);

  const handleDelete = (id)=>{
     deleteEmploye(id,dispatch);
  };
  const columns = [
    { field: 'id_employe', headerName: 'ID', width:127 },
    { field: 'nom', headerName: 'Nom', width: 130 },
    { field: 'service', headerName: 'Service', width: 130 },
    { field: 'fonction', headerName: 'Fonction', width: 130 },


   
    {
      field:'action',
      headerName:'Action',
      width: 150,
      renderCell: (params)=>{
        return(
        <>
       <Link
              to= {{pathname:"/employe/" + params.row._id, employe:params.row}}>
         <button className="userListSetting">Modifier</button>
        </Link>
          <DeleteIcon className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
        </>);
      },
    }
  ];
  
  return (
    <div className="employelist">
     <Link
              to={"/nouvelEmploye"}>
           <button className="employeAddButton">Nouvel Employe</button>
          </Link>
       <h1 className="nouveauEmployeTile">Employe</h1>
       <DataGrid rows={employes} disabledSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection getRowId={(r)=> r._id}/>
    </div>
  )
}
