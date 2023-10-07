import showImage from "/js/show-image.js";

export default {
    "title": "Multi-Axis Hardstop",
    "name": "multi-axis-hardstop",
    directives: {
        showImage,
    },
    "template": `
    <div class="project-article" style="max-width: 50vw; margin: 0;">
        <p style="margin-top: 0;">
        This design can be used on a Kurt machine vise or a T-slotted table to position stock repeatably. It's pretty sick!<br/>
        The original concept (below) was only going to have one link, but I added another for flexibility:
        </p>
        <div class="image-row">
            <div class="image-row-item"><img src="assets/projects/multi-axis-hardstop/1.png" v-showImage></div>
            <div class="image-row-item"><img src="assets/projects/multi-axis-hardstop/2.png" v-showImage></div>
        </div>
        <p>
        Tightening bolts on each joint should lock it together. There's a little hole+keyed tab for the stop rod that clamps onto the rod when the screw is tight to hopefully not mar it up. It's also modular which is nice. If needed, I can make more links for even more reach.
        <br/><br/>To be machined soon!
        </p>
        <div class="image-row">
            <div class="image-row-item"><img style="aspect-ratio:2; " src="assets/projects/multi-axis-hardstop/3.png" v-showImage></div>
        </div>
    </div>
    `,
    "date": "11/4/22"
};