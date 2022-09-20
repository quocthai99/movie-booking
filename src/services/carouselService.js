import httpRequest from "../utils/httpRequest";

const carouselService = {
  get: (params) => {
    const url = "QuanLyPhim/LayDanhSachBanner";
    return httpRequest.get(url, { params });
  },
};

export default carouselService;
