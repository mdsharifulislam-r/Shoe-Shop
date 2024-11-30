import Sidebar from "@/components/Sidebar/Sidebar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shop | Shoe Shop",
  description: "Shoe Shop By Backbuilder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-24 flex md:flex-row flex-col gap-5 max-w-[1400px] mx-auto">
        <div >
            <Sidebar/>
        </div>
        <div>
            {children}
        </div>
    </div>
  );
}
