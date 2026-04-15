import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <div style={{ paddingTop: "70px" }}>
          {children}
        </div>

      </body>
    </html>
  );
}