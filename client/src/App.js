import React, { Fragment } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// toastify
import { ToastContainer } from "react-toastify";

// components
import Home from "./components/Home/Home";
import NewLogin from "./components/Login/NewLogin";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import PostAdForm from "./components/PostAd/PostAdForm";
import Chat from "./components/Chat/Chat";
import Error from "./components/Error/Error";
import Profile from "./components/Profile/Profile";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import ProductList from "./components/Products/ProductList/ProductList";
import NavMenu from './components/Navbar/NavMenu'
import ProductDetails from './components/Products/ProductDetails/ProductDetails'
import Servicing from "./components/Servicing/Servicing";
import Accessories from "./components/Accessories/Accessories";

const App = ({location}) => {
  const { pathname } = location;
  return (
    <Fragment>
        <ToastContainer />
        <ScrollTop />
        { pathname !== "/" && pathname !== "/login" &&  <NavMenu background={ pathname === "/" ? "transparent" : "not-transparent" } /> }
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <NewLogin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/post-ad">
            <PostAdForm />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/all-ads">
            <ProductList />
          </Route>
          <Route path="/product-details">
            <ProductDetails />
          </Route>
          <Route path="/accessories">
            <Accessories />
          </Route>
          <Route path="/servicing">
            <Servicing />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Redirect to="/error" />
        </Switch>
        { pathname !== "/login" && <Footer /> }
    </Fragment>
  );
};

export default withRouter(App);