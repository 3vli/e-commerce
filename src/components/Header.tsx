import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="flex justify-between items-center text-black py-6 px-8
md:px-32
"
    >
      <a href="/">
        <h1 className=" font-extrabold text-3xl hover:scale-105 transition-all ">
          Elgawen
        </h1>
      </a>
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        <li className="p-3 hover:bg-[#C1DCDC] hover:text-neutral-700 text-neutral-600 rounded-md transition-all cursor-pointer">
          صفحة الرئيسية
        </li>
        <li className="p-3 hover:bg-[#C1DCDC] hover:text-neutral-700 text-neutral-600 rounded-md transition-all cursor-pointer">
          المنتجات
        </li>
        <li className="p-3 hover:bg-[#C1DCDC] hover:text-neutral-700 text-neutral-600 rounded-md transition-all cursor-pointer">
          تواصل بنا
        </li>
      </ul>
      <div className="hidden md:flex gap-3  text-3xl">
        <BsPersonFill className="cursor-pointer hover:scale-110 " />
      </div>
      <BiMenu
        onClick={() => setMenuOpen(!menuOpen)}
        className=" xl:hidden text-4xl font-extrabold cursor-pointer hover:scale-110 "
      />
      <div
        className={`absolute z-50 xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <li className="list-none w-full text-center p-4 hover:bg-[#C1DCDC] transition-all cursor-pointer">
          صفحة الرئيسية
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-[#C1DCDC] transition-all cursor-pointer">
          {" "}
          المنتجات
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-[#C1DCDC] transition-all cursor-pointer">
          تواصل بنا
        </li>
      </div>
    </header>
  );
};
