import "./App.css";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container relative w-full h-screen bg-white px-24">
        <Navbar />
        <Herosection />
        <Footer />
      </div>
    </>
  );
}

export default App;
