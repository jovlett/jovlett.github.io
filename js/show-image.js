console.log("hi")
import EventBus from "./event-bus.js";
const listeners = [];
export default {

    inserted(el, binding, vnode, prevVnode) {
        const src = el.getAttribute("src");
        el.hqSrc = src.replace("downscaled", "_raw");

        const showImageEvent = () => {
            console.log("showing image")
            EventBus.$emit("showImage", el.hqSrc);
        };

        const trigger = "click";
        el.addEventListener(trigger, showImageEvent);

        listeners.push({
            el,
            trigger,
            event: showImageEvent,
        });
    },

    unbind(el, binding, vnode, prevVnode) {
        const listener = listeners.find((e) => e.el === el);
        el.removeEventListener(listener.trigger, listener.event);
    },
}