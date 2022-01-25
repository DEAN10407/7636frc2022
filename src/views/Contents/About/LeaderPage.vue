<template>
    <div>
        <v-img
            aspect-ratio="2"
            src="@/assets/Elements/FrontIMG/MentorLeaderHeader.jpg"
            class="align-center"
            >
            <div class="text-center" style="color: white; font-size: 8vmin; font-weight: bold;">
                Student Team Leaders
            </div> 
        </v-img>
        <div class="box">
            <div 
                class="pa-12 mx-auto" 
            >
                <v-row 
                 no-gutters
                 v-for="(year, index) in years"
                 :key="index"
                >
                    <div style="width:100%;">
                        <div class="text-center" style="color: black; font-size: 6vmin; font-weight: bold;">
                            {{index}}
                        </div> 
                        <hr style="width:90%;" color="#000" class="mx-auto mb-2">
                    </div>
                    <v-col 
                     lg="6"
                     md="6"
                     sm="12"
                     v-for="(info) in year"
                     :key="info.title"
                     class="text-center my-8"
                    >
                        <div >
                            <div class="title">
                                {{ info.title }}
                            </div>
                            <hr style="width: 60%;" color="#000" class="mx-auto mb-2">
                            <div class="content">
                                {{ info.name }}
                            </div>
                            <div class="content">
                                {{ info.email }}
                            </div>                             
                        </div>
                 
                    </v-col>
                </v-row>
            </div>
        </div>        
    </div>

</template>

<script>
export default {
    data: ()=> ({
        years:
            { 
                "2020-2021": [
                    {
                        title: "TEAM LEADER",
                        name: "Ting-YU HUANG", 
                        email: "taxihuang030926@gmail.com",
                    },
                    {
                        title: "CHIEF EXECUTIVE OFFICER",
                        name: "Shih-Chih YANG", 
                        email: "sandra921120@gmail.com",
                    },
                    {
                        title: "LEADER OF MECHANISM",
                        name: "Yu-Fan LIU", 
                        email: "evon40520@gmail.com",
                    },
                    {
                        title: "CO-LEADER OF MECHANISM",
                        name: "Yi-Jie LIN", 
                        email: "jimlin507@gmail.com",
                    },
                    {
                        title: "LEADER OF E.E. & PROGRAM",
                        name: "Jian-Zhe SU", 
                        email: "9987jdvrb@gmail.com",
                    },
                    {
                        title: "CO-LEADER OF E.E. & PROGRAM",
                        name: "Chia-Chung WU", 
                        email: "jonathanwu9377@gmail.com",
                    },
                    {
                        title: "LEADER OF STRATEGY & SCOUTING",
                        name: "Chih-Chieh ZHANG", 
                        email: "zzhijie25@gmail.com",
                    },
                    {
                        title: "CO-LEADER OF STRATEGY & SCOUTING",
                        name: "Yi-Hsuan HUNG", 
                        email: "m40133246856856@gmail.com",
                    },
                    {
                        title: "MANAGER OF GENERAL AFFAIRS",
                        name: "Pin-Ling HUANG", 
                        email: "pinling817@gmail.com",
                    },
                    {
                        title: "CO-MANAGER OF GENERAL AFFAIRS",
                        name: "", 
                        email: "",
                    },
                ],
                "2019-2020": [
                    {
                        title: "TEAM LEADER",
                        name: "Tung-Lun YANG", 
                        email: "protire0821@gmail.com",
                    },
                    {
                        title: "CHIEF EXECUTIVE OFFICER",
                        name: "Che-Wei CHANG", 
                        email: "benson200338#gmail.com",
                    },
                    {
                        title: "LEADER OF MECHANISM",
                        name: "Yu-Hsuan WANG", 
                        email: "h710096@nehs.tc.edu.tw",
                    },
                    {
                        title: "CO-LEADER OF MECHANISM",
                        name: "Chia-Chien CHEN", 
                        email: "bananaaa0203@gmail.com",
                    },
                    {
                        title: "LEADER OF E.E. & PROGRAM",
                        name: "Liang-Xiang ZHANG", 
                        email: "h710120@nehstc.edu.tw",
                    },
                    {
                        title: "CO-LEADER OF E.E. & PROGRAM",
                        name: "Shih-Siang YANG", 
                        email: "h710092@nehs.tc.edu.tw",
                    },
                    {
                        title: "LEADER OF STRATEGY & SCOUTING",
                        name: "Deng-Jie YANG", 
                        email: "h710061@nehs.tc.edu.tw",
                    },
                    {
                        title: "CO-LEADER OF STRATEGY & SCOUTING",
                        name: "Kai-Chieh HUANG", 
                        email: "h710123@nehs.tc.edu.tw",
                    },
                    {
                        title: "MANAGER OF GENERAL AFFAIRS",
                        name: "Yu-Chen TSAI", 
                        email: "h710107@nehs.tc.edu.tw",
                    },
                    {
                        title: "CO-MANAGER OF GENERAL AFFAIRS",
                        name: "Sen-Huei TONG", 
                        email: "h710028@nehs.tc.edu.tw",
                    },
                ],
                
            }
    }),
   
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/about.scss";
</style>