import showImage from "/js/show-image.js";

export default {
    "title": "FRC '22",
    "name": "frc-2022",
    "category": "FRC",
    "directives": {
        showImage
    },
    "template":`
    <div class="project-article" style="max-width: 50vw; margin: 0;">
        <p style="margin-top: 0;">
        Finished up our last off-season event this weekend - I couldn't have asked for a better way to retire this machine.<br/>
        After rebuilding the front of the robot, adding intake hard stops, and switching out the tracker camera mount, the team competed at Capital City Classic, going 5-7 against multiple world finalists in the bracket.
        Our first couple of matches went poorly as we tried to sort out a distance-based shooting strategy that changed flywheel speeds to tweak the shot trajectory. Mid-match isn't a great time to do shooter tuning, so we fell back to a pre-set speed and started raking in some wins. Over the course of the event (out of 36 other teams) we started at 29th, peaked at 8th, and ended qualifiers at 11th place. Pretty good!
        <br/><br/>

        As the captains of Alliance #8 in the quarterfinals, we picked two other two teams (701 Vikingbots and 7528 Nuts and Bolts) to compete against the top 3 teams in California (Alliance #1). 
        <br/>
        Sure we got curb-stomped, but we won in spirit :)
        <br/><br/>
        Until next year...
        </p>
        <div class="image-row">
            <div class="image-row-item"><img style="aspect-ratio:1.6" src="assets/projects/frc-2022/1.png" v-showImage></div>
        </div>
    </div>
    `,
};