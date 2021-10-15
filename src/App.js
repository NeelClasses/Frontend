import { BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contactus";
import Signup from "./components/Signup";
import RouteLayout from "./routes";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <RouteLayout path="/" exact component={Home} />
        <RouteLayout path="/about" exact component={AboutUs} />
        <RouteLayout path="/contact" exact component={ContactUs} />
        <RouteLayout
          path="/signup"
          exact
          component={Signup}
          isFullScreen={true}
        />
        <RouteLayout
          path="/login"
          exact
          component={Login}
          isFullScreen={true}
        />
      </Switch>
    </Router>
  );
}

export default App;
