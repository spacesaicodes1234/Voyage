import { Link } from "react-router-dom";
import alert from './images/caution.png';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <br />
            <p style={{
                textAlign: "center"
            }}>That page cannot be found!</p>
            <br />
            <Link to="/">Back to Home...</Link>
            <div className="al">
                <img className="ali" alt="ali" src={alert}/>
            </div>
        </div>
     );
}
 
export default NotFound;