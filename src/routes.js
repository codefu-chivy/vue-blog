import Posts from "./components/posts.vue"
import CreateBlog from "./components/blog.vue"
import SingleBlog from "./components/singleBlog.vue"

export default [
    {
        path: "/",
        component: Posts
    },
    {
        path: "/create",
        component: CreateBlog
    },
    {
        path: "/blog/:id",
        component: SingleBlog
    }
];