import "./globals.css";

export const metadata = {
  title: 'KIIT E-Cell | Imagine, Innovate, Implement',
  description: 'Official website of KIIT E-Cell - Fostering entrepreneurship and innovation',
  keywords: 'KIIT, E-Cell, Entrepreneurship, Innovation, Startup, Business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}