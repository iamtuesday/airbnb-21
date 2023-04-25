import { FC, PropsWithChildren } from "react";
import {  Navbar } from "../molecules";
import { LoginModal } from "../molecules/LoginModal";
import { RegisterModal } from "../molecules/RegisterModal";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      {/* <Header /> */}
      <Navbar />
      <LoginModal />
      <RegisterModal />
      {children}

      {/* <Footer /> */}
    </div>
  );
};
