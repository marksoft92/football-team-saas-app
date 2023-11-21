import { SafeUser } from "@/app/types";
import mainStyles from "@/app/assets/styles/mainPage.module.scss"
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className={`${mainStyles.jcsb} ${mainStyles.flex}`}>
      <h2>Football-app-next13/14</h2>
      <UserMenu currentUser={currentUser} />
    </div>
  );
};

export default Navbar;
