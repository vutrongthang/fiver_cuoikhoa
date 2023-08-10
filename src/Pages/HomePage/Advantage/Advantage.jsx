import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Advantage() {
  return (
    <div className="py-5" style={{ backgroundColor: "rgb(241, 253, 247)" }}>
      <div className="container mt-10">
        <div className="grid grid-cols-2 px-3">
          <div className="px-16 text-lg col-12 col-lg-6 ">
            <h2 className="mb-4 text-3xl font-semibold">
              A whole world of freelance talent at your fingertips
            </h2>
            <ul className="list-group list-unstyled">
              <li className="border-0 mb-1">
                <span className="flex items-center px-2 py-2">
                  <AiOutlineCheckCircle size={30} />
                  <h4 className="ml-2 font-semibold text-lg ">
                    The best for every budget
                  </h4>
                </span>
                <p className=" text-slate-500 font-semibold mt-2">
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li className="border-0 mb-1">
                <span className="flex items-center px-2 py-2">
                  <AiOutlineCheckCircle size={30} />

                  <h4 className="ml-2 font-semibold text-lg">
                    Quality work done quickly
                  </h4>
                </span>
                <p className=" text-slate-500 font-semibold mt-2">
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li className="border-0 mb-1">
                <span className="flex items-center px-2 py-2">
                  <AiOutlineCheckCircle size={30} />

                  <h4 className="ml-2 font-semibold text-lg">
                    Protected payments, every time
                  </h4>
                </span>
                <p className=" text-slate-500 font-semibold mt-2">
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li className="border-0 mb-1">
                <span className="flex items-center px-2 py-2">
                  <AiOutlineCheckCircle size={30} />

                  <h4 className="ml-2 font-semibold text-lg">24/7 support</h4>
                </span>
                <p className=" text-slate-500 font-semibold mt-2">
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center px-2 py-2 col-12 col-lg-6">
            <img
              width="80%"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
