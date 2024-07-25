import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Banner from "../../components/home/Banner";
import Section from "../../components/home/Section";

const Home = () => {
    return (
        <>
            {/* Navigation - Header*/}
            <Header/>
            {/* Banner*/}
            <Banner />
            {/* Section*/}
            <Section/>
            {/* Footer*/}
            <Footer/>
        </>
    );
};

export default Home;