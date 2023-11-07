import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
