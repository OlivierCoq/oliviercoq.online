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
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="work" ref="work"></div>

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
          name: 'JavaScript',
          icon: 'fa-brands fa-js',
          percentage: 100
        },
        {
          name: 'VueJS',
          icon: 'fa-brands fa-vuejs',
          percentage: 90
        },
        {
          name: 'React',
          icon: 'fa-brands fa-react',
          percentage: 60
        },
      ]
    }
  },
}
</script>
<style lang="scss">
  .ctr-hero {
    // height: 100vh;
  }
</style>