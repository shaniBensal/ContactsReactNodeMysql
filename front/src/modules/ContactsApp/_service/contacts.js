import axios from "axios";
const baseUrl = "http://localhost:5000/api/users";

const httpReq = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json, text/plain, */*",
  },
});
function getAllContacts() {
  return httpReq.get(baseUrl);
}

function deleteSpesificContact(contactId) {
  console.log(contactId);
  httpReq.delete(baseUrl + "/" + contactId);
}

export default {
  getAllContacts,
  deleteSpesificContact,
};
