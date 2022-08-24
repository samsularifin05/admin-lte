interface children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  children?: Array<children>;
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
    path: "#",
    icon: "nav-icon fas fa-database",
    title: "Menu Level",
    children: [
      {
        path: "#",
        title: "Level 1",
      },
      {
        path: "#",
        title: "Level 2",
        icon : "nav-icon fas far fa-circle nav-icon",
        children: [
          {
            path: "#",
            title: "Sub Level 2",
          },
          {
            path: "#",
            title: "Sub Level 3",
          },
          {
            path: "#",
            title: "Sub Level 4",
          },
        ]
      },
      {
        path: "#",
        title: "Level 3",
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