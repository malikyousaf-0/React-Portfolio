import "./App.scss";
import Divider from "./components/divider/Divider";
import Pcards from "./content/Pcards/Pcards";
import About from "./content/about/About";
import Banner from "./content/banner/Banner";
import Cards from "./content/cards/Cards";
import Hero from "./content/hero/Hero";
import Contact from "./content/contact/Contact";
// imges
import p1 from "./asset/projectsimages/project1.PNG";
import p2 from "./asset/projectsimages/project2.PNG";
import p3 from "./asset/projectsimages/project3.PNG";
import Counter from "./components/counter/Counter";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <Hero />
      <About id="about" />
      <Divider
        id="services"
        name="Services"
        line="Clients & Students satisfaction is my first priority and it will be always."
      />
      <Cards />

      <Banner content={<Counter />} size={"70vh"} mblsize={"130vh"} />
      <Divider
        id="portfolio"
        name="portfolio"
        line="Due to the client's policy. I can't show all of the projects that I've done."
      />
      <Pcards
        entities={{
          imges: [p1, p2, p3],
          titles: ["A Portfolio website", "Product Site", "Ecomerce store"],
          discription: [
            "It is the portfolio website of a client who want to sell hi serivces online",
            "A site of a digital product also custommer support of custommers",
            "A Fully Design Ecomerce store that work for a beauty parlor to sell product online",
          ],
        }}
      />
      <Banner content={<Testimonial />} size={"70vh"} mblsize={"70vh"} />
      <Divider
        name="Contact"
        line="If you have any query, please feel free to contact me."
      />
      <Banner content={<Contact />} size={"100vh"} mblsize={"160vh"} />
    </>
  );
}

export default App;
