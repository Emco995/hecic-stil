import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hećić Stil Enterijeri | Kuhinje i Namještaj po Mjeri Gradačac",
  description:
    "Vrhunska izrada i profesionalna montaža modernih kuhinja po mjeri, ugradbenih ormara i trpezarijskih stolova. Besplatna 3D vizualizacija i precizna izmjera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-[#0d0e12] text-gray-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}