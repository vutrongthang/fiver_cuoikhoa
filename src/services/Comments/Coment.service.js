import { https } from "../urlConfig";

export const commentService = {
  getCommentByIdJob: ({ maLoaiCongViec }) => {
    let uri = `/api/binh-luan/lay-binh-luan-theo-cong-viec/${maLoaiCongViec}`;
    return https.get(uri);
  },
  postComment: ({ dataPostComment }) => {
    let uri = "/api/binh-luan";
    return https.post(uri, dataPostComment);
  },
};
