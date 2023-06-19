import Footer from "@components/footer/Footer";
import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Danone Hackathon Mexico",
  description:
    "Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
