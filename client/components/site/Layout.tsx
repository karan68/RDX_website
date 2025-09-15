import { ReactNode } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <MainNav />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Copilot+ PC. All rights reserved.
      </footer>
    </div>
  );
}
