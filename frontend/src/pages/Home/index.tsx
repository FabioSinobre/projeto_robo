import Article from "components/Article";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import NavBar from "components/NavBar/index";

function page() {
    return (
        <>
            <div className="conteiner">
                <div className="conteiner">
                    <NavBar />
                </div>
                <div className="conteiner">
                    <Carousel />
                </div>
                <div className="conteiner">
                    <Article />
                </div>
                <div className="conteiner">
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default page;