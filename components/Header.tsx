import React from "react";

function Header() {
  return (
    <div className="">
      <div className="flex flex-row gap-2">
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg">
          Swift
        </div>
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg">
          React
        </div>
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg">
          Full Stack
        </div>
      </div>

      <h1 className="relative text-5xl font-bold my-5 py-1">
        <span className="bg-gradient-to-r from-black to-[#001E80] bg-clip-text text-transparent">
          Khánh Nguyễn
        </span>
      </h1>


    </div>
  );
}

export default Header;

{/* <h1 className=" font-medium text-xl text-slate-700x">About Me 🧑‍💻</h1>
<hr className="my-2 w-[44%]" />
<div className="">
  <p className="mt-2 text-sm text-slate-600">
    Studied Computer Science and Business at UMKC
  </p>
</div> */}