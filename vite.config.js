import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith("v-"), // Allow Vuetify components
  },
});
