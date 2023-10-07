import HomePage from "./pages/home.js";
import ProjectPage from "./pages/project.js";
import GalleryPage from "./pages/gallery.js";
import ContactPage from "./pages/contact.js";

import EventBus from "./event-bus.js";
const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    }, {
        path: "/gallery",
        name: "Gallery",
        component: GalleryPage,
    }, {
        path: "/projects",
        name: "Projects",
        component: ProjectPage,
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

const app = new Vue({
    router,
    el: "#app",
    data: {
        isPlaying: true,
        showImageModal: false,
        imageModalSrc: "",
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

        EventBus.$on("showImage", (src) => {
            this.showImageModal = true;
            this.imageModalSrc = src;
        });
    }
});
