import httpRequest from "../utils/httpRequest";

const getDetailFilmService = {
  get: (id) => {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    return httpRequest.get(url);
  },
};

export default getDetailFilmService;
