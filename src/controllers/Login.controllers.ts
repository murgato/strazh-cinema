export const logIn = (login: any) => {
  if (login.email !== "" && login.password !== "") {
    if (login.email === "Admin" && login.password === "123") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
