const signupFields = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter Name",
    label: "Name",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Enter Email",
    label: "Email",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    autoComplete: "on",
    label: "Password",
  },
  {
    id: 4,
    name: "role",
    type: "radio",
    label: "teacher",
  },
  {
    id: 5,
    name: "role",
    type: "radio",
    label: "student",
  },
];
export default signupFields;
