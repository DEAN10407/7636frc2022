<template>
  <v-footer dark padless>
    <div id="footerSponsor">
      <v-row class="justify-center align-center">
        <v-col
          cols="6"
          class="text-center pt-10 my-8 pa-6"
          v-for="(sponsor, index) in sponsors"
          :key="index"
        >
          <a :href="sponsor.path">
            <img 
              :src="sponsor.logo"
              class="sponsorsLogo"
              style="height: 15%; width: 15%"
            />
          </a>
        </v-col>
      </v-row>
    </div>
    <v-row class="mt-5">
      <v-col cols="12" md="3" id="frclogo">
        <img src="../assets/FIRST_logo.png" />
      </v-col>

      <v-col
        cols="12"
        md="2"
        id="footerMenu"
        v-for="(item, index) in items"
        :key="`footer-${index}`"
      >
        <div class="title">{{ item.title }}</div>
        <hr>
        <div
          v-for="(link, index) in item.links"
          class="title"
          :key="`link-${index}`"
        >
          <router-link class="no-underline white--text" :to="link.path">
            {{ link.name }}
          </router-link>
        </div>
      </v-col>

      <v-col cols="12" md="3" class="contact">
        <p>Contact Us</p>
        <v-btn
          v-for="(icon, index) in icons"
          :key="`icon-${index}`"
          class="white-text"
          :href="icon.path"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.title }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    sponsors: [
      {
        logo: require("@/assets/Elements/Sponsor/CTSP.png"),
        path: "https://www.ctsp.gov.tw/chinese/00-Home/home.aspx?v=1",
      },
      {
        logo: require("@/assets/Elements/Sponsor/NEHSCTSP.png"),
        path: "http://www.nehs.tc.edu.tw/index.php",
      },
    ],
    icons: [
      {
        title: "mdi-facebook",
        path: "https://www.facebook.com/7636.Robomania",
      },
      {
        title: "mdi-youtube",
        path: "https://www.youtube.com/channel/UCXFLKnRlpTNMn2aaLVM9H6g",
      },
      {
        title: "mdi-instagram",
        path: "https://www.instagram.com/frc7636_robomania/",
      },
      {
        title: "mdi-twitch",
        path: "https://www.twitch.tv/frc7636robomania"
      },
      {
        title: "mdi-email",
        path: "",
      },
    ],
    items: [
      {
        title: "About",
        links: [
          {
            name: "FIRST",
            path: "/FIRST",
          },
          {
            name: "Team #7636",
            path: "/Team 7636",
          },
        ],
      },
      {
        title: "OUTREACH",
        links: [
          {
            name: "Outreach",
            path: "/Outreach",
          },
          {
            name: "Our Sponsors",
            path: "/sponsor",
          },
        ],
      },
      {
        title: "MEMBERS",
        links: [
          {
            name: "Mentors",
            path: "/Mentor",
          },
          {
            name: "Leaders",
            path: "/Leader",
          },
        ],
      },
    ],
  }),
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 100;
        case "md":
          return 100;
        case "lg":
          return 200;
        case "xl":
          return 200;
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/footer.scss";
</style>
