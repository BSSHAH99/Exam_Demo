import { regEmail } from "../Utils/utils";

// import { resetPassword } from "../Redux/action/resetPassword";
// import { newPasswor } from "../Redux/action/newPassword";

export default function validation(name, values, userData) {
  // console.log(name, values, userData);
  let chekPassword1 = userData?.Password;
  let chekConfirmPassword1 = userData?.ConfirmPassword;
  // let chekPassword1;
  // let chekConfirmPassword1;
  // if (resetPassword.Password) {
  //   chekPassword1 = resetPassword.Password;
  // } else if (newPasswor.Password) {
  //   chekPassword1 = newPasswor.Password;
  // }

  // if (resetPassword.ConfirmPassword) {
  //   chekConfirmPassword1 = resetPassword.Password;
  // } else if (newPasswor.ConfirmPassword) {
  //   chekConfirmPassword1 = newPasswor.Password;
  // }
  // if (values === "") {
  //   formErrors[name] = `${name} is required`;
  // } else {
  //   formErrors[name] = "";
  // }

  switch (name) {
    case "email":
      if (!values) {
        return "Email Is Required";
      } else if (!regEmail.test(values)) {
        return "It,s Should Be Valid Email";
      } else {
        return "";
      }

    case "Password":
      if (!values) {
        return "Password Is Required";
      } else if (values.length < 8) {
        return "Password More Than 8 Characte";
      } else if (chekConfirmPassword1) {
        if (chekConfirmPassword1 !== values) {
          return "Password And Confirm Password Does Not Match";
        } else {
          return "";
        }
      } else {
        return "";
      }

    case "password":
      if (!values) {
        return "Password Is Required";
      } else if (values.length < 8) {
        return "Password More Than 8 Characte";
      } else if (chekConfirmPassword1) {
        if (chekConfirmPassword1 !== values) {
          return "Password And Confirm Password Does Not Match";
        }
        //  else {
        //   return "";
        // }
      } else {
        return "";
      }

    case "ConfirmPassword":
      if (!values) {
        console.log("values :>> ", values);
        return "ConfirmPassword is Required";
      }
      // else if (values.length < 8) {
      //   return "password more than 8 characte";
      // }
      else if (chekPassword1 !== values) {
        return "Password and Confirm Password does not match";
      } else {
        return "";
      }

    case "oldPassword":
      if (!values) {
        return "Old Password is Required";
      } else if (values.length < 8) {
        return "Old Password more than 8 characte";
      } else {
        return "";
      }

    case "name":
      if (!values) {
        return "Name is Required";
      } else if (values.length < 4) {
        return "Name more than 4 characte";
      } else {
        return "";
      }

    case "role":
      if (!values) {
        return "role is Required";
      } else {
        return "";
      }

    case "subjectName":
      if (!values) {
        return "Subject Name is Required";
      } else {
        return "";
      }

    case "question":
      if (!values) {
        return "Question is Required";
      } else {
        return "";
      }
    case "answer":
      if (!values) {
        return "Answer is Required";
      } else {
        return "";
      }

    case "notes":
      if (!values) {
        return "Notes is Required";
      } else {
        return "";
      }
    // case "option1":
    //   if (!values) {
    //     return "Option1 is Required";
    //   } else {
    //     return "";
    //   }
    // case "option2":
    //   if (!values) {
    //     return "Option1 is Required";
    //   } else {
    //     return "";
    //   }
    // case "option3":
    //   if (!values) {
    //     return "Option1 is Required";
    //   } else {
    //     return "";
    //   }
    // case "option4":
    //   if (!values) {
    //     return "Option1 is Required";
    //   } else {
    //     return "";
    //   }

    default:
      return "";
  }

  // if (name === "email") {
  //   const email = value;
  //   if (email === "") {
  //     errors.email = "email is required";
  //   } else if (!email.match(regEmail)) {
  //     errors.email = "Please enter a valid email address";
  //   } else {
  //     errors.email = "";
  //   }
  // }

  // if (name === "password") {
  //   const Password = value;
  //   if (!Password) {
  //     errors.Password = "password is required";
  //   } else if (Password.length < 6) {
  //     errors.Password = "password must be longer than 6 characters";
  //   } else if (Password.length >= 20) {
  //     errors.Password = "password must shorter than 20 characters";
  //   } else {
  //     errors.Password = "";
  //   }
  // }
}

// import React, { useState } from "react";

// const useValidated = (
//   name,
//   value,
//   formErrors,
//   setFormErrors,
//   formValues
//   ) => {

//     // const [option2222, setOption2222] = useState("lll")

//   // const vadd =()=>{

//   let errors = formErrors;
//   let va = "";
//   if (name === "Password") {
//     va = value;
//   }
//   // console.log("name", name, value);

//   if (name === "name") {
//     const name = value;
//     if (!name) {
//       formErrors.name = "name is required";
//     } else if (name.length < 3) {
//       formErrors.name = " name must be more than 3 characters";
//     } else {
//       formErrors.name = "";
//     }
//   }
//   const emailReg =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
//   if (name === "email") {
//     const email = value;
//     if (email === "") {
//       formErrors.email = "email is required";
//     } else if (!email.match(emailReg)) {
//       formErrors.email = "Please enter a valid email address";
//     } else {
//       formErrors.email = "";
//     }
//   }

//   if (name === "password") {
//     const password = value;
//     if (!password) {
//       formErrors.password = "password is required";
//     } else if (password.length < 6) {
//       formErrors.password = "password must be longer than 6 characters";
//     } else if (password.length >= 20) {
//       formErrors.password = "password must shorter than 20 characters";
//     } else {
//       formErrors.password = "";
//     }
//   }
//   if (name === "role") {
//     const role = value;
//     if (!role) {
//       formErrors.role = "role is required";
//     } else {
//       formErrors.role = "";
//     }
//   }

//   if (name === "Password") {
//     const Password = value;
//     if (!Password) {
//       formErrors.Password = "password is required";
//     } else if (Password.length < 6) {
//       formErrors.Password = "password must be longer than 6 characters";
//     } else if (Password.length >= 20) {
//       formErrors.Password = "password must shorter than 20 characters";
//     } else {
//       formErrors.Password = "";
//     }
//   }

//   if (name === "ConfirmPassword") {
//     const ConfirmPassword = value;
//     if (!ConfirmPassword) {
//       formErrors.ConfirmPassword = "ConfirmPassword is required";
//     } else {
//       formErrors.ConfirmPassword = "";
//     }
//   }

//   if (value === "") {
//     formErrors[name] = `${name} is required`;
//   } else {
//     formErrors[name] = "";
//   }

// // }

//   return ( setFormErrors(formErrors));
// };
// export default useValidated;

// export const valid = (formValues1, formErrors, setFormErrors) => {
//   Object.keys(formValues1).map((key, i) => {
//     if (formValues1[key] === "") {
//       formErrors[key] = `${key}  is required`;
//       setFormErrors({ ...formErrors, [key]: formErrors[key] });
//     }
//   });
// };
