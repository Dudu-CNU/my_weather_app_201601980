import './App.css';
import Header from "./components/Header"
import About from "./pages/About";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const city = "Seoul";
    return (
        <Router>
            <div className="App">
                <Header region="Korea" cityName={city}/>
                <ul className="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/cities">Cities</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/cities">
                        <Cities />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;