import "./nouvelEmploye.css";
import { EmployeContext } from "../../context/employeContext/EmployeContext";
import { createEmploye } from "../../context/employeContext/apiCalls";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";




export default function NouvelEmploye() {
  const [employe,setEmploye] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(EmployeContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmploye({ ...employe, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createEmploye(employe, dispatch);
    history.push("/employes")
  };
  return (
    <div className="nouvelEmploye">
        <h1 className="nouveauEmployeTile">Nouvel Employé</h1>
        
        <form className="nouvelEmployeForm">
        <div className="nouvelEmployeItem">
           <label>id</label>  
           <input type="text"  name="id_employe"  onChange={handleChange} />
          </div>
          
          <div className="nouvelEmployeItem">
           <label>Nom</label>  
           <input type="text"  name="nom"  onChange={handleChange} />
          </div> 
          <div className="nouvelEmployeItem">
           <label>Service</label>  
           <input type="text"  name="service"  onChange={handleChange} />
          </div>  
          <div className="nouvelEmployeItem">
           <label>Fonction</label>  
           <input type="text"   name="fonction"  onChange={handleChange}/>
          </div> 
          <div className="nouvelEmployeItem">
       
           <button className="NouvelEmployeButton" onClick={handleSubmit}>Creer</button>

          </div> 
        </form>    
    </div>
  )
}
