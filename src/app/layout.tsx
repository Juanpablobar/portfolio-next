import { Poppins, Montserrat } from "next/font/google";
import '@styles/index.scss'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: 'swap',
  variable: '--font-montserrat'
});

export const metadata = {
  title: "Juan Pablo barrios - Personal Portfolio",
  description: "Juan Pablo barrios - Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
