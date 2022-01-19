import NavBar from "components/NavBar";
import Footer from "components/Footer";
import NewUse from "components/NewUse/index";

const page = () => {
    return (
        <>
            <div className="conteiner">
                    <NavBar />
            </div>
            <div className="conteiner">
                <NewUse />
            </div>
            <div className="conteiner">
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default page;