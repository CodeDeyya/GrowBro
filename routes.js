import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import { BsController } from "react-icons/bs";
import { FaCalendarWeek } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa";
import { FaWater } from "react-icons/fa";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/controller",
    name: "Controller",
    rtlName: "ملف تعريفي للمستخدم",
    icon: BsController,

    layout: "/admin",
  },

  {
    path: "/notebook",
    name: "Note Book",
    rtlName: "ملف تعريفي للمستخدم",
    icon: FaPagelines,

    layout: "/admin",
  },
  {
    path: "/waterchange",
    name: "Drain/Fill",
    rtlName: "ملف تعريفي للمستخدم",
    icon: FaWater,

    layout: "/admin",
  },
  {
    path: "/datalogger",
    name: "Data Logger",
    rtlName: "ملف تعريفي للمستخدم",
    icon: FaCalendarWeek,

    layout: "/admin",
  },
];

export default dashboardRoutes;
