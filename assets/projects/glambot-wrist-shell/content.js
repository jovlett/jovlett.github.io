import showImage from "/js/show-image.js";

export default {
    "title": "GLAMBOT Wrist Shell",
    "name": "glambot-wrist-shell",
    "directives": {
        showImage,
    },
    "template":`
<div class="project-article">
    <div class="project-title"><h1>GLAMBOT Wrist Shell</h1></div>
    <div class="project-split" style="margin-top:0;">
        <div style="max-width: 100vw;">
            <p style="margin-top: 10px;">
                Seven external covers were designed for the GLAMBOT robotic arm to cover exposed mechanical components. 
                Due to unique geometry and range-of-motion constraints, the wrist was the most involved. 
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Brainstorming</h2>
            <p>
                Different visual concepts were hand-drafted on printed views before proceeding to CAD, shown below.
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 100vw;">
            <h2>Early Design Ideation</h2>
            <p>
                Early CAD ideation is shown right. Management moved forward with the rightmost concept. 
                Volume-sweep analysis was performed to ensure zero interferences between the covers and joint limits.             
            </p>
            <div class="image-row">
                <div class="image-row-item"><img src="assets/projects/puck-cr/6.png" v-showImage></div>
                <div class="image-row-item"><img src="assets/projects/puck-cr/5.png" v-showImage></div>
                <div class="image-row-item"><img src="assets/projects/puck-cr/5.png" v-showImage></div>
            </div>
        </div>
        <div class="project-sidebar"></div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Prototyping</h2>
            <p>
                The panel consists of an aluminum baseplate, spacer, acrylic diffuser, and aluminum bezel cover. An exploded view of the assembly is shown right.
                The design’s relatively low cost and aesthetic benefits allowed it to be integrated into the final product, shown below.
            </p>
        </div>
    <div class="dither divider"></div>
    </div>
</div>
    `,
    "sidebar": `
    `,
    "date": "11/4/22"
};