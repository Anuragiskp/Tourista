import Navbar from './Navbar';
import HeaderIndex from './HeaderIndex';
import Body from './Body';
import Footer from './Footer';
import PopPlaces from './PopPlaces';

function Homepage({setSiteInfo}) {
    return (
      <div className="Homepage">
        <Navbar />
        <HeaderIndex />
        <PopPlaces setSiteInfo = {setSiteInfo}/>
        <Footer />
      </div>
    );
  }
  
  export default Homepage;