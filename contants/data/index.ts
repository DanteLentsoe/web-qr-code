import { NavItem } from "../types";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "QR Code",
    children: [
      {
        label: "Scan QR Code",
        subLabel: "Scan QR Code using the Web Application",
        href: "/barcode",
      },
      //   {
      //     label: "New & Noteworthy",
      //     subLabel: "Up-and-coming Designers",
      //     href: "#",
      //   },
    ],
  },

  {
    label: "About",
    href: "/learnmore",
  },
  {
    label: "Contact Developer",
    href: "/contact",
  },
];
