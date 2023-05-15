import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Header = lazy(() => import("./components/root/fragments/header/Header"));
const Home = lazy(() => import("./components/root/home/Home"));
const SignUp = lazy(() => import("./components/root/users/signUp/SignUp"));
const RegisterBusiness = lazy(() => import("./components/root/users/signUp/RegisterBusiness"));
const Login = lazy(() => import("./components/root/users/login/Login"));
const UserHome = lazy(() => import("./components/root/users/UsersHome"));
const Hobbie = lazy(() => import("./components/root/users/business/Offer/Hobbie"));
const AccountUser = lazy(() => import("./components/root/users/user/accountUser/AccountUser"));
const AccountBusiness = lazy(() => import("./components/root/users/business/AccountBusiness/AccountBusiness"));
const TestForm = lazy(() => import("./components/root/users/user/test/TestForm"));
const CreateOffer = lazy(() => import("./components/root/users/business/Offer/CreateOffer"));
const MyHobbies = lazy(() => import("./components/root/users/user/MyHobbies"));
const ProtectedRoutesGuest = lazy(() => import("./components/protectedRoutes/ProtectedRoutesGuest"));
const ProtectedRoutesUser = lazy(() => import("./components/protectedRoutes/ProtectedRoutesUser"));
const ProtectedRoutesBusiness = lazy(() => import("./components/protectedRoutes/ProtectedRoutesBusiness"));
const EditUserProfile = lazy(() => import("./components/root/users/user/accountUser/EditUserProfile"));
const EditBusinessProfile = lazy(() => import("./components/root/users/business/AccountBusiness/EditBusinessProfile"));
const UpdateOffer = lazy(() => import("./components/root/users/business/Offer/UpdateOffer"));
const PasswordChange = lazy(() => import("./components/root/users/login/forgottenPassword/PasswordChange"));
const SetUpNewPassword = lazy(() => import("./components/root/users/login/forgottenPassword/SetUpNewPassword"));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<span>Loading...</span>}>
        <Header />
          <Routes>
            <Route element={<ProtectedRoutesGuest />}>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/register-business" element={<RegisterBusiness />} />
              <Route path="/login" element={<Login />} />
              <Route path="/change-password" element={<PasswordChange />} />
              <Route path="/password/:id" element={<SetUpNewPassword />} />
            </Route>
            <Route element={<ProtectedRoutesUser />}>
              <Route path="/edit-profile" element={<EditUserProfile />} />
              <Route path="/user-home" element={<UserHome />} />
              <Route path="/account-user" element={<AccountUser />} />
              <Route path="/test" element={<TestForm />} />
              <Route path="/my-hobbies" element={<MyHobbies />} />
              <Route path="/hobbie/:id" element={<Hobbie />} />
            </Route>

            <Route element={<ProtectedRoutesBusiness />}>
              <Route
                path="/edit-business-profile"
                element={<EditBusinessProfile />}
              />
              <Route path="/edit-offer" element={<UpdateOffer />} />
              <Route path="/business-home" element={<UserHome />} />
              <Route path="/account-business" element={<AccountBusiness />} />
              <Route path="/create-offer" element={<CreateOffer />} />
              <Route path="/account-business" element={<AccountBusiness />} />
              <Route path="/offer/:id" element={<Hobbie />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
