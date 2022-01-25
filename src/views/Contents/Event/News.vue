<template>
    <div>
        <v-img
            aspect-ratio="2"
            src="@/assets/Elements/FrontIMG/IMG_9038.jpg"
            class="d-flex align-end"
        >
            <h1 class="ml-3 mb-2" style="font-style: italic; font-size: 7vmin;">
                News <br/>Upcoming Events            
            </h1>
        </v-img>
        
        <div
            class="box"
        >
            <div v-for="(topic, index) in topics" :key="index">
                <h1 style="font-style: italic;"> {{ topic.name }} </h1>
                <hr style="width: 190px; height: 6px;" color="#002a5c">
                <div>
                    <div v-for="(subject, index) in topic.subjects" :key="index" style="position: ;">
                        <img class=" pt-10" :src=" subject.image" style="width: 35%;  position: relative; z-index: 2;">
                        <div class="display-1 pa-7" style="background-color: #A1A29E; position: relative; left: 15%; bottom: 75px; width: 85%;">
                            <div class="" style="width:75%; position: relative; left:25%;">
                                <h5 class="text-right" style="font-style: italic; ">{{ subject.title }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        topics: [
            {
                name: "Upcoming Events",
                subjects: [
                    {
                        title: "2020 Science Park Taichung Regional Competition",
                        image: require("@/assets/Elements/News/Events-News CTSP regional.jpg"),
                    },
                    {
                        title: "2020 Sillicon Valley Regional Competition",
                        image: require("@/assets/Elements/News/Events-News Silicon Valley Regional.png"),
                    },
                ],

            },
            {
                name: "News",
                subjects: [
                    {
                        title: "2020 Build Season",
                        image: require("@/assets/Elements/News/Events-News CTSP regional.jpg"),
                    },
                    {
                        title: "2019 Maker Festival",
                        image: require("@/assets/Elements/News/Events-News CTSP regional.jpg"),
                    },
                ],             
            },
        ],
    }),
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
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/event.scss";
</style>