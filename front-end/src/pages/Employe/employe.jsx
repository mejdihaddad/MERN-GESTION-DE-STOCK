import "./employe.css"
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { EmployeContext } from "../../context/employeContext/EmployeContext";
import { updateEmploye } from "../../context/employeContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {useLocation } from "react-router-dom";
export default function Employe() {
  const location = useLocation();
  const employe = location.employe;

  const emp = location.employe;
  
  const [empl,setEmploye] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(EmployeContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmploye({ ...empl, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmploye(emp._id, empl, dispatch);
    history.push("/employes");
  };
  return (
    <div className="employe">
      <div className="employeTitleContainer">
        <h1 className="employeTitle">Modifier Employe</h1>
          
      </div>
      <div className="employeContainer">
        <div className="employeShow"> 
          <div className="employeShowTop">
            <div className="employeShowTopTitle">
              <span className="employeShowNom">{employe.nom}</span>
              <span className="employeShowService">{employe.service}</span>
            </div>
          </div>
          <div className="employeShowBottom">
            <span className="employeShowTitle">Details</span>
            <div className="employeShowInfo">
               <BadgeIcon className="employeShowIcon"/>
               <span className="showEmployeInfoTitle">{employe.id_employe}</span>
            </div>
            <div className="employeShowInfo">
               <PersonIcon className="employeShowIcon"/>
               <span className="showEmployeInfoTitle">{employe.nom}</span>
            </div>
            <div className="employeShowInfo">
               <PersonIcon className="employeShowIcon"/>
               <span className="showEmployeInfoTitle">{employe.service}</span>
            </div>
            <div className="employeShowInfo">
               <AlternateEmailIcon className="employeShowIcon"/>
               <span className="showEmployeInfoTitle">{employe.fonction}</span>
            </div>
          </div>
        </div>
        <div className="employeUpdate">
           <div className="employeUpdateTitle">Modifier</div>  
           <form className="employeUpdateForm">
              <div className="employeUpdateLeft">
                <div className="employeUpdateItem">
                  <label>Id</label>
                  <input type="text" placeholder={employe.id_employe} name="id_employe"defaultValue={employe.id_employe}  className="employeUpdateInput"onChange={handleChange} />
                </div>
                <div className="employeUpdateItem">
                  <label>Nom</label>
                  <input type="text" placeholder={employe.nom} name="nom"defaultValue={employe.nom} className="employeUpdateInput" onChange={handleChange}/>
                </div>
                <div className="employeUpdateItem">
                  <label>Service</label>
                  <input type="text" placeholder={employe.service}name="service"defaultValue={employe.service} className="employeUpdateInput" onChange={handleChange}/>
                </div>
                <div className="employeUpdateItem">
                  <label>Fonction</label>
                  <input type="text" placeholder={employe.fonction}name="fonction"defaultValue={employe.fonction} className="employeUpdateInput"onChange={handleChange} />
                  <input type="hidden" placeholder={employe._id} defaultValue={employe._id} name="hid"   />               
                </div>
                <button className="employeUpdateButton"onClick={handleSubmit}>Enregistrer</button>

              </div>
             
                

           </form>
        </div>     
      </div>
    </div>
  )
}
