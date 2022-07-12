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

    // case "notes":
    //   if (!values) {
    //     return "Notes is Required";
    //   } else {
    //     return "";
    //   }
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
}
