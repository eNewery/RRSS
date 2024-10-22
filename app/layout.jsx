import "./globals.css";
export const metadata = {
  title: "To Do App",
  description: "To Do App | Developed by Ulises Rodriguez.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
