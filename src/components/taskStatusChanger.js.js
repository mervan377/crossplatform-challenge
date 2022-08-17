import axios from "axios";

export const completeTask = (completeTaskID) => {
  var data = "";
  var config = {
    method: "get",
    url: `http://localhost:5000/api/task/complete/${completeTaskID}`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDEsImdpdmVuTmFtZSI6Ik1hcnkgR2xlbm4iLCJkZXBhcnRtZW50IjoxLCJpYXQiOjE2MjI3MDgzMDEsImV4cCI6MTcwOTEwODMwMX0.XA4vCrnlf_NIp_0s9uuGc295z6iy0xseLYk60Xjpiow",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const rejectTask = (rejectTaskID) => {
  var data = "";
  var config2 = {
    method: "get",
    url: `http://localhost:5000/api/task/reject/${rejectTaskID}`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDEsImdpdmVuTmFtZSI6Ik1hcnkgR2xlbm4iLCJkZXBhcnRtZW50IjoxLCJpYXQiOjE2MjI3MDgzMDEsImV4cCI6MTcwOTEwODMwMX0.XA4vCrnlf_NIp_0s9uuGc295z6iy0xseLYk60Xjpiow",
    },
    data: data,
  };
  axios(config2)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
