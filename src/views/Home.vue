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
        <img src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/67352704_10156330133967791_2850526213322047488_o.jpg?_nc_cat=111&_nc_oc=AQn7nrLSFXn1CkNF3ci28Jk4dul2LMGm7haokbG5oE0jwxWxi2jLdyIpuMCOt2giehI0heFpGrvUF1RA2PYq0iv_&_nc_ht=scontent.fmia1-2.fna&oh=a5a06f80c67a15a67b35ce70de0d3971&oe=5DB6CEDB" style="width: auto; height: 250px; float: right;">
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
          <v-flex md10 offset-sm1>
            <v-tabs
              v-model="active"
              color="cyan"
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
                <v-card>
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
          </v-flex>
        </v-layout>
    </div>

      <hr>
    
    <div class="container" id="projects">
      <h1 style="margin-left: 20px;">Here's some stuff I worked on</h1>
      
      <div class="container">

        <div class="container">
          <div class="disney">
            <v-layout>
              <v-flex md8 offset-sm2>
                <span class="disney" style="float:right;">
                  <br>
                  <h1>Let's Go to Disney!</h1>
                    <hr>
                    <br>
                <h4 style="float: right;">VueJS • Ruby on Rails • Ruby • Javascript</h4>
                </span>
              </v-flex>
                <br>
            </v-layout>

            <v-layout>
              <v-flex md6 offset-sm1>
                <h4>
                  An app that used a Rails back-end and a VueJS front-end 
                    <br>
                  A user is able to create an account and log in to view user info
                    <br>
                  In addition to creating an itinerary to plan a day at Disney, attraction wait times are 
                    <br>
                  updated in real-time by utilizing Action Cable and custom rake tasks in Rails that 
                    <br>
                  utilizes a custom script to be run at set intervals. in conjunction with the API 
                    <br>
                  to gather times, the script file access the Rails database and updates the attraction 
                    <br>
                  models which in turn is updated in the Vue app by Action Cable. 
                </h4>
              </v-flex>
            </v-layout>
          </div>
            
            <br>

          <div class="costgo">
            <v-layout>
              <v-flex md6 offset-sm1>
                <span class="costgo" style="float:left;">
                  <br>
                  <br>
                    <h1>Cost-Go</h1>
                    <hr>
                  <br>
                <h4 style="float: right;">Ruby • Sinatra</h4>
                </span>
              </v-flex>
                <br>
            </v-layout>

            <v-layout>
              <v-flex md8 offset-sm2>
                <span class="costgo" style="float: right;">
                  <h4>
                    An app that used a Rails back-end and a VueJS front-end 
                      <br>
                    A user is able to create an account and log in to view user info
                      <br>
                    In addition to creating an itinerary to plan a day at Disney, attraction wait times are 
                      <br>
                    updated in real-time by utilizing Action Cable and custom rake tasks in Rails that 
                      <br>
                    utilizes a custom script to be run at set intervals. in conjunction with the API 
                      <br>
                    to gather times, the script file access the Rails database and updates the attraction 
                      <br>
                    models which in turn is updated in the Vue app by Action Cable. 
                  </h4>
                </span>
              </v-flex>
            </v-layout>
          </div>
            
            <br>

          <div class="tripper">
            <v-layout>
              <v-flex md8 offset-sm2>
                <span class="tripper" style="float:right;">
                    <br>
                    <br>
                  <h1>Tripper</h1>
                    <hr>
                    <br>
                <h4 style="float: right;">Ruby on Rails • Ruby • VueJS • Javascript</h4>
                </span>
              </v-flex>
                <br>
            </v-layout>

            <v-layout>
              <v-flex md6 offset-sm1>
                <h4>
                  An app that used a Rails back-end and a VueJS front-end 
                    <br>
                  A user is able to create an account and log in to view user info
                    <br>
                  In addition to creating an itinerary to plan a day at Disney, attraction wait times are 
                    <br>
                  updated in real-time by utilizing Action Cable and custom rake tasks in Rails that 
                    <br>
                  utilizes a custom script to be run at set intervals. in conjunction with the API 
                    <br>
                  to gather times, the script file access the Rails database and updates the attraction 
                    <br>
                  models which in turn is updated in the Vue app by Action Cable. 
                </h4>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </div>
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