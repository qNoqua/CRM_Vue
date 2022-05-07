import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min.js'

const app = createApp(App).use(router).use(store).use(messagePlugin)
router.app = app
app.mount('#app')






































    // async requestItems() {
    //   const response = await fetch("http://localhost:7007/items");
    //   const data = await response.json();
    //   console.log(data);
    // },
    // async requestItemById(id) {
    //   try {
    //     const response = await fetch(`http://localhost:7007/items/${id}`);
    //     if(response.status >= 400) return
    //     console.log(response);
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    // async requestItemCreate() {
    //   const data = new FormData();
    //   data.append("name", "Maksim");
    //   const response = await fetch(`http://localhost:7007/items/`, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json, application/xml, text/plain, text/html, .",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: "Maxim",
    //       data: 28,
    //     }),
    //   });
    //   console.log(response);
    // },
    // async requestItemUpdate() {
    //   const data = new FormData();
    //   data.append("name", "Maksim");
    //   const response = await fetch(`http://localhost:7007/items/Allah`, {
    //     method: "PUT",
    //     headers: {
    //       Accept: "application/json, application/xml, text/plain, text/html, .",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: "name",
    //       data: 1488,
    //     }),
    //   });
    //   console.log(response);
    // },
    // async requestItemDelete(id) {
    //   const data = new FormData();
    //   data.append("name", "Maksim");
    //   const response = await fetch(`http://localhost:7007/items/${id}`, {
    //     method: "DELETE",
    //   });
    //   console.log(response);
    // },