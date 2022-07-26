interface children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: any,
  navheader?: Boolean,
  children?: Array<children>;
}
const menu : Array<Menu> = [
  {
    path: "/dashboard",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Dashboard",
  },
  {
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "Data Master",
    children: [
      {
        path: "/category",
        title: "Category",
      },
      {
        path: "/category",
        title: "Menu 2",
      },
    ]
  },
  {
    path: "/",
    icon: "nav-icon fas fa-arrow-right-from-bracket",
    title: "Logout",
  },
];

export default menu;