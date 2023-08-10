import { jobService } from "../services/Jobs/job.service";

export const getDetailJobApi = async ({ maLoaiCongViec }) => {
  try {
    const detailJob = await jobService.getDetailJob({ maLoaiCongViec });
    return detailJob.data.content[0];
  } catch (err) {
    console.log("err", err);
  }
};
