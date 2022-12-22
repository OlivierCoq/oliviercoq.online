<template>
 <div id="home" class="ctr-body float-end d-flex flex-column">
    <HomeHero/> 

    <div id="about" ref="about" class="bg-color-1 w-100">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-start">
          <div class="p-3 p-md-5">
            <h2 class="color-4 text-uppercase fw-bold barlow my-3">About Me</h2>
            <p class="text-dark montserrat">
              Hi, I'm Olivier, a front end web developer with a zeal for coding and years of experience. I love the challenge 
              of programming and growing as I learn new technologies, but most importantly, I love the rush of reward from creating 
              solutions to problems. I'm always tinkering and always learning, but when I'm not coding, I enjoy producing music as my alter-ego, 
                <a class="text-decoration-none fw-bold color-2" href="https://olivyae.com/" target="_blank">Oli.Vyae</a>.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="p-3 p-md-5">
            <div class="row">
              <div v-for="skill, a in skills" :key="a" class="col-2">
                <div class="ctr-skill mb-3 mb-md-5">
                  <ProgressCircle :skill="skill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="work" ref="work" class="bg-color-3 p-3 p-md-5">
      <h2 class="text-light text-uppercase fw-bold barlow my-3">My Projects</h2>
      <p class="text-light montserrat">Here are some of my favorite projects I've had the pleasure and honor of working on over the years.</p>
      <ProjectsLibrary />
    </div>

    <div id="contact" ref="contact"></div>

 </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data(){
    return {
      skills: [
        {
          name: 'HTML5',
          icon: 'fa-brands fa-html5',
          percentage: 100
        },
        {
          name: 'CSS43',
          icon: 'fa-brands fa-css3-alt',
          percentage: 100
        },
        {
          name: 'Sass',
          icon: 'fa-brands fa-sass',
          percentage: 100
        },
        {
          name: 'Less',
          icon: 'fa-brands fa-less',
          percentage: 75
        },
        {
          name: 'JavaScript',
          icon: 'fa-brands fa-js',
          percentage: 100
        },
        {
          name: 'VueJS',
          icon: 'fa-brands fa-vuejs',
          percentage: 95
        },
        {
          name: 'React',
          icon: 'fa-brands fa-react',
          percentage: 75
        },
        {
          name: 'Node',
          icon: 'fa-brands fa-node-js',
          percentage: 80
        },
        {
          name: 'Grunt',
          icon: 'fa-brands fa-grunt',
          percentage: 100
        },
        {
          name: 'Git',
          icon: 'fa-brands fa-git',
          percentage: 100
        },
        {
          name: 'Electron',
          icon: 'fa-solid fa-atom',
          percentage: 25
        },
      ],
      projects: [
        {
          name: 'nSight',
          full_screenshot: '',
          screenshots: [],
          description: ``,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ]
        },
        {
          name: 'ValCal',
          full_screenshot: '',
          screenshots: [],
          description: ``,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ]
        },
        {
          name: 'OliVyae',
          full_screenshot: '',
          screenshots: [],
          description: ``,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ]
        },
        {
          name: 'StackNotes',
          full_screenshot: '',
          screenshots: [],
          description: ``,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ]
        }
      ]
    }
  },
}
</script>
<style lang="scss">
  .ctr-hero {
    // height: 100vh;
  }
  .ctr-skill {
    // width: 145px;
    // height: 145px;
  }
</style>