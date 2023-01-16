import projects from "../../assets/projects/projects.js"
export default {
    template: `
    <div>
        <div class="project-split">
            <ul class="project-list no-select">
                <li
                    v-for="(project, i) in projects"
                    :key="i"
                    @click="select(i)"
                    :class="{ active: i == selected }"
                >{{project.title}}</li>
            </ul>
            <div class="project-content-container">
                <div class="project-content" v-html="projects[selected].article">
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            selected: 0,
            projects: projects
        };
    },
    methods: {
        select(i) {
            this.selected = i;
        }
    },
};