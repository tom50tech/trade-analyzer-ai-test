import "./globals.css";

export const metadata = {
  title: "Trading CSV Analyzer",
  description: "Prosty analizator transakcji z CSV"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
