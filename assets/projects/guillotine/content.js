import showImage from "/js/show-image.js";

export default {
    "directives": {
        showImage
    },
    "title": "Prop Guillotine",
    "name": "guillotine",
    "template": `
<div class="project-article">
    <div class="project-split" style="margin-top:0;">
        <div style="max-width: 50vw;">
            <p style="margin-top: 0">
            This is the start of a prop guillotine for a haunted house, and we want to simulate a beheading. This works with an actor doing a plank underneath a fake body. When the blade hits the neck, the actor lies down while the body stays on the table, severing the head. <br/><br/>
            Revisiting the design after building a little, it's pretty thick. I may chop off 6-12" from a side and see how that looks. I forgot to model gussets/support in CAD, but the frame seems sturdy enough so far.
            </p>
            <div class="image-row">
                <div class="image-row-item"><img style="" src="assets/projects/guillotine/2.png" v-showImage></div>
                <div class="image-row-item"><img style="" src="assets/projects/guillotine/3.png" v-showImage></div>
            </div>
            <p>
            9/16/22 - Frame update - we built it out a little more and found a wine rack that’ll work great as the table.<br/><br/>
            With the frame finished, all we made today was the blade/blade shuttle and the headrest.
            The blade shuttle is built with a board with vertical "guides" to keep it in line. The blade itself is painted poster board. The screws directly into the poster board tore out, so we had to add a little tape across the top to reinforce it.
            The headrest is made with 2 boards, the top & bottom the bottom has a cutout section that breaks away with Velcro. It allows the actor's head to move through the headrest, away from the fake body on top. The blade covers the hole that the breakaway piece leaves, making a (hopefully) convincing execution.
            </p>
        </div>
        <div class="project-sidebar">
            <div class="project-sidebar-item" style="background-image: url('assets/projects/guillotine/1.png');" src="assets/projects/guillotine/1.png" v-showImage></div>
        </div>
    </div>
</div>
    `,
    "date": "9/9/22"
};