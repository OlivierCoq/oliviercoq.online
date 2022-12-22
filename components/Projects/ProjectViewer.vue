<template>
    <div class="project_focus">
        <div class="p-2 w-100">
            <p class="montserrat text-light hoverable" @click="turn_off"> 
                <i class="fa-solid fa-arrow-left"></i>  Back to Projects
            </p>
        </div>
        <div class="row focus rounded">
            <div class="col-sm-12 col-md-8">
                <div class="p-3 p-md-5">
                    <h3 class="barlow color-3 mb-5"><span class="color-4">Project</span>: {{ project.name }}</h3>
                    <p class="montserrat text-dark" v-html="project.description"></p>
                    <div class="w-100 py-3">
                        <agile :centerMode="true" :dots="false">
                            <div v-for="image, a in project.screenshots" :key="a" class="slide">
                                <img :src="image" alt="Screenshot" class="w-100">
                            </div>
                        </agile>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
               <mini-browser :project="project" />
               <div class="w-100 p-3 d-flex flex-row justify-content-center align-items-center">
                    <a :href="project.github" target="_blank" class="btn btn-primary text-light lato rounded mx-2" ><i class="fa-brands fa-github"></i></a>
                    <a :href="project.link" target="_blank" class="btn btn-danger text-light lato rounded mx-2" ><i class="fa-solid fa-link"></i></a>
               </div>
            </div>
        </div>
    </div> 
</template>

<script>
import MiniBrowser from "./MiniBrowser.vue"
import { VueAgile } from "vue-agile"

export default {
    name:'ProjectViewer',
    components: {
        MiniBrowser,
        agile: VueAgile
    },
    props: ['project'],
    data(){
        return {}
    },
    methods: {
        turn_off(){
            this.$emit('toggleoff', false)
        }
    }
}
</script>

<style lang="scss">
    .project_focus {
        transition-duration: 0.5s;

        .focus {
            min-height: 600px;
            background-color: white;

            .agile__slide {
                margin: 0 8px 0 0;
            }
            .agile__nav-button  {
                border: none;
                margin-top: 15px;
                width: 40px;
                height: 40px;
                color: white;
                border-radius: 50%;
                background-color: $color_2;

                &:hover { cursor: pointer; }
            }
        }
    }
</style>