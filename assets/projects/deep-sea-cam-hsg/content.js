import showImage from "/js/show-image.js";

export default {
    "title": "Deep-Sea Camera Housing",
    "name": "deep-sea-cam-hsg",
    "directives": {
        showImage,
    },
    "template":`
<div class="project-article">
    <div class="project-title"><h1>Deep-Sea Camera Housing</h1></div>
    <div class="project-split" style="margin-top:0;">
        <div style="max-width: 50vw;">
            <p style="margin-top: 10px;">
            The housing for Schilling Robotics’ subsea camera required cost-reduction. 
            My proposed design reduces the cost by ~25% ($3,000) per unit while maintaining a 7,400-psi subsea pressure rating. 
            </p>
            <p>The project was required to:</p>
            <ul style="padding: revert;">
                <li>
                    <b>Reduce cost by at least $1,000 per unit</b>
                    <br/>The current housing costs an estimated $12,000. Geometry, material, manufacturing, and quantity were all considered as means of cost reduction. 
                </li>
                <li>
                    <b>Maintain at least a 4,000m subsea pressure rating</b>
                    <br/>The current housing is rated for 5,000m, but depth can be sacrificed given enough savings.
                </li>
                <li>
                    <b>Sustain videostream without thermal shutdown</b>
                    <br/>Camera internals must stay under 100°C given a maximum offshore temperature of 40°C. 

                </li>
                <li>
                    <b>Design compatibility for V-Block mounting</b>
                    <br/>Existing housings mount to a proprietary dovetail, but a round housing can fit with the standard V-Block mounting scheme. 
                </li>
                <li>
                    <b>Keep existing dome seal geometry</b>
                    <br/>The dome seal was refined over many iterations and is out of the scope of this project.
                </li>
            </ul>
            <p>Some features considered 'nice-to-haves' but not strictly required included:</p>
            <ul style="padding: revert;">
                <li>
                    <b>Horizontal Clocking Feature</b>
                    <br/>Geometry that ensures a horizontal horizon line during mounting  
                </li>
                <li>
                    <b>Steez</b>
                    <br/>Aesthetic eye-candy to uphold the brand identity.
                </li>
            </ul>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Ideation & Prototyping</h2>
            <p style="margin-top: 10px;">
                Shown below, the PCA (green) was moved from horizontal to vertical, simplifying heatsink (blue). 
                Through development, it was further integrated into the housing’s aft wall, granting a more direct thermal path and removing non-trivial 
                deep-drilling operations from the housing.
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Design</h2>
            <p style="margin-top: 10px;">
                The prototype's 'killers' to continued development were identified as thermal performance, fitment, and water ingress.
            </p>
            <p>
                A lo-fi prototype confirmed the new heartsink’s performance at 40°C for further development, equalizing to ~75°C after a 48-hr thermal soak.
                (a) Static stress analysis was performed at 7,400 psi subsea to determine maximum deflection and confirm that 3rd principal stress was within the allowable 40 MPa margin.
                (b) The exterior was 3D-printed to identify interferences. Flats were added and mounting was shortened to regain clearance.
            </p>
        </div>
        <div class="project-sidebar"></div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Testing</h2>
            <p style="margin-top: 10px;">
                A high-fidelity prototype was tested under hydrostatic pressure (below, left); electrostatic discharge (below, middle); shock-vibration (below, right);
                 and a thermal soak (not pictured).</p>
        </div>
    </div>
</div>
    `,
    "sidebar": `
    `,
    "date": "11/4/22"
};