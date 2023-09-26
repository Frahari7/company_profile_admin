import React from "react"; // cara yang benar untuk mengimpor React
import Image from "next/image";
import Background_1 from "../../public/image/background_1.png";
import Logo from "../../public/image/group 2.png";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-cover relative">
      <Image src={Background_1} className="absolute top-0 w-full h-full object-cover" />
      <div className="absolute top-0 w-full h-full bg-[#EE8300] opacity-20">
        
      </div>
      <div className="sm:w-[400px] w-[300px] px-10 py-16 bg-white rounded-lg shadow-lg z-10 opacity-80"> {/* menambahkan properti opacity */}
        
        {/* <h1 className="text-3xl font-bold text-center text-gray"> {/* menambahkan kelas text-gray */}
         
          {/* <span className="text-black">CAHAYA </span>
          <span className="text-[#EE8300]">TERANG</span>
        </h1>  */}
        <Image src={Logo}/>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username-input" className="text-sm font-medium text-gray-700 font-bold"></label>
            <input type="text" id="username-input" name="username-input" className="p-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-[#EE8300] text-gray" placeholder="USERNAME" required /> {/* menambahkan kelas text-gray */}
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="password-input" className="text-sm font-medium text-gray-700 font-bold"></label>
            <input type="password" id="password-input" name="password-input" className="p-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-[#EE8300] text-gray" placeholder="PASSWORD" required /> {/* menambahkan kelas text-gray */}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember-input" name="remember-input" className="w-4 h-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#EE8300]" />
              <label htmlFor="remember-input" className="mr-11 ml-2 text-sm text-gray font-bold">REMEMBER ME</label> {/* menambahkan kelas text-gray */}
            </div>
            <a href="#" className="text-sm text-gray hover:underline font-bold">FORGOT PASSWORD?</a> {/* menambahkan kelas text-gray */}
          </div>
         
          <button type="submit" className="w-full p-3 text-white bg-[#EE8300] rounded-md hover:bg-[#FF9900] focus:outline-none focus:ring-2 focus:ring-[#CC6600] font-bold mt-20 "> {/* mengganti properti margin-y dengan margin-top dan margin-bottom */}
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
