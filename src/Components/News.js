import Navbar from "./Navbar";
import HeaderPages from './HeaderPages';
import Footer from './Footer';

function News() {

    const styles = {
        
        "--bg-img":"url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg);"
    }
    const title = "News";
    return(
        <div className="News">
            <Navbar />
            <HeaderPages title = {title} />
            <section class="info"></section>
            <section class="cards-wrapper">
            <div class="card-grid-space">
                <a
                class="card"
                href="#"
                style={styles}
                >
                <div>
                    <h1>News 1</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptate, voluptatem accusantium quis accusamus
                    laboriosam illo ea reprehenderit laudantium!
                    </p>
                    <div class="date">6 Oct 2017</div>
                    <div class="tags">
                    <div class="tag">Political</div>
                    </div>
                </div>
                </a>
            </div>
            
            
            </section>
            <Footer />
        </div>
    );
};

export default News;