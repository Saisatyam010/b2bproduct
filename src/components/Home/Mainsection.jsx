import React from "react";
import Header from "./Header";
import SecondHeader from "./SecondHeader";

const Mainsection = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-center bg-cover relative py-2 h-[100vh]"
      style={{ backgroundImage: "url(/images/new_bg.png)" }}
    >
      <div className="container mx-auto w-full">
        <Header />
        <SecondHeader />
        <div className="mt-[50px] md:mt-[150px] max-w-[755px] w-full py-4">
          <h1 className=" md:text-5xl text-2xl font-bold text-white md:!leading-[60px]">
            The leading B2B ecommerce platform for global trade
          </h1>

          <p className="text-white mt-8 md:text-xl text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            voluptas? Quas vero saepe mollitia quam provident dicta, impedit,
            vel nemo sunt ratione magnam. Aspernatur, magni accusamus culpa ab
            eligendi molestiae minima error corporis officia quis assumenda
            natus. Tempore sapiente
          </p>
          <button className=" mt-10 max-w-[350px] py-3 rounded-3xl bg-secondary text-black w-full hover:bg-white border-secondary border transition-all ease-in duration-200">
            Become a Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
