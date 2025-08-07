'use client'; 

import NavbarD from "@/components/ui/navbar/NavbarD";
import Footer from "@/components/ui/Footer/Footer";
import PageTransition from "@/components/shared/PageTransition";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: 'KIIT E-Cell - Entrepreneurship Cell',
//   description: 'Official website of KIIT E-Cell - Fostering entrepreneurship and innovation',
//   keywords: 'KIIT, E-Cell, Entrepreneurship, Innovation, Startup, Business',
// };

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const shouldShowFooter = pathname !== "/contact";

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <NavbarD />
      <PageTransition>{children}</PageTransition>
      {shouldShowFooter && <Footer />}
    </div>
  );
}
