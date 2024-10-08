import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
const inter = Montserrat({ subsets: ["latin"] });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from './_Conponents/Layout'

export const metadata = {
  title: "Farheen",
  description: "Your Frontend Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth bg-webColor`}>
       <Layout>

               {children}
       </Layout>
       
      </body>
    </html>
  );
}
