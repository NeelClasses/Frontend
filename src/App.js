import { BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contactus";
import Signup from "./components/Signup";
import RouteLayout from "./routes";
import Login from "./components/Login";
import Courses from "./components/Courses";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/theme";
import CourseDetails from "./components/CourseDetails";
import AdminPanel from "./components/Admin";
import { Provider } from "react-redux";
import store from "./store";
import AddEditForm from "./components/Admin/AddEditForm";
import PaySuccess from "./components/Payments/PaySuccess";
import PayFailed from "./components/Payments/PayFailed";
import CourseResults from "./components/Courses/CourseResults";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Switch>
            <RouteLayout path="/" exact component={Home} />
            <RouteLayout path="/courses" exact component={Courses} />
            <RouteLayout path="/my-courses" exact component={Courses} />
            <RouteLayout path="/about" exact component={AboutUs} />
            <RouteLayout path="/contact" exact component={ContactUs} />
            <RouteLayout path="/course/:courseId" component={CourseDetails} />
            <RouteLayout
              exact
              path="/courses/:type/:subtype"
              component={CourseResults}
            />
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
            <RouteLayout
              path="/admin"
              component={AdminPanel}
              isFullScreen={true}
            />
            <RouteLayout path="/admin/edit/:courseId" component={AddEditForm} />
            <RouteLayout path="/admin/add" component={AddEditForm} />
            <RouteLayout
              path="/paysuccess/:courseCost/:orderId/:txnId"
              component={PaySuccess}
            />
            <RouteLayout path="/payfailed" component={PayFailed} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
