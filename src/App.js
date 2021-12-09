import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/HomePage/Home';
import AboutUs from './Components/AboutUsPage/AboutUs';
import ServicePage from './Components/ServicesPage/ServicePage';
import PsychotherapistPage from './Components/OurPsychotherapistPage/PsychotherapistPage';
import MyAppointments from './Components/DashboardPage/MyAppointments/MyAppointments';
import AddReview from './Components/DashboardPage/AddReview/AddReview';
import AllAppointment from './Components/AdminPage/AllApointment/AllAppointment';
import AddService from './Components/AdminPage/AddService/AddService';
import ContactUs from './Components/ContactUsPage/ContactUs';
import Login from './Components/LoginPage/Login';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import PrivateRoute from './Components/LoginPage/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h1>Email:{loggedInUser.email}</h1> */}{/* Checked LoggedInUser set or not in the context */}
      <Router>
        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          {/* About Us Page */}
          <Route path="/aboutUs">
            <AboutUs />
          </Route>

          {/*Our Services Page */}
          <Route path="/ourServices">
            <ServicePage />
          </Route>

          {/* Our Psychotherapists Page */}
          <Route path="/ourPsychotherapists">
            <PsychotherapistPage />
          </Route>

          {/* Your Dashboard Page-only authenticate user */}
          <PrivateRoute path="/dashboard/myAppointments">
            <MyAppointments />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview />
          </PrivateRoute>

          {/* Admin Page-only authenticate user*/}
          <PrivateRoute path="/admin/allAppointments">
            <AllAppointment />
          </PrivateRoute>
          <PrivateRoute path="/admin/addService">
            <AddService />
          </PrivateRoute>

          {/* Contact Us Page */}
          <Route path="/contactUs">
            <ContactUs />
          </Route>

          {/* Login Page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Route Not Page */}
          <Route path="*">
            <NotFoundPage />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
