import { requestUser, signIn, signUp } from "@/repository/index";
import router from "../../router";

export const actions = {
  async requestUser(context) {
    const user = await requestUser();
    context.commit("addUser", user);
  },
  async signIn(context, payload) {
    const isAuthorized = await signIn(payload.email, payload.password);
    if (isAuthorized === true) {
      context.commit("signIn", isAuthorized);
      localStorage.setItem('isAuthorized', true)
      router.push("/");
    }
  },
  async signUp(context, payload) {
    const isAuthorized = await signUp(
      payload.email,
      payload.password,
      payload.name
    );
    if (isAuthorized === true) {
      context.commit("signUp", isAuthorized);
      localStorage.setItem('isAuthorized', true)
      router.push("/");
    }
  },
  async logout(context) {
    context.commit("logout", false);
    localStorage.setItem('isAuthorized', false);
    localStorage.removeItem('user');
    router.push("/login?message=logout");
  },
}