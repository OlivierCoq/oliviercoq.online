<template>
  <div id="project_library">
    <div v-if="main_project" class="row">
    
    </div>
    <div v-else class="row project_grid">

    </div>
  </div>
</template>

<script>
export default {
    name:'ProjectsLibrary',
    props: ['projects'],
    data(){
        return {
            main_project: false
        }
    },
    methods: {
        select_project(project){

        }
    }
}
</script>

<style lang="scss">
    #project_library {
        .project_grid {

        }
    }
</style>