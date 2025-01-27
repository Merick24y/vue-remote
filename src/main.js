import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Ensure Vuetify styles are imported

const vuetify = createVuetify(); // Create Vuetify instance

const app = createApp(App);
app.use(vuetify); // Register Vuetify globally
app.mount("#app");
