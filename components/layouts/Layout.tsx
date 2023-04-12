import { FC, PropsWithChildren } from "react";
import { Navbar } from "../molecules";
// import { Footer, Header } from "../ui";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      {/* <Header /> */}
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
