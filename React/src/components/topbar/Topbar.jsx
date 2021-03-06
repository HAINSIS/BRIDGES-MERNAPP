import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <div className= "topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style= {{textDecoration : "none"}}>
          <span className="logo">BRIDGES</span>
        </Link>

      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style= {{textDecoration : "none"}}>
          <span className="topbarLink">Homepage</span>
        </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to="/Messenger" style= {{textDecoration : "none"}} color="white">
              <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
              </div>
          </Link>

          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to ={`/profile/${user.username}`}>
                <img src={user.profilePicture ? PF + user.profilePicture : PF + "no_profilePicture.jpg"} alt="" className="topbarImg"
                />
        </Link>
      </div>
    </div>
  );
}