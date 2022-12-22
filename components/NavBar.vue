<template>
  <div id="navbar" class="navbar bg-color-4 position-fixed d-flex flex-column justify-content-start align-items-start">
    <div class="w-100 p-3 mb-3">
      <img src="~/assets/img/logo-white-nav-edit.png" alt="Logo" class="w-100 hoverable" @click="goHome"/>
    </div>
    <div v-for="item, a in site_links" :key="a" class="w-100 px-4 py-3 hoverable">
      <div class="text-light montserrat text-uppercase w-100 text-decoration-none hoverable fs-3 fw-bolder" @click="goTo(item)">
        {{ item.name }}
      </div>
    </div>
    <div class="mt-5 pt-5 px-3 w-100 d-flex flex-row justify-content-start align-items-end">
      <a v-for="item, a in social_links" :key="a" :href="item.link" target="_blank" class="btn text-light mx-2 social_btn">
          <i :class="item.icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
      return {
        social_links: [
            { icon: `fa-brands fa-github`, link: `https://github.com/OlivierCoq` },
            { icon: `fa-brands fa-linkedin`, link: `https://www.linkedin.com/in/oliviercoq/` },
        ],
        site_links: [
          { name: 'About', link: '#about', blank: false, ref:'about' },
          { name: 'Work', link: '#work', blank: false, ref: 'work' },
          { name: 'My Resume', link: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/Olivier%20Coq%20-%20Web%20Development%20Resume_2022.pdf?alt=media&token=fd9f9d8a-1c22-44e6-bd25-e7224dc012ad', blank: true },
          { name: 'Contact Me', link: '#contact', blank: false, ref:'contact' }
        ]
      }
    },
    methods: {
      goHome(){
        document.getElementById('home_hero').scrollIntoView()
      },
      goTo(item) {
        if(item.blank) { window.open(item.link), '_blank' }
        else {
          document.getElementById(item.ref).scrollIntoView()
        }
      }
    }
}
</script>

<style lang="scss">
  .navbar {
    width: 15%;
    min-height: 100vh;

    .social_btn {
        background-color: $color_2;
        border-radius: 50%;
        width: 40px;
        height: 40px;

        &:hover {background-color: darken($color_2, 10%);}
    }
  }
</style>