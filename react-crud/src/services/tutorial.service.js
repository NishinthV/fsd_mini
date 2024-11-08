import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/clubs");
  }
}

export default new TutorialDataService();