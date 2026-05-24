import type { Metadata } from "next";
import "./globals.css";
import { barlowCondensed, barlow } from "./fonts";

export const metadata: Metadata = {
  title: "DIANISPORT — Uniformes Deportivos Personalizados · Macas, Ecuador",
  description:
    "Confección artesanal de uniformes deportivos personalizados en Macas. Fútbol, básquet, vóley, atletismo y corporativos. Bordado, sublimación y estampado. Maestro Artesano JNDA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${barlowCondensed.variable} ${barlow.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
