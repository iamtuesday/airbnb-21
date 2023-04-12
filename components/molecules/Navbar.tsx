// interface NavbarProps {
//     currentUser?: User | null
// }

import { Logo } from "../atoms";
import { Container } from "../globals";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <Container>
          <div className="Navbar__inner">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      {/* <Categories /> */}
    </div>
  );
};
