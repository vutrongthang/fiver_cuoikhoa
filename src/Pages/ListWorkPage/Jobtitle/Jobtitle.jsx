import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./Jobtitle.scss";
export default function Jobtitle({ nameJob }) {
  return (
    <div className="container mx-auto">
      <section className="banner-job-title">
        <div className="banner_container">
          <div className="content">
            <h1>{nameJob}</h1>
            <p>Designs to make you stand out.</p>
            <button className="p-3 border border-white rounded text-white hover:text-black hover:bg-white duration-200">
              <span>How Fiverr Works</span>
            </button>
          </div>
        </div>
      </section>
      <section className="popular-job-title">
        <div className="container mt-lg-5 mt-sm-3 mb-lg-5 mb-sm-3">
          <h1>Most popular in Writing & Translation</h1>
          <div className="content">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                alt="..."
              />
              <span>Minimalist Logo Design</span>
              <ArrowRightOutlined />
            </div>

            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                alt="..."
              />
              <span>Architecture & Interior Design</span>
              <ArrowRightOutlined />
            </div>

            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
                alt="..."
              />
              <span>Image Editing</span>
              <ArrowRightOutlined />
            </div>

            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png"
                alt="..."
              />
              <span>NFT Art</span>
              <ArrowRightOutlined />
            </div>

            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
                alt="..."
              />
              <span>T-Shirts & Merchandise</span>
              <ArrowRightOutlined />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
