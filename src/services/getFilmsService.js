import httpRequest from "../utils/httpRequest";

const getFilmsService = {
  get: (params) => {
    const url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP10";
    return httpRequest.get(url, { params });
  },
};

export default getFilmsService;
