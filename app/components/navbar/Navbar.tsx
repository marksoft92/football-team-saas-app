import { SafeUser } from "@/app/types";

import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div>
      <UserMenu currentUser={currentUser} />
    </div>
  );
};

export default Navbar;
