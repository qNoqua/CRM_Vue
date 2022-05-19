import { createStore } from "vuex";
import { userModule } from "@/store/user";
import { historyModule } from "@/store/history"
import { categoriesModule } from "@/store/categories"
const store = createStore({
  modules: {
    userModule,
    historyModule,
    categoriesModule
  },
});

export default store;