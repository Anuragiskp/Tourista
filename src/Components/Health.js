import Navbar from "./Navbar";
import HeaderPages from './HeaderPages';
import Footer from './Footer';

function Health() {

    const title = "Health";

    return(
        <div className="Health">
            <Navbar />
            <HeaderPages title={title} />
            <Footer />
        </div>
    );
};

export default Health;
