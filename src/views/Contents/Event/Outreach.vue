<template>
  <div>
    <v-img
      aspect-ratio="2"
      src="@/assets/2020-2021/outreach/outreach_main.jpg"
      class="d-flex align-end"
    >
      <h1 class="ml-3 mb-2" style="font-style: italic; font-size: 7vmin;">
        Outreach
      </h1>
    </v-img>

    <div class="box">
      <Timeline
        class="test"
        :timeline-items="timelineItems"
        :message-when-no-items="messageWhenNoItems"
        :dateLocale="zh-tw"
      />
    </div>
  </div>
</template>

<script>
// const Timeline = require('timeline-vuejs');
import Timeline from "timeline-vuejs";
export default {
  data: () => ({
    //Don't know why, the month display will increase one
    messageWhenNoItems: "There are not items",
    timelineItems: [
      {
        from: new Date(2020, 8, 11), 
        title: "Results presentation",
        showDayAndMonth: true,
        description: 
          "",
      },
      {
        from: new Date(2020, 7, 23),
        title: "Communicate with team 7130",
        showDayAndMonth: true,
        description:
          "During the summer vacation, team7130 invited us and team 6998 for technical exchanges and sharing." +  
          "We briefly introduced each other's team's team structure, responsible positions and future plans." +
          "We discussed how each other effectively used limited resources and funds to build a team that can compete with other teams in the world" +
          "Each team has different characteristics, believe this exchange will let us learn a lot!",
      },
      
    ],
  }),

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageHeight() {
      // eslint-disable-next-line no-console
      console.log(document.body.clientWidth);
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 1;
        case "md":
          return 1;
        case "lg":
          return 3;
        case "xl":
          return 3;
      }
    },
  },
  components: {
    Timeline,
  },
  methods: {
    changePath(goToPath) {
      this.$router.push(goToPath).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/event.scss";
</style>
