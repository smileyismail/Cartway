import CartButton from "../Cart/CartButton";
import { SiShopee } from "react-icons/si";

const MainHeader = (props) => {
  return (
    <header className="fixed w-screen top-0 flex justify-between items-center py-3 px-[3%] md:px-[10%] bg-secondary text-textWhiteDark">
      <h1 className="text-3xl font-bold flex gap-1">
        <SiShopee />
        Cartway
      </h1>

      <button className="border-none">
        <CartButton />
      </button>
    </header>
  );
};

export default MainHeader;
