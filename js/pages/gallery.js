import showImage from "../show-image.js";
console.log(showImage)
const images = [
    "./assets/images/downscaled/6shoot ratchet transparent.png",
    "./assets/images/downscaled/axis xy cad.png",
    "./assets/images/downscaled/belted extrude.png",
    "./assets/images/downscaled/IMG_20210418_133511571_HDR.jpg",
    "./assets/images/downscaled/cnc 1.png",
    "./assets/images/downscaled/IMG_20220301_154342570_HDR.jpg",
    "./assets/images/downscaled/com chamber.png",
    "./assets/images/downscaled/IMG_20210226_113951899.jpg",
    "./assets/images/downscaled/comp good branden toolpath.png",
    "./assets/images/downscaled/compressor cnc 1.png",
    "./assets/images/downscaled/IMG_20211228_235612245_HDR.jpg",
    "./assets/images/downscaled/extruder diagram.png",
    "./assets/images/downscaled/guillo.png",
    "./assets/images/downscaled/hardstop table.png",
    "./assets/images/downscaled/IMG_20210617_191352729_HDR.jpg",
    "./assets/images/downscaled/IMG_20210807_090114449_HDR.jpg",
    "./assets/images/downscaled/bottle.png",
    "./assets/images/downscaled/IMG_20210826_062223636_HDR.jpg",
    "./assets/images/downscaled/IMG_20211104_190758707.jpg",
    "./assets/images/downscaled/IMG_20211115_160236366_HDR.jpg",
    "./assets/images/downscaled/IMG_20220216_145735136_HDR.jpg",
    "./assets/images/downscaled/IMG_20220225_172124550_HDR.jpg",
    "./assets/images/downscaled/IMG_20220311_125938524_HDR.jpg",
    "./assets/images/downscaled/IMG_20220402_134839733.jpg",
    "./assets/images/downscaled/IMG_20220402_163633158.jpg",
    "./assets/images/downscaled/IMG_20220511_154347526.jpg",
    "./assets/images/downscaled/IMG_20220513_133157208.jpg",
    "./assets/images/downscaled/IMG_20220612_102120785.jpg",
    "./assets/images/downscaled/IMG_20220612_114654100_HDR.jpg",
    "./assets/images/downscaled/IMG_20220612_114713204_HDR.jpg",
    "./assets/images/downscaled/IMG_20220620_114534040.jpg",
    "./assets/images/downscaled/IMG_20220623_112521239.jpg",
    "./assets/images/downscaled/IMG_20220625_122734020_HDR.jpg",
    "./assets/images/downscaled/IMG_20220626_111240392.jpg",
    "./assets/images/downscaled/IMG_20220626_111444257.jpg",
    "./assets/images/downscaled/IMG_20220627_230248.jpg",
    "./assets/images/downscaled/IMG_20220627_230254.jpg",
    "./assets/images/downscaled/IMG_20220701_180241543_HDR.jpg",
    "./assets/images/downscaled/IMG_20220702_210939972.jpg",
    "./assets/images/downscaled/IMG_20220726_135617846.jpg",
    "./assets/images/downscaled/IMG_20220727_214615077.jpg",
    "./assets/images/downscaled/IMG_20220801_103314_01.jpg",
    "./assets/images/downscaled/IMG_20220801_103443781_HDR.jpg",
    "./assets/images/downscaled/IMG_20220919_133246792.jpg",
    "./assets/images/downscaled/IMG_20220920_145431958.jpg",
    "./assets/images/downscaled/intake crossbrace context.png",
    "./assets/images/downscaled/lift transparent (use this).png",
    "./assets/images/downscaled/plate layout.png",
    "./assets/images/downscaled/PXL_20221009_185623975.jpg",
    "./assets/images/downscaled/PXL_20221009_190806339.jpg",
    "./assets/images/downscaled/PXL_20221009_190930621.MP.jpg",
    "./assets/images/downscaled/robot upscale.jpg",
    "./assets/images/downscaled/stock xray.jpg",
    "./assets/images/downscaled/thought.png",
    "./assets/images/downscaled/321922615_1487253371767220_6130948321082030350_n.jpg",
    "./assets/images/downscaled/321817708_182105554437037_314541975815846569_n.jpg",
    "./assets/images/downscaled/322034883_3374810166120545_1630504519450288209_n.jpg",
].reverse();
export default {
    directives: {
        showImage
    },
    data() {
        return {
            images: images,
            loaded: [],
            scrollHeight: 0,
            scrollOffset: 0,
            scrollPercent: 0,
            targetPosition: 0,
            position: 0,
            transformString: 'translateX(0px)'
        }
    },
    template: `
    <div class="invis-scroll">
        <div ref="container" class="gallery-container">
            <div ref="gallery" class="gallery" :style="{'transform': transformString }">
                <div class="gallery-item" v-for="(image, idx) in loaded" :key="idx" :ref="'item' + idx" :src="image.src" v-showImage>

                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        loop() {
            this.position += (this.targetPosition - this.position) * 0.1;
            this.transformString = 'translateX('+this.position * -1 +'px)';
            requestAnimationFrame(this.loop);
        },
        load(img) {
            console.log(img)
        }
    },
    mounted() {
        setTimeout(this.loop, 500);
        this.loaded.forEach((image, idx) => {
            let img = image;
            img.classList.add('gallery-item');
            img.style.animationDelay = (idx / this.loaded.length) / 3 + "s";
            this.$refs["item"+idx][0].appendChild(img);
        });

        this.$refs.container.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            let max = this.$refs.container.scrollWidth - this.$refs.container.clientWidth;
            this.targetPosition = Math.max(Math.min(this.targetPosition + evt.deltaY, max), 0);
        });
    },
    created() {
        this.images.forEach((image) => {
            let img = new Image();
            img.src = image;
            this.loaded.push(img);
        });
    },
};