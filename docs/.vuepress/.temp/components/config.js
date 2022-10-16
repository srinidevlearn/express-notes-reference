import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import StackBlitz from "C:/ng-app/express-notes/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import BackToTop from "C:/ng-app/express-notes/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("StackBlitz", StackBlitz);
    
  },
  setup: () => {
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});