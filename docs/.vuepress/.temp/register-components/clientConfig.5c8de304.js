import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("HomeCard", defineAsyncComponent(() => import("C:/ng-app/express-notes/docs/.vuepress/components/HomeCard.vue"))),
      app.component("MongoPlayground", defineAsyncComponent(() => import("C:/ng-app/express-notes/docs/.vuepress/components/MongoPlayground.vue")))
  },
}
