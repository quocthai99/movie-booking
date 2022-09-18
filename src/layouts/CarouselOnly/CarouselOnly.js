import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;