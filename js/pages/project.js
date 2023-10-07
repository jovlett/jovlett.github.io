import projects from "../../assets/projects/projects.js"

const components = {};
for (const project of projects) {
    if (project.template) {
        components[project.name] = project;
    }
}

export default {
    components: components,
    template: `
    <div>
        <div class="project-split">
            <div class="project-selector-container">
                <div class="selector">
                    <ul class="project-list no-select">
                        <li
                            v-for="project in projects"
                            :key="project.title"
                            @click="select(project)"
                            :class="{ active: project == selected }"
                        >{{project.title}}</li>
                    </ul>
                </div>
            </div>
            <div class="project-content-container" v-if="selected">
                <keep-alive>
                    <component class="project-content" v-if="selected.template" :is="selected.name"></component>
                    <div class="project-content" v-else>
                        <p style="margin: 0; color: #585858">This one isn't finished yet - stay tuned!</p>
                    </div>
                </keep-alive>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            projects: projects,
            selected: null,
        };
    },
    mounted() {
        this.selected = this.projects[0];
    },
    methods: {
        select(project) {
            if (this.selected == project) return;
            this.selected = project;
        }
    },
};