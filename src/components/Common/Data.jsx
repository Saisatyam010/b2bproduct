import { FaStore } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdAddShoppingCart, MdOutlineInventory2 } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import Inventroyimg from "../../assets/images/inventorypro.png";
import {
  AllCategory,
  CardIcon,
  EaseIcon,
  SearchResultIcon,
  SellerSidebarHelp,
  SellerSidebarTransaction,
  TickIcon,
} from "./Icons";

export const HeaderLink1 = [
  {
    text: "All Category",
    icon: <AllCategory />,
    link: "",
  },
  {
    text: "New Collections",
    icon: null,
    link: "",
  },
  {
    text: "Sale",
    icon: null,
    link: "",
  },
  {
    text: "Popular",
    icon: null,
    link: "",
  },
];

export const HeaderLink2 = [
  {
    text: "Buyer Central",
    link: "",
  },
  {
    text: "Help Center",
    link: "",
  },
  {
    text: "Become a Supplier",
    link: "",
  },
];

export const CategorySliderData = [
  {
    imgSrc: "/images/category1.png",
    title: "Women",
  },
  {
    imgSrc: "/images/category2.png",
    title: "Men",
  },
  {
    imgSrc: "/images/category3.png",
    title: "Kids",
  },
  {
    imgSrc: "/images/category4.png",
    title: "Shoes",
  },
  {
    imgSrc: "/images/category5.png",
    title: "Jewelery",
  },
  {
    imgSrc: "/images/category6.png",
    title: "Beauty",
  },
  {
    imgSrc: "/images/category7.png",
    title: "Decore",
  },
  {
    imgSrc: "/images/category8.png",
    title: "Home",
  },
];

export const ScrollEffectLinks = [
  {
    text: "Search for matches",
    icon: <IoSearchSharp />,
    link: "search",
  },
  {
    text: "Identify the right one",
    icon: <TickIcon />,
    link: "identify",
  },
  {
    text: "Pay with confidence",
    icon: <CardIcon />,
    link: "pay",
  },
  {
    text: "IFulfill with transparency",
    icon: <SearchResultIcon />,
    link: "transparency",
  },
  {
    text: "Manage with ease",
    icon: <EaseIcon />,
    link: "ease",
  },
];

export const ScrollEffectImages = [
  {
    imgSrc: "./images/scroll1.png",
    id: "search",
  },
  {
    imgSrc: "./images/scroll2.png",
    id: "identify",
  },
  {
    imgSrc: "./images/scroll3.png",
    id: "pay",
  },
  {
    imgSrc: "./images/scroll4.png",
    id: "transparency",
  },
  {
    imgSrc: "./images/scroll5.png",
    id: "ease",
  },
];

export const RegionSliderData = [
  {
    imgsrc: "/images/punjab.png",
    title: "Punjab",
  },
  {
    imgsrc: "/images/uttrakhand.png",
    title: "Uttrakhand",
  },
  {
    imgsrc: "/images/haryana.png",
    title: "Haryana",
  },
  {
    imgsrc: "/images/delhi.png",
    title: "Delhi",
  },
  {
    imgsrc: "/images/kerala.png",
    title: "Kerela",
  },
  {
    imgsrc: "/images/westbengal.png",
    title: "West Bengal",
  },
  {
    imgsrc: "/images/sikkim.png",
    title: "Siikim",
  },
];

export const ProductSliderData = [
  {
    imgSrc: "/images/product1.png",
  },
  {
    imgSrc: "/images/product2.png",
  },
  {
    imgSrc: "/images/product3.png",
  },
  {
    imgSrc: "/images/product4.png",
  },
  {
    imgSrc: "/images/product5.png",
  },
  {
    imgSrc: "/images/product6.png",
  },
];

export const KeyAttributesData = [
  {
    box1: "Material",
    box2: "Warm",
  },
  {
    box1: "Gender",
    box2: "Men",
  },
  {
    box1: "Brand Name",
    box2: "OEM",
  },
  {
    box1: "Item No.",
    box2: "A486-WS66",
  },
];

export const TermConditionData = [
  {
    content:
      "Retunable : It should be return within 1 days from date of recived",
  },
  {
    content:
      "Exchange : It should be return within 1 days from date of recived",
  },
  {
    content: "Exchange : within 1 days from date of recived",
  },
  {
    content:
      "Secure payments : It should be return within 1 days from date of recived",
  },
];

export const SimiliarProductsliderData = [
  {
    imgSrc: "/images/similiar1.png",
    productName: "Sweatshirt Warm",
    price: "$566",
    piece: "(500 pieces)",
  },
  {
    imgSrc: "/images/similiar2.png",
    productName: "Summer Shirt",
    price: "$566",
    piece: "(500 pieces)",
  },
  {
    imgSrc: "/images/similiar3.png",
    productName: "Sweatshirt Warm",
    price: "$566",
    piece: "(500 pieces)",
  },
  {
    imgSrc: "/images/similiar4.png",
    productName: "Sweatshirt Warm",
    price: "$566",
    piece: "(500 pieces)",
  },
];

export const exploredata = [
  {
    quantity: "200M+",
    category: "products",
  },
  {
    quantity: "200M+",
    category: "suppliers",
  },
  {
    quantity: "200M+",
    category: "product categories",
  },
  {
    quantity: "200M+",
    category: "countries and regions",
  },
];
export const leadingCardData = [
  {
    image: "images/leadingb2b1.png",
    content: "Discover global products and suppliers for your business needs.",
    start: 9,
    end: 38,
  },
  {
    image: "images/leadingb2b2.png",
    content: "Assure quality with verified suppliers & secure orders.",
    start: 41,
    end: 55,
  },
  {
    image: "images/leadingb2b3.png",
    content: "Unlock exclusive discounts, and extra support for growth.",
    start: 7,
    end: 27,
  },
];

export const RatingsTabs = [
  {
    title: "All",
    shortName: "all",
  },
  {
    title: "With photos /Videos",
    shortName: "withmedia",
  },
  {
    title: "Best Review",
    shortName: "best",
  },
  {
    title: "Worst Review",
    shortName: "worst",
  },
];
export const RatingsReviewData = [
  {
    name: "Aditya",
    date: "01/22/2023",
    rating: 4,
    review: "The product is good",
  },
  {
    name: "Sonali",
    date: "12/05/2023",
    rating: 3,
    review: "Average Product",
  },
  {
    name: "Nitin",
    date: "03/27/2023",
    rating: 1,
    review: "The product isBad",
  },
  {
    name: "Abhay",
    date: "02/08/2023",
    rating: 5,
    review: "The product is Awesome",
  },
  {
    name: "Ritik",
    date: "09/16/2023",
    rating: 1,
    review: "The product is Very bad",
  },
  {
    name: "Ritik",
    date: "09/16/2023",
    rating: 1.5,
    review: "The product is Very bad",
  },
];

export const SellerSidebar = [
  {
    routeName: "Home",
    link: "/seller",
    icon: <RiHome2Line size={26} />,
  },
  {
    routeName: "Add Product",
    link: "/seller/selectcategory",
    icon: <MdAddShoppingCart size={26} />,
  },
  {
    routeName: "My Store",
    link: "/seller/mystore",
    icon: <FaStore size={26} />,
  },
  {
    routeName: "Inventory",
    link: "/seller/inventory",
    icon: <MdOutlineInventory2 size={26} />,
  },
  {
    routeName: "Transaction",
    link: "/seller/transaction",
    icon: <SellerSidebarTransaction />,
  },
  {
    routeName: "Help Center",
    link: "/seller/help",
    icon: <SellerSidebarHelp />,
  },
];

export const SellerCategoryData = [
  {
    name: "Crafting",
  },
  {
    name: "Fabric",
  },
  {
    name: "Fashion & Beauty",
  },
  {
    name: "Health & Personal Care",
  },
  {
    name: "Home Decore",
  },
  {
    name: "Makeup",
  },
  {
    name: "Clothing",
  },
  {
    name: "Fashion & Beauty",
  },
  {
    name: "Footwear",
  },
  {
    name: "Grocery",
  },
  {
    name: "Electrical",
  },
  {
    name: "Clothing",
  },
  {
    name: "Fashion & Beauty",
  },
  {
    name: "Footwear",
  },
  {
    name: "Grocery",
  },
  {
    name: "Electrical",
  },
  {
    name: "Clothing",
  },
  {
    name: "Fashion & Beauty",
  },
  {
    name: "Footwear",
  },
  {
    name: "Grocery",
  },
  {
    name: "Electrical",
  },
  {
    name: "Clothing",
  },
  {
    name: "Fashion & Beauty",
  },
  {
    name: "Footwear",
  },
  {
    name: "Grocery",
  },
  {
    name: "Electrical",
  },
];

export const SellerSubcategoryData = [
  {
    name: "Luggage, Bags & cases",
  },
  {
    name: "Packing & Printing",
  },
  {
    name: "Beauty",
  },
  {
    name: "Jewelry, Eyewear & watches",
  },
  {
    name: "Shoes & Accessories",
  },
  {
    name: "Apparel & Accessories",
  },
  {
    name: "Wallets & Accessories",
  },
];

export const SellerProductData = [
  {
    name: "Glass Packaging",
  },
  {
    name: "Paper Packaging",
  },
  {
    name: "Plastic Packaging",
  },
  {
    name: "Packaging & Printing Service",
  },
  {
    name: "Metal Packaging ",
  },
  {
    name: "Packaging Raw Materials",
  },
  {
    name: "Logistic Packaging ",
  },
  {
    name: "Pharmaceutical Packaging ",
  },
  {
    name: "Textile Packaging ",
  },
  {
    name: "Packagibg Auxiliary Materials",
  },
  {
    name: "Wooden & Bamboo Packing ",
  },
  {
    name: "Packagibg Auxiliary Materials",
  },
  {
    name: "Wooden & Bamboo Packing ",
  },
  {
    name: "Packagibg Auxiliary Materials",
  },
  {
    name: "Wooden & Bamboo Packing ",
  },
  {
    name: "Packagibg Auxiliary Materials",
  },
  {
    name: "Wooden & Bamboo Packing ",
  },
];

export const SellerSizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const SellerInventoryTableHead = [
  {
    heading: "Status",
  },
  {
    heading: "Image",
  },
  {
    heading: "SKU",
  },
  {
    heading: "Product Name",
  },
  {
    heading: "Date Created",
  },
  {
    heading: "Stock",
  },
  {
    heading: "Price & Range cost",
  },
  {
    heading: "Save all",
  },
];

export const SellerInventoryBodyData = [
  {
    status: "Active",
    img: Inventroyimg,
    SKU: "SONALI_HOODIE_WEAR",
    productName:
      "Men’s best collection for winters , Winter Hoodie with vast colors and sizes",
    dateCreated: "01/05/2024",
    time: "12:43",
    stock: 2367,
  },
  {
    status: "Active",
    img: Inventroyimg,
    SKU: "SONALI_HOODIE_WEAR",
    productName:
      "Men’s best collection for winters , Winter Hoodie with vast colors and sizes",
    dateCreated: "01/05/2024",
    time: "12:43",
    stock: 2367,
  },
  {
    status: "Active",
    img: Inventroyimg,
    SKU: "SONALI_HOODIE_WEAR",
    productName:
      "Men’s best collection for winters , Winter Hoodie with vast colors and sizes",
    dateCreated: "01/05/2024",
    time: "12:43",
    stock: 2367,
  },
  {
    status: "Active",
    img: Inventroyimg,
    SKU: "SONALI_HOODIE_WEAR",
    productName:
      "Men’s best collection for winters , Winter Hoodie with vast colors and sizes",
    dateCreated: "01/05/2024",
    time: "12:43",
    stock: 2367,
  },
  {
    status: "Inactive",
    img: Inventroyimg,
    SKU: "SONALI_HOODIE_WEAR",
    productName:
      "Men’s best collection for winters , Winter Hoodie with vast colors and sizes",
    dateCreated: "01/05/2024",
    time: "12:43",
    stock: 2367,
  },
  {
    status: "Inactive",
    img: Inventroyimg,
    SKU: "SONALI_HOODIE_WEAR",
    productName:
      "Men’s best collection for winters , Winter Hoodie with vast colors and sizes",
    dateCreated: "01/05/2024",
    time: "12:43",
    stock: 2367,
  },
  {
    status: "Inactive",
    img: Inventroyimg,
    SKU: "SONALI_HOODIE_WEAR",
    productName:
      "Men’s best collection for winters , Winter Hoodie with vast colors and sizes",
    dateCreated: "01/05/2024",
    time: "12:43",
    stock: 2367,
  },
];

export const CategoryModalMainCategory = [
  "Home Decore",
  "Fashion & Beauty",
  "Health & personal care",
  "Fashion & Beauty",
  "Fashion & Beauty",
];

export const CategoryModalSubCategory = [
  {
    mainCategory: "Luggage, Bags & cases",
    subCategory: [
      "Best of Beauty",
      "Backpacks",
      "Luggage & Travel Bags ",
      "Women’s Bags ",
      "Men’s Bags",
      "Bussiness Bags ",
      "Cases Wallets & Holders ",
      "Lifestyle Bags ",
      "Men’s Bags ",
      "Sports Bags & Cases ",
      "Lifestyle Bags ",
      "Lifestyle Bags ",
      "Sports Bags & Cases ",
      "Men’s Bags",
    ],
  },
  {
    mainCategory: "Packing & printing",
    subCategory: [
      "Glass Packaging ",
      "Paper Packaging ",
      "Packaging & printing Service ",
      "Plastic Packaging ",
      "Metal Packaging  ",
      "Packaging Raw Materials ",
      "Logistic Packaging ",
      "Pharmaceutical Packaging ",
      "Textile Packaging ",
      "Wooden & Bamboo Packing ",
      "Printing Materials",
    ],
  },
  {
    mainCategory: "Beauty",
    subCategory: [
      "Care & tools(facial) ",
      "Nail Supplies ",
      "Hair extensions & wigs ",
      "Makeup & tools ",
      "Body art ",
      "Beauty Equipment ",
      "Perfume & fragnance ",
      "Mini size & gift sets ",
      "Eyelash Beauty & tools ",
      "Aesthetic medicine  ",
      "Fragnance  ",
      "Nail Supplies ",
      "Makeup & tools ",
    ],
  },
  {
    mainCategory: "Shoes & Accessories",
    subCategory: [
      "Men’s Shoe ",
      "Shoe part & Accessories ",
      "Women’s Shoes ",
      "Shoe Care & Services ",
      "Outdoor Shoes ",
      "Functional Shoes",
    ],
  },
  {
    mainCategory: "Logistic Packaging ",
    subCategory: [
      "Mailing Bags ",
      "Protective & cushioning ",
      "Drums, Pails & Barrels ",
      "Packing Ropes ",
      "Pallets ",
      "Strapping ",
      "Crates ",
      "FIBC Bags ",
    ],
  },
  {
    mainCategory: "Logistic Packaging ",
    subCategory: [
      "Jewelry ",
      "Eyewear ",
      "Jewelry Accessories ",
      "Watches ",
      "Hair Accessories ",
      "Eyewear Accessories ",
    ],
  },
];

export const Categoryfeatures = [
  {
    featureName: "Shop",
    items: [
      {
        name: "Just Arrived",
      },
      {
        name: "Natural Beauty",
      },
      {
        name: "Best Sellers",
      },
      {
        name: "Best of Beauty",
      },
      {
        name: "Just Arrived",
      },
      {
        name: "Best of Beauty",
      },
      {
        name: "Just Arrived",
      },
    ],
  },
  {
    featureName: "Explore",
    items: [
      {
        name: "Hot Now",
      },
      {
        name: "Trending",
      },
      {
        name: "Scouted",
      },
      {
        name: "Just Arrived",
      },
    ],
  },
];
