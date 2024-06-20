import Desc from "./components/Desc";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {

    return (
      <div className='w-[100%] image'>
        <Navbar/>
        <Hero/>
        <Desc/>
        <Footer/>
      </div>
    );
};

export default App;
