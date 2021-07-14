import {createApp} from "vue";

import router from "./route/route";
import App from "./App.vue";
import store from "./store"

createApp(App).use(router).use(store).mount('#app')