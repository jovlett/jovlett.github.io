import showImage from "/js/show-image.js";

export default {
    "title": "Tube Clamp Cost Reduction",
    "name": "tube-clamps",
    "directives": {
        showImage,
    },
    "template":`
<div class="project-article">
    <div class="project-title"><h1>Tube Clamp Cost Reduction</h1></div>
        <div style="max-width: 80vw; margin-top: 0;">
            <p style="margin-top: 10px;">
            On Schilling Robotics’ deep-sea robots, expensive hydraulic tube clamps posed an opportunity for cost reduction. 
            My project proposed two redesigned concepts that would save approximately ~$1,500 per vehicle given ~20 redesigned parts.
            </p>    
        </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Ideation & Prototyping</h2>
            <p style="margin-top: 10px;">
                A formal brainstorm was conducted to generate ideas for clamp redesign (below, left). 
                A set-based approach was used to identify a wide range of possible solutions for further development. 
                Three archetypes were selected for prototyping (below, right).            
            </p>
            <ul style="padding: revert;">
                <li>
                    <b>(a) Sheet-Metal U-Profile</b>
                    <br/>Strong clamp with proven material, but more expensive  
                </li>   
                <li>
                    <b>(b)	3D-Printed Softjaw & Strongback</b>
                    <br/>Cheaper yet unproven fluid compatibility of 3D print
                </li>
                <li>
                    <b>(c)	Band-It Clamp Spacers</b>
                    <br/>Cheapest to manufacture, suboptimal scalability 

                </li>
            </ul>
            <p>
                Concepts were test-fit to an existing tube run for comparison, shown right. 
                Modifications were made to the designs, including strongback retention features built into the soft jaw 
                of <b>(b)</b> and an effort to consolidate <b>(c)</b> into a single part. Ultimately, assembly issues with 
                <b>(c)</b> removed 
                it from consideration.
            </p>
            <p>
                Remaining concepts <b>(a)</b> and <b>(b)</b> were compared through a formal trade study comparing 
                rigidity, cost, and manufacturability.
            </p>
        </div>
    </div>
    <div class="dither divider"></div>
    <div class="project-split">
        <div style="max-width: 50vw;">
            <h2>Business Case</h2>
            <p style="margin-top: 10px;">
                Prospective savings for both concepts were averaged between four representative parts, realizing ~70% of cost 
                saved per redesigned clamp. Using sales figures from 2024, prospective savings per clamp, and production history, 
                a total saving of ~$1,500 per vehicle was identified given that 20 clamps were redesigned. However, when considering 
                cost of re-engineering and qualifying the parts, it would take approximately 3 years to break even.
            </p>
            <p>
                After consulting stakeholders in the Continuous Improvement and Cost Reduction departments, the tough decision was made to 
                pursue other means of cost reduction.             
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