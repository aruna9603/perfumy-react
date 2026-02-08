import Navbar from "./components/navbar";
import Search from "./components/search";
import Product from "./components/product";
import About from "./about";
import Contact from "./components/contact";


function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <About></About>
            <Contact></Contact>
        </div>
    )
}

export default App