import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext} from "react";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';



 
export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <Link
              to=  {"/"}>
                <span className="logo">STOCK</span>
              </Link>
            </div>
              <div className="topRight">
                 <Link
                   to= {{pathname:"/login" }}>
                   <LogoutIcon className='logout' onClick={() => dispatch(logout())}/>
                </Link>        
            </div>
        </div>
    </div>
  )
}
