import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import 'materialize-css/dist/js/materialize.min.js'

import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDHnBlqSvxrx_ZehBLObRnUnvB89V9DGlU",
    authDomain: "crm-project-noqua.firebaseapp.com",
    projectId: "crm-project-noqua",
    storageBucket: "crm-project-noqua.appspot.com",
    messagingSenderId: "634657151325",
    appId: "1:634657151325:web:d4d5afa7c5e084dd7c30b4",
    measurementId: "G-WSLGDCBYM6"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
// const database = getDatabase(firebase);

let app 

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(store).use(router).use(messagePlugin).mount('#app')
    }
})