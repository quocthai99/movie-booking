import httpRequest from "../utils/httpRequest";

const getFilmsService = {
  get: (params) => {
    const url = "QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10";
    return httpRequest.get(url, { params });
  },
};

export default getFilmsService;
