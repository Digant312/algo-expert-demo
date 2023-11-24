var axios = require("axios");

const getQuestionListLocal = async (params = {}) => {
  console.log;
  var config = {
    method: "get",
    url: "http://localhost:3000/questionNames",
    params,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getQuestionData = async (name) => {
  var data = JSON.stringify({
    name,
  });
  var config = {
    method: "post",
    url: "https://prod.api.algoexpert.io/api/problems/v1/algoexpert/coding-questions/get",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsImtpZCI6IjdjYmM2ZWRhNzk1ZGM1YzMxZjJmOTk2Yzg0ODRkZTRiMGIxOTgwMmVmOTYwOWE3YzJmNDFmM2E0OTVhYjZmN2MiLCJ0eXAiOiJKV1QifQ.eyJTZXNzaW9uSUQiOiJmNmMxNzgwYS04MjBhLTRlM2EtYjAwMC02ODAwY2Q2NWVlZDUiLCJNZXRhZGF0YSI6eyJwYXJ0aXRpb24iOiJtYWluIiwib2F1dGhfcHJvdmlkZXIiOiJnb29nbGUiLCJvYXV0aF91c2VyX2lkIjoiMTEwNjE1NjEwMzc0MDA5MjMyMzU5IiwiZW1haWwiOiJkcmFzaHRpcGF0ZWwxNjhAZ21haWwuY29tIiwibmFtZSI6IkRyYXNodGkgUGF0ZWwiLCJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pqbTc0RlF6bmMwSVJpbFBGTnpxcDJ0M0Znel8xTkVIRXhhX1lZPXM5Ni1jIiwicmVnaW9uIjoiSU4iLCJyb2xlcyI6InByZW1pdW12MSxzeXN0ZW1zZXhwZXJ0djEsZnJvbnRlbmRleHBlcnR2MSx1c2VyIn0sIkdlbmVyaWNNZXRhIjp7fSwiZXhwIjoxNjQ0MTI0ODA5LCJqdGkiOiI3OWYyZjk5ZC02OTVmLTQ5MTItYTYwNi0wZTY0ZTc2OTkwOWUiLCJpYXQiOjE2NDI5MTUyMDksImlzcyI6ImFsZ29leHBlcnQiLCJzdWIiOiJnb29nbGV8MjU4ZmEzM2MtYjQ0ZC00ZjMxLThlZmYtZmM4NDI2OTYzMjI0In0.9Zx3yjPMMQJ-9C3_eu4AuEh7WJwX5owogBtf0Mu187o",
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getQuestionData, getQuestionListLocal };
