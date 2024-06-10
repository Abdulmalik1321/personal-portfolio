import ReactDOM from "react-dom/client";
import { Router } from "./Router.tsx";
import "./index.css";
import { BackgroundGradientAnimation } from "./shadcn/ui/background-gradient-animation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <div className="fixed top-0 left-0 -z-50  backdrop-blur-3xl	">
      <div className="absolute inset-0 h-full w-full dark:bg-blackRgba  bg-whiteRgba z-50  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      <BackgroundGradientAnimation />
    </div>

    <Router />
  </>
);
