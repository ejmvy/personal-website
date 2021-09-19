import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";
import "./styles/my-styles.scss";

import "aos/dist/aos.css";

const app = createApp(App);
import AOS from "aos";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
app.use(AOS.init());

app.use(store).mount("#app");
