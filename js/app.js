import HomePage from "./pages/home.js";
import ProjectPage from "./pages/project.js";
import GalleryPage from "./pages/gallery.js";
import ContactPage from "./pages/contact.js";

const BASE_STORAGE = "https://storage.googleapis.com/www.joathrent.com/jovan-resources/";
const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    }, {
        path: "/projects",
        name: "Projects",
        component: GalleryPage,
    }, {
        path: "",
        name: "​",
    }, {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
    },
];

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
});

let app = new Vue({
    router,
    el: "#app",
    data: {
        isPlaying: true,
    },
    methods: {
        play() {
            this.$refs.video.play()
            this.isPlaying = true;
        },
        stop() {
            this.$refs.video.pause()
            this.isPlaying = false;
        }
    },
    watch: {
        $route(to, from) {
            if (to.name === "Home") {
                this.play();
            } else {
                this.stop();
            }
        }
    },
    mounted() {
        if (this.$route.name === "Home") {
            this.play();
        } else {
            this.stop();
        }
    }
});
