<template>
  <div class='home'>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      >
      <v-layout
        align-center
        column
        justify-center
      >
        <h2>
          <p>
            Hello there
          </p>
        </h2>

        <h1>
          <p>
            My name is {{ abe.name }}. 
              <br>
            I put pieces of the web together with my tools.
          </p>
        </h1>

        <h3>
          I am a software engineer who crafts precise and aesthetically pleasing web apps.
            <br>
          I enjoy learning new tools and hwo to optimize the tools I already use.
        </h3>

          <br>

        <span class="iconlinks">
          <a href="https://www.github.com/ThundaHorse"><img
              src="https://image.flaticon.com/icons/png/512/3/3641.png"
              style="height: 30px; width: 30px; float: left;" atl="Github"></a>
          <a href="https://www.linkedin.com/in/abrahamtkim/"><img
              src="https://image.flaticon.com/icons/png/512/61/61109.png"
              style="height: 30px; width: 30px; float: left; margin-left: 10px;" atl="LinkedIn"></a>
        </span>
        
      </v-layout>
    </v-parallax>

    <div class="container" id="about">
      <div class="container">
      <h1>About me!</h1>
        <img src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/67352704_10156330133967791_2850526213322047488_o.jpg?_nc_cat=111&_nc_oc=AQn7nrLSFXn1CkNF3ci28Jk4dul2LMGm7haokbG5oE0jwxWxi2jLdyIpuMCOt2giehI0heFpGrvUF1RA2PYq0iv_&_nc_ht=scontent.fmia1-2.fna&oh=a5a06f80c67a15a67b35ce70de0d3971&oe=5DB6CEDB" style="width: auto; height: 250px; float: right; margin-right: 100px;">
      </div>

      <div class="container">
        <div class="font-weight-bold">
            <br>
          I'm a software engineer currently residing in Sunrise, FL originally from Atlanta, GA.
            <br>
          I graduated from Georgia State University with a degree in Political Science. 
            <br>
          During my undergraduated studies I started working for Apple and after graduating, I became 
            <br>
          a Senior Advisor for AppleCare. 
            <br>
          I studied software development on my own throughout highschool and my undergraduate studies, 
            <br> 
          Come 2019 I decided to attend Actualize Coding Bootcamp in Chicago, IL to pursue my passion. 
            <br>
          During my time at Actualize, I became familiar with the following technologies: 
        </div>
          <br>
        <li>Javascript (ES6)</li>  <b> • </b>
        <li>VueJS</li>  <b> • </b>
        <li>Ruby</li>  <b> • </b>
        <li>Ruby on Rails</li>  
        <br>
        <li>SQL</li>  <b> • </b>
        <li>HTML & CSS</li>  <b> • </b>  
        <li>Git & Bash</li>  <b> • </b>
        <li>PHP</li>  <b> • </b>
        <li>Laravel</li>
      </div>
    </div>
      
      <hr>
    
    <div class="container" id="exp">
      <h1 style="margin-left: 10px;">My Experience</h1>
        <br>
        <v-layout>
          <!-- <v-flex md10 offset-sm1> -->
          <v-card>
            <v-tabs
              v-model="active"
              color="cyan"
              :vertical="true"
              dark
              slider-color="yellow"
            >
              <v-tab
                v-for="n in 2"
                :key="n"
                ripple
              >
                <img :src="expText[n - 1].logo" style="height: 20px; width: auto">
              </v-tab>

              <v-tab-item
                v-for="n in expText"
                :key="n"
              >
                <v-card 
                  :dark="true"
                  :raised="true"
                  :width="600"
                  >
                  <v-card-title>
                    <h3>
                      {{ n.name }} 
                    </h3>
                  </v-card-title> 
                  <v-card-text>
                    {{ n.location }} <b>|</b> {{ n.years }}
                      <br>
                      <br>
                    <div class="font-weight-light"> {{ n.description }} </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          <!-- </v-flex> -->
          </v-card>
        </v-layout>
    </div>

      <hr>
    
    <div id="projects">
      <h1 style="margin-left: 20px;">Here's some stuff I worked on</h1>
      <v-parallax
      height="900"
      src="https://i.pinimg.com/originals/9d/4d/07/9d4d07ca7d591bb3cd3d9f4df2624bbf.jpg"
      >
        <v-layout column>
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item
                color="purple lighten-2"
                fill-dot
                right
              >
                <v-card dark elevation="30"> 
                  <v-card-title class="purple lighten-2">
                    <v-icon
                      dark
                      size="42"
                      class="mr-4"
                    >
                      mdi-magnify
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">Let's Go to Disney!</h2>
                  </v-card-title>
                  <v-container>
                    <h4>VueJS • Ruby on Rails • Ruby • Javascript</h4>
                      <br>
                    <v-layout>
                      <v-flex xs12 md10>
                        An app that used a Rails back-end and a VueJS front-end a user is able to create an account and log in to view user info in addition to creating an itinerary to plan a day at Disney, attraction wait times are updated in real-time by utilizing Action Cable and custom rake tasks in Rails that utilizes a custom script to be run at set intervals. in conjunction with the API to gather times, the script file access the Rails database and updates the attraction models which in turn is updated in the Vue app by Action Cable. 
                      </v-flex>
                      <v-flex
                        md2
                        hidden-sm-and-down
                        text-right
                      >
                        <v-icon size="64">mdi-calendar-text</v-icon>
                      </v-flex>
                    </v-layout>
                      <br>
                      <!-- Rake --> 
                      <span class="rake" style='float:left;'>
                        <div class="text-xs-center" id='rake'>
                          <v-dialog
                            v-model="dialog"
                            width="600"
                          >
                            <template v-slot:activator="{ on }">
                              <v-btn
                                color="teal lighten-2"
                                dark
                                v-on="on"
                              > 
                              Rake
                              </v-btn>
                            </template>
                      
                            <v-card
                              :dark="true"
                            >
                              <v-card-title
                                class="headline grey darken-1"
                                primary-title
                              >
                                Custom rake task
                              </v-card-title>
                              <v-card-text>
                                <img src="../../public/disney_app_pics/custom_rake.png" style="width: 500px; height: auto;">
                              </v-card-text>
                              <v-divider></v-divider>
                            </v-card>
                          </v-dialog>
                        </div>
                      </span>
                      <!-- Script --> 
                      <span class="script">
                        <div class="text-xs-center" id='script'>
                          <v-dialog
                            v-model="dialog"
                            width="1100"
                          >
                            <template v-slot:activator="{ on }">
                              <v-btn
                                color="green lighten-2"
                                dark
                                v-on="on"
                              > 
                              Script
                              </v-btn>
                            </template>
                      
                            <v-card
                              :dark="true"
                              width="1100"
                            >
                              <v-card-title
                                class="headline grey darken-1"
                                primary-title
                              >
                                Custom script file to access Node.js database 
                              </v-card-title>
                              <v-card-text>
                                <img src="../../public/disney_app_pics/disney_script.png" style="width: 1000px; height: auto;">
                              </v-card-text>
                              <v-divider></v-divider>
                            </v-card>
                          </v-dialog>
                        </div>
                      </span>
                  </v-container>
                </v-card>
              </v-timeline-item>
          
              <v-timeline-item
                color="amber lighten-1"
                fill-dot
                left
                small
              >
                <v-card dark elevation="30">
                  <v-card-title class="amber lighten-1 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">Tripper</h2>
                    <v-icon
                      dark
                      size="42"
                    >mdi-home-outline</v-icon>
                  </v-card-title>
                  <v-container>
                    <h4 style='text-align: right;'>Ruby on Rails • Ruby • VueJS • Javascript</h4>
                    <v-layout wrap>
                      <v-flex style="text-align: right;">
                          <br>
                        Utilized Twilio, Ngrok, Rails, VueJS to provide real-time flight status updates and monitoring and update users for flight information and statuses. Utilized API to gather airport codes and display relative locations for lodging and food. 
                          <br> 
                        Multi-page app that listed airports and options to sort flights by status, city, and flight status. Added option for only admins able to edit flights. In order to verify a user was an admin, utilized authentication and authorization in Rails back end.
                      </v-flex>
                        <br>
                      <span class="githubicon" style="float: right;">
                          <a href="https://github.com/ThundaHorse/tripper_vue_app"><img
                              src="https://image.flaticon.com/icons/png/512/3/3641.png"
                              style="height: 30px; width: 30px;" atl="tripperFront">Front</a>
                          <a href="https://github.com/ThundaHorse/tripper_app"><img
                              src="https://image.flaticon.com/icons/png/512/3/3641.png"
                              style="height: 30px; width: 30px;" atl="tripperBack">Back</a>
                      </span>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-timeline-item>
          
              <v-timeline-item
                color="cyan lighten-1"
                fill-dot
                right
              >
                <v-card dark elevation="30">
                  <v-card-title class="cyan lighten-1">
                    <v-icon
                      class="mr-4"
                      dark
                      size="42"
                    >
                      mdi-email-outline
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">Cost-Go</h2>
                  </v-card-title>
                  <v-container>
                    <h4>Sinatra • Ruby</h4>
                      <br>
                    <v-layout wrap>
                        Lightweight app that calculated cost comparison using Google Maps API to determine cost-benefit of public transportation vs vehicular travel. Utilized Sinatra to manage requests and view rendering. 
                          <br> 
                        User is able to input starting and ending destinations to view information such as distance, time to destination, trip duration.
                          <br>
                        <span class="githubicon" style="float:right; padding-top: 5px;">
                        <a href="https://github.com/ThundaHorse/costgo_app"><img
                            src="https://image.flaticon.com/icons/png/512/3/3641.png"
                            style="height: 30px; width: 30px;" atl="Github"></a>
                        </span>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-timeline-item>
          </v-timeline>
        </v-layout>
      </v-parallax>
        <hr>
    </div>  

  </div>
</template>

<style>
  li {
    display: inline;
  }
</style>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      abe: [],
      test: "", 
      dialogue: false,
      expText: [{
                logo: "https://anyonecanlearntocode.com/assets/actualize-logo-158d4b4cceb72d78f91dbd8bde4eabb9c71a2eba651c10dbc5d4cbf6c96c3afa.png",
                name: "Actualize • Web Developer", 
                description: "Completed immersive software development bootcamp and learned various framworks such as VueJS and Ruby on Rails Expanded existing knowledge in Ruby, Javascript, and Git. Honed skills in various fields such as paired programming, Adjusting to communication/personal styles.",
                years: "March 2019 - July 2019",
                location: "Chicago, IL"
              }, {
                logo: "https://image.flaticon.com/icons/png/512/23/23656.png",
                name: "Apple • Senior Advisor",
                description: " Solved technical issues regarding iOS, macOS, tvOS, and Apple ID account security. Handled escalated cases in both technical aspects as well as customer interactions. Communicated with engineering personnel to report bugs and troubleshooting to address issues. Documented cases precisely and kept open communication with team members and engineering team.",
                years: "June 2014 - March 2019",
                location: "Atlanta, GA"
              }]
    };
  },
  created: function() {
    axios.get('/abe').then(response => {
      this.abe = response.data; 
    })
  },
  methods: {
    redirButton(input) {
      window.location.replace(input);
    }
  }
};
</script>