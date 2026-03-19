import showImage from "/js/show-image.js";

export default {
    "title": "XFMS Beamline Endstation",
    "name": "xfms-endstation",
    "directives": {
        showImage,
    },
    "template":`
<div class="project-article">
    <div class="project-title"><h1>XFMS Beamline Endstation</h1></div>
    <div class="project-split" style="margin-top:0;">
        <div style="max-width: 50vw;">
            <p style="margin-top: 10px;">
                Advanced Light Source Beamline 3.2.1 studies protein folding by measuring the concentration of hydroxyl radicals after X-ray irradiation 
                of crystalized samples. Rather than loading a single sample for individual exposure, my proposed instrument increases throughput by exposing 
                up to 96 samples in a single setup.            
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Prototyping</h2>
            <p style="margin-top: 10px;">
                Shown right, a low-budget prototype was developed using 3D-printed PETG, laser cut acrylic and spare 3D-printer parts. 
                Translation is driven by two NEMA-17 motors and trapezoidal ACME leadscrews, guided by linear rods. A LabVIEW interface allows 
                the user to control the position of the sample plate. ASCII characters are sent from LabVIEW to the instrument via UART and 
                interpreted by a repurposed 3D-printer motherboard into stepper movement commands. 
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Proposed Design</h2>
            <p style="margin-top: 10px;">
                The proposed instrument contains three subassemblies: <b>the motion stage, shutter, </b>and<b> sample plate.</b>
            </p>
            <ul style="padding: revert;">
                <li>
                    <b>Motion Stage</b>
                    <br/>
                    Built from two custom translation stages. The required torque was calculated given a desired speed of 30mm/s and 200mm/s2 acceleration, 
                    and an optimal motor was selected by comparing the calculated torque and RPM to manufacturer-provided motor curves. 
                    The ball screw’s pitch and diameter was mathematically sourced to aligned with the project specifications of ±50µm precision and ±10µm 
                    repeatability, and a Renishaw optical encoder was sourced to measure positional error. Similar calculations verified the stage’s dynamic 
                    load was within the linear guide’s operating margin.  
                </li>
                <li>
                    <b>Dual Shutter (Not Pictured)</b>
                    <br/>
                    Composed of a coarse motor-driven shutter and a fast shutter. The coarse shutter prevents continuous beam exposure to the delicate fast 
                    shutter during travel. The fast shutter allows sample exposure times up to 10 milliseconds. 
                </li>
                <li>
                    <b>Sample Plate (Not Pictured)</b>
                    <br/>
                    Compatible with the spacing of a conventional 96-well PCR plate. Samples are friction fit into place and water cooled to prevent degradation.
                </li>
            </ul>
        </div>
        <div class="project-sidebar"></div>
    </div>
    <div class="dither divider"></div>
</div>
    `,
    "sidebar": `
    `,
    "date": "11/4/22"
};