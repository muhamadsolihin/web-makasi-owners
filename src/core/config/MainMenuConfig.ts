const MainMenuConfig = [
  {
    heading: "Dashboards",
    pages: [
      {
        heading: "Beranda",
        icon: require("@/assets/icons/aside/cashier.svg"),
        route: "/dashboard",
      },
      {
        heading: "Outlet",
        icon: require("@/assets/icons/aside/outlet.svg"),
        route: "/outlets",
        // sub: [
        //   {
        //     heading: "List Outlet",
        //     route: "/outlet/list"
        //   },
        //   {
        //     heading: "Add Outlet",
        //     route: "/outlet/add"
        //   },
        // ]
      },
      {
        heading: "Pengguna",
        icon: require("@/assets/icons/aside/produk.svg"),
        route: "/users",
        // sub: [
        //   {
        //     heading: "Product List",
        //     route: "/product/list"
        //   },
        //   {
        //     heading: "Add Product",
        //     route: "/product/add"
        //   },
        //   {
        //     heading: "Add Variant",
        //     route: "/product/variant"
        //   },
        //   {
        //     heading: "Upload Product",
        //     route: "/product/upload"
        //   },
        // ]
      },

      {
        heading: "Voucher",
        icon: require("@/assets/icons/aside/Voucher.svg"),
        route: "/voucher",
      },

      {
        heading: "Outlet",
        icon: require('@/assets/icons/aside/outlet.svg'),
        route: "/outlets"
      },
      {
        sectionTitle: 'Produk',
        icon: require('@/assets/icons/aside/produk.svg'),
        route: '/product',
        sub: [
          {
            heading: 'Kelola Produk',
            route: '/product/list',
          },
        ],
      },

      // {
      //   heading: "Customer",
      //   icon: require('@/assets/icons/aside/customer.svg'),
      //   route: "/customer/list",
      //   // sub: [
      //   //   {
      //   //     heading: "List Customer",
      //   //     route: "/customer/list"
      //   //   },
      //   //   {
      //   //     heading: "Add Customer",
      //   //     route: "/customer/add"
      //   //   },
      //   // ]
      // },
      // {
      //   heading: "Employee",
      //   icon: require('@/assets/icons/aside/employee.svg'),
      //   route: "/employee/list",
      //   // sub: [
      //   //   {
      //   //     heading: "List Employee",
      //   //     route: "/employee/list"
      //   //   },
      //   //   {
      //   //     heading: "Add Employee",
      //   //     route: "/employee/add"
      //   //   },
      //   // ]
      // },
      // {
      //   heading: "Transaction",
      //   icon: require('@/assets/icons/aside/transaction.svg'),
      //   route: "/transaction/list",
      //   // sub: [
      //   //   {
      //   //     heading: "Transaction List",
      //   //     route: "/transaction/list"
      //   //   },
      //   //   {
      //   //     heading: "Detail Transaction",
      //   //     route: "/transaction/detail"
      //   //   },
      //   // ]
      // },
      // // {
      // //   sectionTitle: "Report",
      // //   icon: require('@/assets/icons/aside/recap-kas.svg'),
      // //   route: "/report",
      // //   sub: [
      // //     {
      // //       heading: "Selling",
      // //       route: "/report/selling"
      // //     },
      // //     {
      // //       heading: "Product",
      // //       route: "/report/product"
      // //     },
      // //     {
      // //       heading: "Customer",
      // //       route: "/report/customer"
      // //     },
      // //     {
      // //       heading: "Outlet",
      // //       route: "/report/outlet"
      // //     },
      // //     {
      // //       heading: "Employee",
      // //       route: "/report/employee"
      // //     },
      // //   ]
      // // },

      // {
      //   sectionTitle: "Settings",
      //   icon: require('@/assets/icons/aside/setting.svg'),
      //   route: "/setting",
      //   sub: [
      //     {
      //       heading: "Banner",
      //       route: "/banner/list"
      //     },
      //     {
      //       heading: "Category",
      //       route: "/category/list"
      //     },
      //     {
      //       heading: "Type Order",
      //       route: "/type-order/list"
      //     },
      //     {
      //       heading: "Voucher",
      //       route: "/voucher/list"
      //     },
      //     {
      //       heading: "Debit",
      //       route: "/debit/list"
      //     },
      //     {
      //       heading: "E-Wallet",
      //       route: "/e-wallet/list"
      //     },
      //   ]
      // },
      // {
      //   heading: "Help",
      //   icon: require('@/assets/icons/aside/help.svg'),
      //   route: "/help"
      // },
      // {
      //   heading: "Logout",
      //   icon: require('@/assets/icons/aside/logout.svg'),
      //   route: "/logout"
      // },

      // {
      //   heading: "Start",
      //   route: "/dashboards/start"
      // },
      // {
      //   heading: "Extended",
      //   route: "/dashboards/extended",
      //   pro: true
      // },
      // {
      //   heading: "Light",
      //   route: "/dashboards/light"
      // },
      // {
      //   heading: "Compact",
      //   route: "/dashboards/compact",
      //   pro: true
      // }
    ],
  },

  // {
  //   heading: "Apps",
  //   pages: [
  //     {
  //       heading: "Private Chat",
  //       route: "/private-chat",
  //       pro: true
  //     },
  //     {
  //       heading: "Group Chat",
  //       route: "/group-chat",
  //       pro: true
  //     },
  //     {
  //       heading: "Drawer Chat",
  //       route: "/drawer-chat",
  //       pro: true
  //     },
  //     {
  //       heading: "Shop 1",
  //       route: "/shop1",
  //       pro: true
  //     },
  //     {
  //       heading: "Shop 2",
  //       route: "/shop2",
  //       pro: true
  //     },
  //     {
  //       heading: "Shop Product",
  //       route: "/product",
  //       pro: true
  //     }
  //   ]
  // },

  // {
  //   heading: "General",
  //   pages: [
  //     {
  //       heading: "FAQ",
  //       route: "/faq"
  //     },
  //     {
  //       heading: "Pricing",
  //       route: "/pricing"
  //     },
  //     {
  //       heading: "Invoice",
  //       route: "/invoice"
  //     },
  //     {
  //       heading: "Login",
  //       route: "/login",
  //       pro: true
  //     },
  //     {
  //       heading: "Wizard",
  //       route: "/wizard",
  //       pro: true
  //     },
  //     {
  //       heading: "Error",
  //       route: "/error"
  //     }
  //   ]
  // },

  // {
  //   heading: "Profile",
  //   pages: [
  //     {
  //       heading: "Overview",
  //       route: "/overview"
  //     },
  //     {
  //       heading: "Account",
  //       route: "/account",
  //       pro: true
  //     },
  //     {
  //       heading: "Settings",
  //       route: "/settings",
  //       pro: true
  //     }
  //   ]
  // },

  // {
  //   heading: "Resources",
  //   pages: [
  //     {
  //       heading: "Documentation",
  //       route: "/documentation/doc-overview"
  //     },
  //     {
  //       heading: "Layout builder",
  //       route: "/builder",
  //       pro: true
  //     },
  //     {
  //       heading: "Changelog",
  //       route: "/documentation/changelog"
  //     }
  //   ]
  // }
];

export default MainMenuConfig;
