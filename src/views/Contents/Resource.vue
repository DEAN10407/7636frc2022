<template>
    <div>
        <v-img
        aspect-ratio="2"
        src="@/assets/Elements/FrontIMG/Resource.jpg"
        class="align-center"
        >
            <h1 class="text-center" style="color: white; font-size: 9vmin; font-weight: bold;">
                Resource            
            </h1>
        </v-img>
        <div class="box">
            <v-row justify="center">
                <v-expansion-panels inset focusable>
                <v-expansion-panel
                    v-for="(resource, index) in resources"
                    :key="index"
                    style="background: #a3a3a3; color: white"
                >
                    <v-expansion-panel-header>{{resource.name}}</v-expansion-panel-header>
                    <v-expansion-panel-content class="mt-6">
                        <a :href="resource.path">{{resource.content}}
                        </a>	                        
                    </v-expansion-panel-content>                
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </div>
    </div>
</template>

<style type = “text/css”>
    a {font-size:16px}
    a:link {color: #132473; text-decoration:none;} 
    a:active {color: red;} 
    a:visited {color:purple;text-decoration:none;} 
    a:hover {color: red; text-decoration:underline;} 
</style> 

<script>
export default {
    data: ()=> ({
        resources:[
            {
                name: "Program",
                content: "FRC7636 SYZYGY 5.0 (2020-2021)",
                path: "https://github.com/FRC7636Robomania/Hello2021",
            },
            {
                name: "CAD",
                content: "FRC7636 SYZYGY 5.0 (2020-2021)",
                path: "https://workbench.grabcad.com/workbench/projects/gcFCUvE30irQJF9zINyaG700-59XvjSlETyPKP0pXtyOKE#/space/gca7Hg4kUZGLPHRQUQ4WU5RoRx2ANhhlRO8Qvgbf4TVt9q",
            },
            {
                name: "Video",
                content: "Here will have video very soon",
                path: "",
            },
        ]
    }),
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/resource.scss";
</style>