<template>
  <div id="project_library">
    <project-viewer v-if="main_project" :project="main_project" @toggleoff="main_project = false" />
    <div v-show="!main_project" class="row project_grid">
        <div v-for="project, a in projects" :key="a" class="col-sm-12 col-md-3">
            <div class="project shadow-1 position-relative" :style="{ backgroundImage: 'url(' + project.preview + ')' }">
                <div class="discover position-absolute hoverable d-flex flex-column justify-content-center align-items-center" @click="select(project)">
                    <i class="fa-solid fa-up-right-and-down-left-from-center text-light fa-2x"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MiniBrowser from './MiniBrowser.vue'
import ProjectViewer from './ProjectViewer.vue'
export default {
  components: { MiniBrowser, ProjectViewer },
    name:'ProjectsLibrary',
    props: ['projects'],
    data(){
        return {
            main_project: false
        }
    },
    methods: {
        select(project){
            this.main_project = project
        }
    }
}
</script>

<style lang="scss">
    #project_library {
        .project_grid {
            transition-duration: 0.5s;

            .project {
                height: 360px;
                width: 360px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                
                &:hover { 
                    .discover { opacity: 1; transition-duration: 0.5s; }
                }

                .discover {
                    height: 340px;
                    width: 340px;
                    background-color: #000000d4;
                    left: 10px;
                    top: 10px;
                    opacity: 0;
                    transition-duration: 0.5s;
                }
            }
        }

    }
</style>