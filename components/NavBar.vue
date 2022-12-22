<template>
  <div>
    <div id="navbar" class="navbar-desktop bg-color-4 position-fixed flex-column justify-content-start align-items-start">
      <div class="w-100 p-3 mb-3">
        <img src="~/assets/img/logo-white-nav-edit.png" alt="Logo" class="w-100 hoverable" @click="goHome"/>
      </div>
      <div v-for="item, a in site_links" :key="a" class="w-100 px-4 py-3 hoverable">
        <div class="text-light montserrat text-uppercase w-100 text-decoration-none hoverable tab_name fw-bolder" @click="goTo(item)">
          {{ item.name }}
        </div>
      </div>
      <div class="mt-5 pt-5 px-3 w-100 d-flex flex-row justify-content-start align-items-end">
        <a v-for="item, a in social_links" :key="a" :href="item.link" target="_blank" class="btn text-light mx-2 social_btn">
            <i :class="item.icon"></i>
        </a>
      </div>
    </div>
    <div class="navbar-mobile bg-color-4 position-fixed">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <div class="w-100">
              <img src="~/assets/img/logo-white-nav-edit.png" alt="Logo" class="w-75 hoverable mt-3" @click="goHome"/>
            </div>
          </div>
          <div class="col-6">
            <div class="w-100 d-flex flex-row justify-content-end align-items-center p-2">
              <button class="hamburger hamburger--collapse hoverable" type="button" ref="hamburger" @click="toggleMenu">
                <span class="hamburger-box text-light ">
                  <span class="hamburger-inner text-light bg-color-1"></span>
                </span>
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="menu_open" :key="comp_key" class="row mobile_menu position-fixed left-0 right-0" ref="mobile_menu">
      <div class="col-12 pt-5">
        <div v-for="item, a in site_links" :key="a" class="w-100 px-4 py-3 hoverable">
          <div class="text-light montserrat text-uppercase w-100 text-decoration-none hoverable tab_name fw-bolder" @click="goTo(item)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
      return {
        menu_open: false,
        comp_key: 0,
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
          this.toggleMenu()
        }
      },
      toggleMenu() {
        this.menu_open = !this.menu_open
        this.$nextTick(()=> {
          if(this.menu_open) { 
            this.$refs.hamburger.classList.add('is-active') 
            this.$refs.mobile_menu.classList.add('menu_open') 
          }
          else { 
            this.$refs.hamburger.classList.remove('is-active') 
            this.$refs.mobile_menu.classList.add('menu_open')
          }
        })
      }
    }
}
</script>

<style lang="scss">
  .navbar-desktop {
    width: 15%;
    min-height: 100vh;
    display: flex;

    @media(max-width: 768px) {
      display: none !important;
    }

    .tab_name {
      font-size: 150%;
    }
    .social_btn {
        background-color: $color_2;
        border-radius: 50%;
        width: 40px;
        height: 40px;

        &:hover {background-color: darken($color_2, 10%);}
    }
  }
  .navbar-mobile {
    width: 100%;
    min-height: 50px;
    display: block;
    z-index: 3;

    @media(min-width: 769px){
      display: none;
    }

    .hamburger {
      .hamburger-inner {
        &:before,
        &:after {
          background-color: $color_1;
        }
      }
    }
    .hamburger.is-active {
      .hamburger-inner {
        background-color: $color_1;
      }
    }
  }
  .mobile_menu {
    opacity: 0;
    transition-duration: 0.8s;
    background-color: #1e3d58bc;
    height: 100vh;
  }
  .mobile_menu.menu_open {
    opacity: 1;
    z-index: 3;
    transition-duration: 0.8s;
    top: 50px;
    left: 0 !important;
    right: 0 !important;
  }
</style>