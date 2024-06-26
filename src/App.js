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
import OurServices from './Components/OurTherapiesPage/OurServices';
import PsychotherapistPage from './Components/OurPsychotherapistPage/PsychotherapistPage';
import MyAppointments from './Components/DashboardPage/MyAppointments/MyAppointments';
import AddReview from './Components/DashboardPage/AddReview/AddReview';
import AllAppointment from './Components/AdminPage/AllApointment/AllAppointment';
import AddTherapy from './Components/AdminPage/AddTherapy/AddTherapy';
import MakeAdmin from './Components/AdminPage/MakeAdmin/MakeAdmin';
import MakeAppointment from './Components/OurTherapiesPage/Therapies/TherapyAppointment/MakeAppointment';
import ContactUs from './Components/ContactUsPage/ContactUs';
import Login from './Components/LoginPage/Login';
import NotFoundPage from './Components/NotFound/NotFoundPage';
import PrivateRoute from './Components/LoginPage/PrivateRoute/PrivateRoute';
import ManageAllTherapy from './Components/AdminPage/ManageAllTherapy/ManageAllTherapy';
import EditTherapy from './Components/AdminPage/ManageAllTherapy/EditTherapy';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h1>Email:{loggedInUser.email}</h1> */}
      <Router>
        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          {/* About Us Page */}
          <Route path="/aboutUs">
            <AboutUs />
          </Route>

          {/* Our Services Page */}
          <Route path="/ourServices">
            <OurServices />
          </Route>
          
          <PrivateRoute path="/therapies/therapyAppointment/:id">
            <MakeAppointment />
          </PrivateRoute>

          {/* Our Psychotherapists Page */}
          <Route path="/ourPsychotherapists">
            <PsychotherapistPage />
          </Route>

          {/* Your Dashboard Page - only authenticated users */}
          <PrivateRoute path="/dashboard/myAppointments">
            <MyAppointments />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview />
          </PrivateRoute>

          {/* Admin Page - only authenticated users */}
          <PrivateRoute path="/admin/allAppointments">
            <AllAppointment />
          </PrivateRoute>
          <PrivateRoute path="/admin/addTherapy">
            <AddTherapy />
          </PrivateRoute>
          <PrivateRoute path="/admin/manageTherapy">
            <ManageAllTherapy />
          </PrivateRoute>
          <PrivateRoute path="/admin/editTherapy/:id">
            <EditTherapy />
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>

          {/* Contact Us Page */}
          <Route path="/contactUs">
            <ContactUs />
          </Route>

          {/* Login Page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Route Not Found Page */}
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
