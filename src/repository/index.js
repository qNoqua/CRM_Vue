const user = {
  name: "admin",
  balance: 100,
  date: '',
};

export async function signIn(email, password) {
  try {
    const response = await fetch("http://localhost:7007/auth/", {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, .",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}
export async function signUp() {
  try {
    const response = await fetch("http://localhost:7007/auth/", {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, .",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.emailSet.value,
        password: this.passwordSet.value,
        name: this.nameSet.value,
      }),
    });
    if (response.status === 201) {
      localStorage.setItem("isAuthorized", true);
      this.$router.push("/?message=login");
    }
  } catch (error) {
    console.error(error);
    
  }
}

// export async function logout() {
//   await console.log('logout')
//   return false
// }

export async function requestUser() {
  try {
    return user;
    // const response = await fetch("http://localhost:7007/user/", {
    //     method: "GET"
    // });
    // return await response.json()
  } catch (e) {
    return user;
  }
}

// addHistory() {
//    user.history.push(newHistory);
//    localStorage.setItem('user', JSON.Stringify(user))
// }
