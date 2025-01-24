import { Calendar, Car, Heart, SquareGanttChart, Home } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Autos",
    href: "/dashboard",
  },
  /* {
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves",
  }, */
  {
    icon: Heart,
    label: "Favoritos",
    href: "/loved-cars",
  },
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/dashboard/admin/reserves-admin",
  },
];
