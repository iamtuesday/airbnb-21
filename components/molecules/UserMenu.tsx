"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Avatar } from "../atoms";

// import useLoginModal from "@/app/hooks/useLoginModal";
// import useRegisterModal from "@/app/hooks/useRegisterModal";
// import useRentModal from "@/app/hooks/useRentModal";
// import { SafeUser } from "@/app/types";

// import MenuItem from "./MenuItem";
// import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: null;
}

export const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  // const loginModal = useLoginModal();
  // const registerModal = useRegisterModal();
  // const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, []);

  // const onRent = useCallback(() => {
  //   if (!currentUser) {
  //     return loginModal.onOpen();
  //   }

  //   rentModal.onOpen();
  // }, [loginModal, rentModal, currentUser]);

  return (
    <div className="UserMenu">
      <div className="UserMenu__wrapper">
        <div
          // onClick={onRent}
          className="UserMenu__rentButton"
        >
          Airbnb your home
        </div>
        <div
          // onClick={toggleOpen}
          className="UserMenu__menuButton"
        >
          <AiOutlineMenu />
          <div className="UserMenu__avatar">
            {/* <Avatar src={currentUser?.image} /> */}
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="UserMenu__menu">
          <div className="UserMenu__menuWrapper">
            {currentUser ? (
              <>
                {/* <MenuItem 
                  label="My trips" 
                  onClick={() => router.push('/trips')}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="My reservations" 
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => router.push('/properties')}
                />
                <MenuItem 
                  label="Airbnb your home" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                /> */}
              </>
            ) : (
              <>
                {/* <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                /> */}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
