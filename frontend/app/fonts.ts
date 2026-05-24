import { Barlow_Condensed, Barlow } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  style: ["normal"],
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  display: "swap",
});

export const barlow = Barlow({
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});
