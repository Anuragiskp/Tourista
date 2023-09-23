import Navbar from './Navbar';
import HeaderIndex from './HeaderIndex';
import Body from './Body';
import Footer from './Footer';

function Homepage() {
    return (
      <div className="App">
        <Navbar />
        <HeaderIndex />
        <Body />
        <Footer />
      </div>
    );
  }
  
  export default Homepage;