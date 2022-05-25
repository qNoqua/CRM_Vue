import { createStore } from "vuex";
import { userModule } from "@/store/user";
import { historyModule } from "@/store/history"
import { categoriesModule } from "@/store/categories"
import { ratesModule } from "@/store/rates"

const store = createStore({
  modules: {
    userModule,
    historyModule,
    categoriesModule,
    ratesModule
  },
});

export default store;