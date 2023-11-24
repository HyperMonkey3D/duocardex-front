import home from "@/public/house-fill.svg";
import addClinic from "@/public/building-fill-add.svg";
import addOrder from "@/public/file-earmark-plus-fill.svg";
import clinics from "@/public/building-fill.svg";
import orders from "@/public/file-earmark-medical-fill.svg";
import person from "@/public/person-fill.svg";
import logout from "@/public/power.svg";

interface NavMenu {
  id: number;
  name: string;
  route?: string;
}

interface IconsMenu {
  id: number;
  icon: string;
  route: string;
}

export const menu: NavMenu[] = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Add Clinic",
    route: "/add-clinic",
  },
  {
    id: 3,
    name: "Add Order",
    route: "/add-order",
  },
  {
    id: 4,
    name: "Clinics",
    route: "/clinics",
  },
  {
    id: 5,
    name: "Orders",
    route: "/orders",
  },
];

export const profileMenu: NavMenu[] = [
  {
    id: 1,
    name: "Profile",
    route: "/profile",
  },
  {
    id: 2,
    name: "Sign Out",
  },
];

export const iconsCollapsedSideBar: IconsMenu[] = [
  {
    id: 1,
    icon: home,
    route: "/",
  },
  {
    id: 2,
    icon: addClinic,
    route: "/add-clinic",
  },
  {
    id: 3,
    icon: addOrder,
    route: "/add-order",
  },
  {
    id: 4,
    icon: clinics,
    route: "/clinics",
  },
  {
    id: 5,
    icon: orders,
    route: "/orders",
  },
];

export const iconsCollapsedProfile: IconsMenu[] = [
  {
    id: 1,
    icon: person,
    route: "/",
  },
  {
    id: 2,
    icon: logout,
    route: "/",
  },
];
