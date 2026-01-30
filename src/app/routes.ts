import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/app/layout";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { Services } from "@/app/pages/Services";
import { Blog } from "@/app/pages/Blog";
import { BlogPost } from "@/app/pages/BlogPost";
import { Portfolio } from "@/app/pages/Portfolio";
import { Contact } from "@/app/pages/Contact";
import { NotFound } from "@/app/pages/NotFound";
import { WebsiteDevelopment } from "@/app/pages/services/WebsiteDevelopment";
import { MobileAppDevelopment } from "@/app/pages/services/MobileAppDevelopment";
import { SoftwareSolutions } from "@/app/pages/services/SoftwareSolutions";
import { AMC } from "@/app/pages/services/AMC";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/website-development", Component: WebsiteDevelopment },
      { path: "services/mobile-app-development", Component: MobileAppDevelopment },
      { path: "services/software-solutions", Component: SoftwareSolutions },
      { path: "services/amc", Component: AMC },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "portfolio", Component: Portfolio },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);