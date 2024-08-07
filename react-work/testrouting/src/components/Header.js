import { Link } from "react-router-dom";

function Header(){
    return <>
       <div className="bg-danger d-flex justify-content-around align-items-center" style={{height:"50px"}}>
          <Link to="/"><small style={{cursor:"pointer"}}>Home</small></Link>
          <Link to="/about"><small style={{cursor:"pointer"}}>About us</small></Link>
          <Link to="/contact"><small style={{cursor:"pointer"}}>Contact us</small></Link>
          <Link to="/products"><small style={{cursor:"pointer"}}>Products</small></Link>
          <Link to="/category"><small style={{cursor:"pointer"}}>Category</small></Link>
       </div>
    </>
}

export default Header;