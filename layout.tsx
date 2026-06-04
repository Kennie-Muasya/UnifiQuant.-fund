import "@/styles/globals.css";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "UniFi Quantum Fund",
  description:
    "Institutional Quantitative Research & AI Investment Infrastructure"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
