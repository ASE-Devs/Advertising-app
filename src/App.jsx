import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Landing from "./pages/user/Landing";
import Adverts from "./pages/user/Adverts";
import SingleAd from "./pages/user/SingleAd";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import CreateAd from "./pages/dashboard/CreateAd";
import VendorAds from "./pages/dashboard/VendorAds";
import About from "./pages/auth/About";
import EditAdPage from "./pages/dashboard/EditAdPage";
import RecycleBin from "./pages/dashboard/RecycleBin";
import VendorProfile from "./pages/dashboard/VendorProfile";
import Analysis from "./pages/dashboard/Analysis";
import { Toaster } from "react-hot-toast";
import ContactUs from "./pages/auth/ContactUs";


function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="adverts/:id" element={<SingleAd />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<ContactUs/>}/>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<VendorAds />} />
          <Route path="edit-ad" element={<EditAdPage />} />
          <Route path="recycle-bin" element={<RecycleBin />} />
          <Route path="profile" element={<VendorProfile />} />
          <Route path="analysis" element={<Analysis />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
