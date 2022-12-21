<template>
  <div id="home_hero" class="float-end position-relative m-0 p-0 bg-color-1">
    <video autoplay muted loop ref="hero_video" class="w-100 m-0 p-0">
        <source src="https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/code_background_video.mp4?alt=media&token=5fd45134-b319-46f4-9496-7212bc34cf6e" type="video/mp4">
    </video>
    <div class="ctr-main d-flex flex-column justify-content-center align-items-center position-absolute right-0 bottom-0 left-0 top-0 m-0 p-0">
        <h1 class="text-light barlow">
            Olivier Coq | Web Developer
        </h1>
        <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center">
            <a v-for="item, a in social_links" :key="a" :href="item.link" target="_blank" class="btn text-light mx-2 social_btn">
                <i :class="item.icon"></i>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeHero',
    data(){
        return {
            social_links: [
                { icon: `fa-brands fa-github`, link: `https://github.com/OlivierCoq` },
                { icon: `fa-brands fa-linkedin`, link: `https://www.linkedin.com/in/oliviercoq/` },
            ]
        }
    }
}
</script>

<style lang="scss">
    #home_hero {
        width: -webkit-fill-available; 
        height: inherit;

        .ctr-main {
            width: inherit;
            height: inherit;

            .social_btn {
                background-color: $color_2;
                border-radius: 50%;
                width: 40px;
                height: 40px;

                &:hover {background-color: darken($color_2, 10%);}
            }
        }
    }
</style>