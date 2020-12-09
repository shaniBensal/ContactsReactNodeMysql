import axios from 'axios';
const baseUrl = "http://localhost:5000/api/users";

const httpReq = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-type": "application/json"
    }
  });
function getAllContacts() {
    return httpReq.get(baseUrl);
}

export default {
    getAllContacts
}