import { Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

const RouteLayout = ({ component: Component, isFullScreen, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isFullScreen ? (
          <Component {...props} />
        ) : (
          <>
            <Header />
            <Component {...props} />
            <Footer />
          </>
        )
      }
    />
  );
};
RouteLayout.defaultProps = {
  isFullScreen: false,
};

export default RouteLayout;
