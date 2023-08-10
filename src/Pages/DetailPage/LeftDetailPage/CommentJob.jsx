import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { commentApis } from "../../../Apis/CommentApis";
import { StarFilled, LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export default function CommentJob() {
  let { maLoaiCongViec } = useParams();
  let [comment, setComment] = useState("");
  let [dataContent, setDataContent] = useState([]); //{avatar,ngayBinhLuan,noiDung,saoBinhLuan,tenNguoiBinhLuan}
  let userInfo = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    (async () => {
      try {
        let newContentComment = await commentApis.getCommentByIdJob({
          maLoaiCongViec,
        });
        setDataContent(newContentComment);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);
  let renderContentComment = () => {
    return dataContent.map((item, index) => {
      return (
        <main key={index} className="border-b border-gray-400 p-6">
          <div className="flex space-x-4">
            <img
              style={{ height: 50, width: 50, borderRadius: "100%" }}
              src={item.avatar ? item.avatar : "https://i.pravatar.cc/300"}
              alt=""
            />

            <div>
              <div className="flex items-center space-x-2 font-medium ">
                <span>{item.tenNguoiBinhLuan}</span>
                <span className="flex items-center space-x-2 text-yellow-400 ">
                  {item.saoBinhLuan}
                  <StarFilled />
                </span>
              </div>
              <p className="text-gray-400">
                <i className="fa fa-flag-usa"></i> Juvetus{" "}
              </p>
              <div className="mt-7">{item.noiDung}</div>
              <div className="space-x-2 flex items-center font-medium text-gray-500 mt-4 cursor-pointer">
                <span>Helpful?</span>
                <LikeOutlined />
                <span>Yes</span>
                <DislikeOutlined />
                <span>No</span>
              </div>
            </div>
          </div>
        </main>
      );
    });
  };
  let submitComment = () => {
    if (comment) {
      let dateNow = moment().toDate();
      let dataPostComment = {
        id: maLoaiCongViec,
        maNguoiBinhLuan: userInfo.user.id,
        maCongViec: maLoaiCongViec,
        ngayBinhLuan: moment(dateNow).format("DD/MM/YYYY"),
        noiDung: comment,
        saoBinhLuan: 5,
      };
      (async () => {
        try {
          await commentApis.postComment({ dataPostComment });
          let newContentComment = await commentApis.getCommentByIdJob({
            maLoaiCongViec,
          });
          setDataContent(newContentComment);
        } catch (err) {
          console.log("err", err);
        }
      })();
    } else {
      alert("bạn chưa có nội dung hình luận");
    }
  };
  return (
    <main>
      {renderContentComment()}
      <div>
        <p className="font-bold text-2xl py-4">Leave some comments</p>
        <textarea
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          className="w-full border-black border rounded-lg h-32 p-3"
          type="text"
        />
      </div>
      <button
        onClick={submitComment}
        className="px-3 py-2 rounded-lg bg-[#1DBF73] text-white"
      >
        Comment
      </button>
    </main>
  );
}
