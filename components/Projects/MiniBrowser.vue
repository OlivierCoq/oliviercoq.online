<template>
    <div class="mini_browser shadow-1 m-4 bg-light p-0">
        <div class="head w-100 p-0 d-flex flex-row justify-content-center align-items-end">
            <div class="ctr-nav_btns d-flex flex-row justify-content-center align-items-center">
                <span class="dot close mx-1"></span>
                <span class="dot minimize mx-1"></span>
                <span class="dot fullscreen mx-1"></span>
            </div>
            <div class="ctr-tab_head d-flex flex-column justify-content-end">
                <div class="tab w-100 d-flex flex-row px-2 align-items-end justify-content-start">
                    <p class="lato m-0">{{ project.name }}</p>
                </div>
            </div>
            <div class="head_body"></div>
        </div>
        <div class="page">
            <img :src="project.full_screenshot" alt="" class="w-100">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniBrowser',
    props: ['project'],
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    .mini_browser {
        height: 400px;
        width: 500px;

        .head {
            background-color: #F8F9FA;
            height: 45px;
            overflow: hidden;

            .ctr-nav_btns {
                background-color: #DDE1E5;
                width: 20%;
                height: 45px;
                border-bottom-right-radius: 10px;

                .dot {
                    width: 15px;
                    height: 15px;
                    border-radius:50%;
                }
                .close { background-color: #F96158;}
                .minimize { background-color: #F9BD2E; }
                .fullscreen { background-color: #28CA41; }
            }
            .ctr-tab_head {
                height: 45px;
                background-color: #DDE1E5;
                width: 30%;
                
                .tab {
                    height: 40px;
                    border-top-right-radius: 8px;
                    border-top-left-radius: 8px;
                    background-color: #F8F9FA;
                }
            }
            .head_body {
                height: 45px;
                background-color: #DDE1E5;
                width: 50%;
                border-bottom-left-radius: 10px;
            }
        }
        .page {
            overflow-y: scroll;
            overflow-x: hidden;
            height: 355px;
            border-top: 5px solid #F8F9FA;
        }
    }
</style>