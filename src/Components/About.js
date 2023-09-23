import Navbar from "./Navbar";
import HeaderPages from './HeaderPages';
import Footer from './Footer';

function About() {

    const title = "About";

    return(
        <div className="About">
            <Navbar />
            <HeaderPages title={title} />
            <section id = "about" class = "py-4">
                <div class = "container">
                    <div class = "title-wrap">
                        <span class = "sm-title">things to know about Tourista Web App</span>
                    </div>

                    <div class = "about-row">
                        <div class = "about-left my-2">
                            <img src = "images/about-img.jpg" alt = "about img" />
                        </div>
                        <div class = "about-right">
                            <h2>Tourista</h2>
                            <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae sed aperiam qui repudiandae earum voluptatem. Modi at inventore omnis veniam necessitatibus exercitationem vel nesciunt delectus ex officiis, culpa doloremque odit illo saepe placeat. Delectus consequuntur reprehenderit omnis accusantium officiis!</p>
                            <p class = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo blanditiis quidem consequuntur qui quaerat fuga iste tenetur consequatur porro. Aliquam maiores alias doloribus at quisquam quo numquam perferendis. Odit!</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;