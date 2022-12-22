<template>
  <div class="progress-circle position-relative float-left" :class="skill.percentage > 50 ? `over50 p${skill.percentage}`: `p${skill.percentage}` ">
    <span class="position-absolute pt-2">
        <i class="fa-2x" :class="skill.icon"></i>
    </span>
    <!-- <span class="position-absolute">{{ skill.percentage }}%</span> -->
    <div class="left-half-clipper">
        <div class="first50-bar"></div>
        <div class="value-bar" ref="value_bar"></div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressCircle',
    props: ['skill'],
    data(){
        return {}
    },
    mounted() {
        this.setup()
    },
    methods: {
        setup() {
            let value_bar = this.$refs.value_bar, tooltip_span = this.$refs.tooltip_span
            value_bar.style.display = 'block'

            if(this.skill.percentage <= 50) { value_bar.style.transform = `rotate(${this.skill.percentage * 3.6}deg)` }
            else { value_bar.style.transform = `rotate(${(this.skill.percentage * 3.6) }deg)` }
        }
    }
}
</script>

<style lang="scss">
    .progress-circle {
        font-size: 20px;
        margin: 20px;
        position: relative; /* so that children can be absolutely positioned */
        padding: 0;
        width: 5em;
        height: 5em;
        // background-color: #F2E9E1; 
        border-radius: 50%;
        line-height: 5em;
        float: left;

        &:after {
            border: none;
            position: absolute;
            top: 0.35em;
            left: 0.35em;
            text-align: center;
            display: block;
            border-radius: 50%;
            width: 4.3em;
            height: 4.3em;
            background-color: white;
            content: " ";
        }

        @media(max-width: 768px) {
            margin-left: -0.4rem;
        }
        span {
            position: absolute;
            line-height: 5em;
            width: 5em;
            text-align: center;
            display: block;
            color: $color-2;
            z-index: 2;
        }
        .left-half-clipper { 
            /* a round circle */
            border-radius: 50%;
            width: 5em;
            height: 5em;
            position: absolute; /* clipping */
            clip: rect(0, 5em, 5em, 2.5em); /* clips the whole left half*/ 
        }
    }
    .progress-circle.over50 {
        .left-half-clipper {
            clip: rect(auto,auto,auto,auto);

            .first50-bar {
                position: absolute; /*clipping*/
                clip: rect(0, 5em, 5em, 2.5em);
                background-color: $color-2;
                border-radius: 50%;
                width: 5em;
                height: 5em;
            }
        }
    }

    .value-bar {
        position: absolute; /*  clipping*/
        clip: rect(0, 2.5em, 5em, 0);
        width: 5em;
        height: 5em;
        border-radius: 50%;
        border: 0.45em solid $color-2; /*The border is 0.35 but making it larger removes visual artifacts */
        /*background-color: #4D642D;*/ /* for debug */
        box-sizing: border-box;
    
    }
    .progress-circle:not(.over50) .first50-bar{ display: none; }

</style>