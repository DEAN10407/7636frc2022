<template>
    <div>
        <iframe
            aspect-ratio="2"
            class="d-flex align-end"
            width="100%"
            height="500"
            frameborder="0"
            src="https://www.youtube.com/embed/gmiYWTmFRVE"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>

        <div 
         class="box"
        >
            <div style="background-color: #a3a3a3">
                <div class="pa-6 mx-auto" height="220">
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                            class="text-center my-auto"
                        >
                            <img src="@/assets/Elements/Everywhere-2020 Infinite Recharge.png" style="width: 95%">
                        </v-col>
                        <v-col order="2">
                            <div class="mb-2 titleSize ">
                                FRC 2020: Infinite Recharge
                            </div>
                            <div class="contentSize">
                                As for the theme 2020, two alliances work together to go on the games. During Teleop drivers take control of the droids, gaining points by collecting and shooting the Power Cells into the power ports, completing Control Panel to the specifised color or rotations, and hang on the Generator switch to defeat our enemies. To complete the missions, it means that our robot needs not only the technique of accurate-shooting but also the skills of controlling and smooth-moving, this will be a challenge for #7636 in 2020. We are willing to make the perfect robot that can do the best job. FRC#7636, May the force be with all of us.
                            </div>
                        </v-col>
                    </v-row>                    
                </div>
            </div>
            <v-card-text>
                <carousel-3d
                 :autoplay="true"
                 :autoplay-timeout="5000"        
                >      
                    <slide v-for="(image, index) in images"
                     :index="index"
                     :key="index"
                    >
                        <img :src="image.path" style="">
                    </slide>
                </carousel-3d>
            </v-card-text>
        </div>

    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageHeight () {
      // eslint-disable-next-line no-console
      console.log(document.body.clientWidth)
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 1
        case 'md': return 1
        case 'lg': return 3
        case 'xl': return 3
      }
    },
  },
data:()=>({
        images:[
            {
                path: require("@/assets/2020-2021/event/2020/1.jpg"),
            },
            {
                path: require("@/assets/2020-2021/event/2020/2.jpg"),
            },
            {
                path: require("@/assets/2020-2021/event/2020/3.jpg"),
            },
            {
                path: require("@/assets/2020-2021/event/2020/4.jpg"),
            },
            {
                path: require("@/assets/2020-2021/event/2020/5.jpg"),
            },
            
        ]
    }),
components: {
    Carousel3d,
    Slide
}
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/event.scss";
</style>