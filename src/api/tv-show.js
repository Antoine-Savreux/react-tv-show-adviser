import axios from "axios";
import { BASE_URL, API_KEY } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
      return response.data.results;
    } catch (error) {
      alert("Une erreur est survenue... Oups");
    }
  }

  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      alert("Une erreur est survenue... Oups");
    }
  }

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}search/tv${API_KEY}&query=${title}`
      );
      if (response.data.results.length > 0) {
        return response.data.results;
      } else {
        alert("aucun résultat trouvé pour cette recherche...");
      }
    } catch (error) {
      alert("Une erreur est survenue... Oups");
    }
  }
}
