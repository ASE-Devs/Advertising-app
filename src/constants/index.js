import { ChartBar, Home, Icon, icons, PlusIcon, Settings, User } from "lucide-react";
import { Profiler } from "react";

export default {
  NAVLINKS: [
    { name: "Overview", path: "/dashboard", icon: Home },

    { name: "Create Ad", path: "/dashboard/create-ad", icon: PlusIcon },

    { name: "Vendor Ads", path: "/dashboard/ads", icon:User },
    // Dummy and its not linked, can work on it well

    { name: "Setting", path: "/dashboard", icon: Settings },

    { name: "Analysis", path: "/dashboard", icon: ChartBar },
  ],
};
