import showImage from "/js/show-image.js";
export default {
    "title": "Puck (250lb)",
    "name": "puck-cr",
    "category": "CR",
    directives: {
        showImage,
    },
    "template": `
<div class="project-article">
    <div class="project-split" style="margin-top:0;">
        <div style="max-width: 50vw;">
            <p style="margin-top: 0">
            <b>Puck</b> (pictured getting lifted at the 2023 Robogames) is a 250lb combat robot I’m working on as a part of the 
            Sierra College Robotics Club. Puck has been competing in the heavyweight division at Robogames since the early 2000’s
            with no major changes. However, after a subpar performance at the 2023 competition, the team is looking to upgrade. 
            <br/>
            This project is spearheaded by myself and club president Cormac McCreary.
            </p>
            <p>The proposed list of changes to Puck:</p>
            <ul style="padding: revert;">
                <li>
                    <b>Add armor to the top & bottom</b>
                    <br/>The exposed steel frame ensnared the forks of our opponent, puncturing our electronics bay and nearly our batteries.
                </li>
                <li>
                    <b>Redesign the electronics bay</b>
                    <br/>Our old one was destroyed in a manner similar to that being pictured - props to King Crab, our opponent!
                </li>
                <li>
                    <b>Add more viable offense options</b>
                    <br/>Replace the chewed up mystery metal on the front with 0.25” AR500
                    <br/>Add a fork option to get under opponents more successfully - ground game is becoming a larger part of the sport, and we must keep up with the competition
                </li>
            </ul>
            <p>
            Tightening bolts on each joint should lock it together. There's a little hole+keyed tab for the stop rod that clamps onto the rod when the screw is tight to hopefully not mar it up. <br/><br/>
            It's also modular which is nice. If needed, I can make more links for even more reach.
            </p>
            <p>Proposed CAD as of Oct 1, 2023:</p>
            <div class="image-row">
                <div class="image-row-item"><img src="assets/projects/puck-cr/2.png" v-showImage></div>
                <div class="image-row-item"><img src="assets/projects/puck-cr/3.png" v-showImage></div>
            </div>
        </div>
        <div class="project-sidebar">
            <div class="project-sidebar-item" style="background-image: url('assets/projects/puck-cr/1.png');" src="assets/projects/puck-cr/1.png" v-showImage></div>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h1>Armor</h1>
            <p>
                I created initial drawings that fit Puck’s existing CAD, cutting away a panel for easy electrical access and adding reliefs for the casters. The team made cardboard prototypes of the top plate to test the dimensions. We updated the overall width, wheel cutouts, and caster relief dimensions accordingly.
            </p>
            <p>
                To make the armor, we found some plates of HDPE at a fellow club member’s workshop. We attempted to laser cut the top plate out of a 0.5” sheet, but the machine went out of commission after 5 hours of continuous cutting. We finished the part with a Sawzall. To make the bottom plates without the laser cutter, we traced a cardboard cutout of the bottom of the robot and used this as a template for the plastic. We used a Sawzall to cut the outer contours while leaving the wheel cutouts to a handheld router. Holes were initially drilled into the metal chassis. We then center-punched the pattern into the plastic before drilling to an intermediate size. The plates were then lined back up to the chassis and drilled to the final size.
            </p>
        </div>
        <div class="project-sidebar">
            <div class="project-sidebar-item" style="background-image: url('assets/projects/puck-cr/4.png'); height:500px; background-position: center 40%;" src="assets/projects/puck-cr/4.png" v-showImage></div>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h1>Electronics Bay</h1>
            <p>
            I created the flat pattern of the box using Fusion 360’s sheet metal environment. We plasma cut the pattern and made half of it’s bends using a sheet metal brake. However, with some clearance issues in the brake, we encouraged the rest of the bends to form using a hammer, vice, and some elbow grease.
            </p>
            <div class="image-row">
                <div class="image-row-item"><img src="assets/projects/puck-cr/6.png" v-showImage></div>
                <div class="image-row-item"><img src="assets/projects/puck-cr/5.png" v-showImage></div>
            </div>
            <p>
                The result fits very well into the chassis and gives ample space for the batteries, motor controllers, radio, and power switch.
            </p>
        </div>
        <div class="project-sidebar"></div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h1>Offense</h1>
            <p>
                We’re in contact with a local metal vendor for quotes on the AR500 front plate. We plan to waterjet cut the plate at Sierra College’s Advanced Manufacturing machine shop.
            </p>
            <p>
                The fork design consists of two side plates sandwiching a 1x1” box tube for ease of manufacturing. These side plates will be cut from the same AR500 as the front and be welded to the tube. A plate forms the shape of the tip. A shoulder screw acts as a pivot, and the side plate profile allows an existing member in the chassis to act as an end stop. The proposed fork assembly is held in place between 2 Delrin glides, but these may bind the pivot. Whether or not to keep the guides is an ongoing conversation.
            </p>
        </div>
        
        <div class="project-sidebar dither">
            <div class="project-sidebar-item" style="align-self: self-end; background-image: url('assets/projects/puck-cr/7.png'); height: 300px; width:400px; background-position: center bottom;" src="assets/projects/puck-cr/7.png" v-showImage></div>
        </div>
    </div>
</div>
    `,
    "sidebar": `
    `,
    "date": "11/4/22"
};