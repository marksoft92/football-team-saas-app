"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import mainStyles from "@/app/assets/styles/mainPage.module.scss";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);
  console.log(isOpen);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={onRent}></div>
        <div
          onClick={toggleOpen}
          className={`${mainStyles.flex} ${mainStyles["flex-direc-col"]} ${mainStyles["align-item-end"]}`}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="Dashboard"
                  onClick={() => router.push("/dashboard/" + currentUser?.id)}
                />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                {
                  <>
                    <MenuItem label="Login" onClick={loginModal.onOpen} />
                    <MenuItem label="Sign up" onClick={registerModal.onOpen} />
                  </>
                }
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
