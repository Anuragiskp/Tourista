import Navbar from "./Navbar";
import HeaderPages from './HeaderPages';
import Footer from './Footer';

function Contact() {

    const title = "Contact";

    const styles = {
        "resize": "none"
    }

    return(
        <div className="Contact">
            <Navbar />
            <HeaderPages title={title} />

            <section id = "contact" class = "py-4">
                <div class = "container">
                    <div class = "title-wrap">
                        <span class = "sm-title">Get in touch with us</span>
                        <h2 class = "lg-title">Contact us</h2>
                    </div>

                    <div class = "contact-row">
                        <div class = "contact-left">
                            <form class = "contact-form">
                                <input type = "text" class = "form-control" placeholder="Your name" />
                                <input type = "email" class = "form-control" placeholder="Your email" />
                                <textarea rows = "4" class = "form-control" placeholder="Your message" style = {styles}></textarea>
                                <input type = "submit" class = "btn" value = "Send message" />
                            </form>
                        </div>
                        <div class = "contact-right my-2">
                            <div class = "contact-item">
                                <span class = "contact-icon flex">
                                    <i class = "fa fa-phone-alt"></i>
                                </span>
                                <div>
                                    <span>Phone</span>
                                    <p class = "text">+91-123-456-7890</p>
                                </div>
                            </div>
                            <div class = "contact-item">
                                <span class = "contact-icon flex">
                                    <i class = "fa fa-envelope"></i>
                                </span>
                                <div>
                                    <span>Message</span>
                                    <p class = "text">tourista@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;