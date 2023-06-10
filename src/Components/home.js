import img from './images/big.png';

const Home = () => {

    return ( 
        <div className="home" style={{
            textAlign:'center'
        }}>
            <h1 style={{
                textDecoration: 'underline'
            }}>Voyager</h1>
            <img src={img} alt="" />
            <h2>Voyager is based on the Rashid 2 rover which was built by</h2>
            <h2> the UAE. To explore and reaserch the surface of the moon</h2>
            <h2>and to perform scinetific experiments on the moon. In</h2>
            <h2>Voyager you should try to land the rover on the moon</h2>
            <h2>without anything happening to the rover by dodging the</h2>
            <h2>obstacles.</h2>
        </div>
     );
}
 
export default Home;