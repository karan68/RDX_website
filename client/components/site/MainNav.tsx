import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function MainNav() {
  const location = useLocation();
  
  const getActiveTab = () => {
    switch (location.pathname) {
      case "/": return "home";
      case "/gaming": return "wg";
      case "/creator": return "creator";
      case "/student": return "student";
      default: return "home";
    }
  };

  return (
    <div className="border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="text-xs text-muted-foreground">Microsoft › Windows 11 › Copilot+ PC</div>
        <div className="relative hidden w-60 items-center md:flex">
          <Search className="pointer-events-none absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search all Microsoft" />
        </div>
      </div>
      <div className="container mx-auto py-3">
        <Tabs value={getActiveTab()} className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto bg-transparent p-0">
            <Link to="/">
              <TabsTrigger value="home" className="data-[state=active]:bg-primary/10">HOME</TabsTrigger>
            </Link>
            <TabsTrigger value="deals" className="data-[state=active]:bg-primary/10">ALL DEALS</TabsTrigger>
            <Link to="/gaming">
              <TabsTrigger value="wg" className="data-[state=active]:bg-primary/10">Windows+Gaming</TabsTrigger>
            </Link>
            <Link to="/creator">
              <TabsTrigger value="creator" className="data-[state=active]:bg-primary/10">Windows + Creator</TabsTrigger>
            </Link>
            <Link to="/student">
              <TabsTrigger value="student" className="data-[state=active]:bg-primary/10">Windows + Student</TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="home" />
          <TabsContent value="deals" />
          <TabsContent value="wg" />
          <TabsContent value="creator" />
          <TabsContent value="student" />
        </Tabs>
      </div>
    </div>
  );
}
