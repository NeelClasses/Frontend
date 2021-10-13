import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
