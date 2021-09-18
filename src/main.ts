import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";
import "./styles/my-styles.scss";

createApp(App).use(store).mount("#app");
