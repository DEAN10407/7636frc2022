<template>
    <div>
        <iframe
            aspect-ratio="2"
            class="d-flex align-end"
            width="100%"
            height="500"
            frameborder="0"
            src="https://www.youtube.com/embed/I77Dz9pfds4"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>

        <div 
         class="pa-10"
         style="background-color: #fafafa"
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
                                FRC 2021: Infinite Recharge
                            </div>
                            <div class="contentSize">
                                As for the theme 2021, in addition to using similar rules from last season, it also add a "Home Challenge". We have to programming to make robot can recognize the position of the powercell on the field to determine the trajectory to suck the powercell. In addition, we have a opportunity to design our own games for FRC, it may become a future season theme. Desipite the severe epidemic in the world, enthusiasm for robot drives us together. In the case of ensuring safety, we do our best to find new ways to participate in this game. FRC#7636, May the force be with all of us.
                            </div>
                        </v-col>
                    </v-row>                    
                </div>
            </div>
            
            <v-card-text>
                <carousel-3d>      
                    <slide v-for="i in 5" :index="i" :key="i">
                        <span></span>
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
data (){
    return{
        slides: 5,    
    }
},

components: {
    Carousel3d,
    Slide
}
}
</script>
<style>
.contentSize {
    font-size: 4vmin;
}
.titleSize {
    font-size: 8vmin;
    font-weight: bold;
}
</style>