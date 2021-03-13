import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/direct",
    name: "Direct",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "direct" */ "../views/direct")
  },
  {
    path: "/explore",
    name: "Explore",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/explore")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/post',
          name: 'Post',
          component: () =>
      import(/* webpackChunkName: "post" */ "../views/profile/post")
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: '/igtv',
          name : 'IGTV',
          component: () =>
      import(/* webpackChunkName: "igtv" */ "../views/profile/igtv")
        },
        {
          path : '/save',
          name : 'Save',
          component: () =>
      import(/* webpackChunkName: "save" */ "../views/profile/save")
          
        },
        {
          path : '/tag',
          name : 'Tag',
          component : () =>
          import(/* webpackChunkName: "save" */ "../views/profile/tag")
        }
      ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
