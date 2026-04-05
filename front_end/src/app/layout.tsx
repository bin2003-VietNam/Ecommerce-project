import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen w-full bg-gray-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}