/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
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
