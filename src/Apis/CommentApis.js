import { commentService } from "../services/Comments/Coment.service";

export const commentApis = {
  getCommentByIdJob: async ({ maLoaiCongViec }) => {
    try {
      let CommentsJob = await commentService.getCommentByIdJob({
        maLoaiCongViec,
      });
      return CommentsJob.data.content;
    } catch (err) {
      console.log("err", err);
    }
  },
  postComment: async ({ dataPostComment }) => {
    try {
      await commentService.postComment({ dataPostComment });
    } catch (err) {
      console.log(err);
    }
  },
};
