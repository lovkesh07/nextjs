import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


// 71C9CE     
function Footer() {
	return (
		<>
			<div className="bg-[#406882] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Company<span className="text-blue-600">logo</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Stocks
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Futures & Options
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							About
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Products
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Pricing
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Careers
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Contact
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Support Portals
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-slate-200 text-md pb-2 font-semibold hover:text-blue-300 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-[#1A374D]">
				<h1 className=" text-slate-200 font-semibold">
					© 2023-2024 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						CompanyName{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;