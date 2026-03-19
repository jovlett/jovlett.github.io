import showImage from "/js/show-image.js";

export default {
    "title": "Photobooth Lighting Fixture",
    "name": "photobooth-lighting",
    "directives": {
        showImage,
    },
    "template":`
<div class="project-article">
    <div class="project-title"><h1>Photobooth Lighting Fixture</h1></div>
    <div class="project-split" style="margin-top:0;">
        <div style="max-width: 50vw;">
            <p style="margin-top: 10px;">
                The GLAMBOT robotic arm mounts to a pedestal. 
                I developed an integrated fill light onto its’ front-facing surface to provide ambient photobooth lighting and aesthetic appeal.            
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Early Set-Based Design</h2>
            <p style="margin-top: 10px;">
                A trade study was compiled to analyze the price, brightness, scale, design integration, and availability of a set different lighting designs, 
                both custom and off-the-shelf.The aesthetic of an inset ring with a central island (Option 3.1) was decided by management. 
                Additional requirements were provided, including RGB support and remote control.
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Design</h2>
            <p style="margin-top: 10px;">
                Shown right, the edge-lit LED panel is an independent subassembly that bolts onto the existing pedestal (colored pink). 
                Structure is maximized and changes to existing part numbers are minimal. A stacked assembly allows the light ring to appear uninterrupted, 
                per management request.            
            </p>
        </div>
        <div class="project-sidebar"></div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Prototyping</h2>
            <p style="margin-top: 10px;">
                The panel consists of an aluminum baseplate, spacer, acrylic diffuser, and aluminum bezel cover. An exploded view of the assembly is shown right.
                The design’s relatively low cost and aesthetic benefits allowed it to be integrated into the final product, shown below.
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
</div>
    `,
    "sidebar": `
    `,
    "date": "11/4/22"
};