import {Link} from 'react-router-dom' ;
import img from './images/vi.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={img} alt="" />
            <h1>Voyager</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">Our Team</Link>
                <Link to="/Download" style={{
                    color: "White",
                    backgroundColor: "#cc3030",
                    borderRadius: "8px" 
                }}>Download</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;