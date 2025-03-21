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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="adverts/:id" element={<SingleAd />} />
          
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="about" element={<About/>}/>
        

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<VendorAds/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
