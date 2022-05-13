import { createStore } from "vuex";
import { userModule } from "@/store/user";
const store = createStore({
  modules: {
    userModule,
  },
});

export default store;