export function isLogin(navigate) {
  localStorage.getItem("access-token") &&
    localStorage.getItem("name") &&
    localStorage.getItem("role") &&
    navigate("/");
}
export function isLoginCheck() {
  if (
    localStorage.getItem("access-token") &&
    localStorage.getItem("name") &&
    localStorage.getItem("role")
  ) {
    return true;
  }
}

export function isStudent() {
  if (localStorage.getItem("role") === "teacher") {
    localStorage.clear();
  }
}

export function isTeacher() {
  if (localStorage.getItem("role") === "student") {
    localStorage.clear();
  }
}

export function resetAll(obj) {
  console.log("reset is caling");
  const newObj = Object.keys(obj).reduce((accumulator, current) => {
    accumulator[current] = "";
    return accumulator;
  }, {});
  return newObj;
}

export function reset(obj) {
  const newObj = Object.keys(obj).reduce((accumulator, current) => {
    if (current !== "subjectName") {
      accumulator[current] = "";
    }
    return accumulator;
  }, {});
  return newObj;
}

export function resetGivExam(obj) {
  const newObj = Object.keys(obj).reduce((accumulator, current) => {
    accumulator[current] = "";
    return accumulator;
  }, {});
  return newObj;
}

// localStorage.getItem("access-token");

// const authAxios = axios.create({
//   base: apiUrl,
//   headers: { "access-token": accessToken },
// });

// export function encoded(navigate) {
//   const getRole = localStorage.getItem("role");
//   const role = btoa(getRole);
//   if (role === "student") {
//     navigate(-1);
//   }
// }

// export function decodes(navigate) {
//   const getRole = localStorage.getItem("role");
//   const role = btoa(getRole);
//   if (role === "student") {
//     navigate(-1);
//   }
// }
