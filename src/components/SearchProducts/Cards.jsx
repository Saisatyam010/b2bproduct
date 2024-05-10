import React from "react";
import Slider from "react-slick";
import { HeartIcon, ShareIcon } from "../Common/Icons";
import Star from "../Singleproduct/Star";
import "./Cards.css";
const SearchProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Men's Hoodie & Sweat Shirt",
      Quality: "Shipping to be negotiated",
      price: "₹395",
      order: "23 orders",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      Rating: 1.5,
    },
    {
      id: 1,
      name: "Men's Hoodie & Sweat Shirt",
      Quality: "Shipping to be negotiated",
      price: "₹395",
      order: "23 orders",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 1,
      name: "Men's Hoodie & Sweat Shirt",
      Quality: "Shipping to be negotiated",
      price: "₹395",
      order: "23 orders",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      Rating: 1.5,
    },
  ];
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className=" container mx-auto gap-8">
        <div className="grid lg:grid-cols-2  gap-x-6 gap-y-10 2xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-lg max-w-sm w-full border-2 border-[#F0F0F0]"
            >
              <Slider {...sliderSettings}>
                <div className="bg-[#F0F0F0] p-3">
                  <img
                    src={product.imageSrc}
                    alt={`Product 1`}
                    loading="lazy"
                    className="w-full h-[208px] object-cover object-center rounded-md"
                  />
                </div>
                <div className="bg-[#F0F0F0] p-3">
                  <img
                    src={product.imageSrc}
                    alt={`Product 1`}
                    loading="lazy"
                    className="w-full h-[208px] object-cover object-center rounded-md"
                  />
                </div>
                <div className="bg-[#F0F0F0] p-3">
                  <img
                    src={product.imageSrc}
                    alt={`Product 1`}
                    loading="lazy"
                    className="w-full h-[208px] object-cover object-center rounded-md"
                  />
                </div>
                <div className="bg-[#F0F0F0] p-3">
                  <img
                    src={product.imageSrc}
                    alt={`Product 1`}
                    className="w-full h-[208px] object-cover object-center rounded-md"
                  />
                </div>
              </Slider>
              <span className="absolute top-5 right-5">
                <HeartIcon />
              </span>
              <div className="p-3">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-semibold">
                    {product.price}
                    <span className="text-xl">/</span>
                    <span className="text-xs text-[#535353]">piece</span>
                  </p>
                  <span className="cursor-pointer">
                    <ShareIcon />
                  </span>
                </div>
                <div className="flex gap-1 mt-1">
                  <div className=" h-5 w-5 rounded-full bg-[#7F172A] focus:border-black cursor-pointer focus:border-4"></div>
                  <div className=" h-5 w-5 rounded-full bg-[#E1AEB2]"></div>
                  <div className=" h-5 w-5 rounded-full bg-[#82669F]"></div>
                  <div className=" h-5 w-5 rounded-full bg-[#131313]"></div>
                  <div className=" h-5 w-5 rounded-full bg-[#2D6812]"></div>
                </div>
                <p className="mt-6 font-medium text-black">{product.order}</p>
                <div className="flex gap-2">
                  <Star starsCount={5} />
                  <span>(7 reviews)</span>
                </div>
                <p className="mt-1 font-medium">Ritika Winter-wear pvt ltd</p>
                <div className="flex mt-2 gap-3 pb-3">
                  <button className="w-1/2 font-semibold bg-white py-2 rounded-3xl text-primary border-2 hover:bg-primary hover:text-white transition-all ease-in duration-200 border-primary">
                    Chat now
                  </button>
                  <button className="w-1/2 font-semibold bg-primary py-2 rounded-3xl text-white border-2 hover: border-primary transition-all ease-in duration-200 hover:bg-white hover:text-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchProductCard;
