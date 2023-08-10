import { https } from "../urlConfig";

export const jobService = {
  getDetailJob: ({ maLoaiCongViec }) => {
    let uri = `/api/cong-viec/lay-cong-viec-chi-tiet/${maLoaiCongViec}`;
    return https.get(uri);
  },
  getTypeDetailJob: ({ maLoaiCongViec }) => {
    let uri = `/api/cong-viec/lay-chi-tiet-loai-cong-viec/${maLoaiCongViec}`;
    return https.get(uri);
  },
  getDetailJobByIdType: ({ maChiTietLoai }) => {
    let uri = `/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`;
    return https.get(uri);
  },
  rentWork: ({ dataRentWork }) => {
    let uri = `/api/thue-cong-viec`;
    return https.post(uri, dataRentWork);
  },
  getDataRentedWork: () => {
    let uri = "/api/thue-cong-viec/lay-danh-sach-da-thue";
    return https.get(uri);
  },
  deleteWork: (id) => {
    let uri = `/api/thue-cong-viec/${id}`;
    return https.delete(uri);
  },
};
