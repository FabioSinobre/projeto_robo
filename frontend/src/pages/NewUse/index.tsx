import NavBar from "components/NavBar";
import Footer from "components/Footer";
import NewUse from "components/NewUse";

const page = () => {
    return (
        <>
            <div className="conteiner">
                <div>
                    <NavBar />
                </div>
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