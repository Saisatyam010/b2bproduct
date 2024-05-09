import { FaStore } from "react-icons/fa6";
import { MdAddShoppingCart, MdOutlineInventory2 } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { SellerSidebarHelp, SellerSidebarTransaction } from "../components/Common/Icons";

export const SellerSidebar = [
    {
      routeName: "Home",
      link: "/seller",
      pgName:"home",
      icon: <RiHome2Line size={26} />,
    },
    {
      routeName: "Add Product",
      link: "/seller/product/selectcategory",
      pgName:"product",
      icon: <MdAddShoppingCart size={26} />,
    },
    {
      routeName: "My Store",
      link: "/seller/store/mystore",
      pgName:"store",
      icon: <FaStore size={26} />,
    },
    {
      routeName: "Inventory",
      link: "/seller/inventory",
      pgName:"inventory",
      icon: <MdOutlineInventory2 size={26} />,
    },
    {
      routeName: "Transaction",
      link: "/seller/transaction",
      pgName:"transaction",
      icon: <SellerSidebarTransaction />,
    },
    {
      routeName: "Help Center",
      link: "/seller/help",
      pgName:"help",
      icon: <SellerSidebarHelp />,
    },
  ];