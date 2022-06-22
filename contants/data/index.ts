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
      {
        label: "Generate QR Codes",
        subLabel: "Generate QR Codes for personalized usage",
        href: "/generatecodes",
      },
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
