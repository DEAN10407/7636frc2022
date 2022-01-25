<template>
    <div>
        <v-img
        aspect-ratio="2"
        src="@/assets/Elements/FrontIMG/MentorLeaderHeader.jpg"
        class="align-center"
        >
            <div class="fontImg">
                Our Mentors
            </div>
            
        </v-img>
        <div class="pa-10" style="background-color: #d5d5d5;">
            <div class="descript text-center" style="color: black;">
                No words can describe things our mentor did for us. <br>
                We couldn’t express more how thankful we are to their kindness help            
            </div>

        </div>
        <div class="pa-10" style="background-color: #fafafa">
            <div>
                <v-row>
                    <v-col
                     lg="6"
                     md="6"
                     sm="12"
                     class="text-center my-8 pa-6"
                     v-for="(mentor, index) in mentors" :key="index"
                     >
                        <div
                         style="color:black; background-color: #d5d5d5; font-style: italic; font-weight: bold; font-size: 5vmin;"
                         class="pa-4"
                        >
                            {{mentor.name}}
                        </div>
                        <div
                         style="color:black; font-style: italic; font-size: 4vmin; font-weight: bold;"
                         class="pa-10"
                        >
                            {{mentor.description}}
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        mentors:[
            {
                name: "SZU-YU CHEN",
                description: "SZU-YU CHEN is a teacher at NEHS@CTSP and is currently the teacher of the coding and technology course. He’s the mentor of Robomania, focusing on organizational management and support since it was established. He helps out all the administrative affairs in Robomania.",  
            },
            {
                name: "CHIA_CHUN LU",
                description: "CHIA-CHUN LU, our founding mentor, has done a lot since the establishment of the second year FRC team 7636. He is an expertized guide who also taught us priceless techniques, leading us to go through all trials, to fulfill our dream in robotics. Being a nominee of Woodie Flowers Award 2020, he had done a lot to be a model of FIRST.",  
            },
            {
                name: "YING-KAI LIAO",
                description: "YING-KAI LIAO has been the founding mentor from 2018 - 2019. He than graduate from NEHS and turn to be the mentor of 7636 right away. He is an expert in physics and mechanism, and he tutors us through design and assembles the robot by using professional methods. Ying Kai often helps us to deal with the mechanism of the robot and encourages team operation through great communications.",  
            },
            {
                name: "ZHAN-YU XU",
                description: "ZHAN-YU XU knows a lot of knowledge of robots, especially Electric Engineering and Coding. It is him who helps us with the Electric wiring and programming problem of robots. He also shows his precious spirits in the competition, which guided us and encourages us when facing problems and can’t get out. He is also the alumni of our school, NEHS@CTSP.",  
            },
        ]
    }),
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/about.scss";
</style>