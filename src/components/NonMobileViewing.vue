<template>
  <div class='nonmobile' :id="nonMobile">
    <div class="intro">
      <v-parallax
        dark
        height="100%"
        src="https://appcyla.files.wordpress.com/2015/02/m1.jpg"
        > 
        <div class="box-left-mini" style="height: inherit;">
            <div class="front">
              <span>
                <div class="hidden-xs-and-down">
                  <v-layout justify-center>
                    <div class="intro">
                      <h2>
                        <h1>
                          {{ greeting() }}
                        </h1>
                      </h2>

                      <h1>
                        <p>
                          My name is Abraham Kim. 
                            <br>
                          I put pieces of the web together with my tools.
                        </p>
                      </h1>

                      <h3>
                        I'm a software engineer who crafts precise and aesthetically pleasing web apps.
                          <br>
                        Exploring new languages and frameworks is what I enjoy among many other things. 
                          <br>
                        Honing my skills to create efficient and concise code is my goal.
                      </h3>

                        <!-- <br> -->

                      <span class="iconlinks">
                        <a href="https://www.github.com/ThundaHorse"><img
                            src="https://image.flaticon.com/icons/png/512/3/3641.png"
                            style="height: 30px; width: 30px; float: left;" atl="Github"></a>
                        <a href="https://www.linkedin.com/in/abrahamtkim/"><img
                            src="https://image.flaticon.com/icons/png/512/61/61109.png"
                            style="height: 30px; width: 30px; float: left; margin-left: 10px;" atl="LinkedIn"></a>
                      </span>

                    </div>
                  </v-layout>
                </div>
              </span>
            </div>
          <div class="behind_container">
            <div class="behind">
              <vue-particles
                color="#dedede"
                :particleOpacity="0.4"
                :particlesNumber="70"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="250"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
              ></vue-particles>
            </div>        
          </div>
        </div>

      </v-parallax>
    </div>
      <!-- Non-mobile About -->
    <div class="about">
      <div class="hidden-xs-and-down about">
        <v-parallax
          height="100%"
          src="https://i.redd.it/4pgc1u4rdrv21.jpg"
        >
        <v-flex mb-5 column justify-center>
          <v-container mb-5>
            <section v-scroll-reveal.reset="{ delay: 300 }">
                <br>
              <h1 style="margin-left: 10px;">About me!</h1>
                <br>
                <v-layout
                  align-center
                  column
                  justify-center
                  >
                  <v-avatar size="220">
                    <v-img src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/67352704_10156330133967791_2850526213322047488_o.jpg?_nc_cat=111&_nc_oc=AQn7nrLSFXn1CkNF3ci28Jk4dul2LMGm7haokbG5oE0jwxWxi2jLdyIpuMCOt2giehI0heFpGrvUF1RA2PYq0iv_&_nc_ht=scontent.fmia1-2.fna&oh=a5a06f80c67a15a67b35ce70de0d3971&oe=5DB6CEDB" position="top 15%"></v-img>
                  </v-avatar>
                  <v-layout
                    align-center
                    column
                    justify-center
                    >					            
                    <div class="font-weight-bold" style="text-align: center;">
                      <h3>
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
                      </h3>
                    </div>
                      <br>
                    <div id="techs">
                      <li>Javascript (ES6)</li>  <b> • </b>
                      <li>VueJS</li>  <b> • </b>
                      <li>React</li> <b> • </b>
                      <li>Ruby</li>  <b> • </b>
                      <li>Ruby on Rails</li>  
                      <br>
                      <li>SQL</li>  <b> • </b>
                      <li>Express</li> <b> • </b>
                      <li>HTML & CSS</li>  <b> • </b>  
                      <li>Git & Bash</li>  <b> • </b>
                      <li>PHP</li>  <b> • </b>
                      <li>Laravel</li>
                    </div>	                				                 
                  </v-layout>
                </v-layout>
              <br>
              <hr>
          
              <div class="container" id="exp">
                <h1 style="margin-left: 10px;">My Experience</h1>
                  <br>
                  <v-layout align-center>
                    <v-item-group
                      v-model="window"
                      class="shrink mr-6"
                      mandatory
                      tag="v-flex"
                    >
                      <v-item
                        v-for="n in length"
                        :key="n"
                        v-slot:default="{ active, toggle }"
                      >
                        <div>
                          <v-btn
                            :input-value="active"
                            icon
                            @click="toggle"
                          >
                            <v-icon>mdi-record</v-icon>
                            <img :src="expText[n - 1].logo" style="height: 20px; width: auto">
                          </v-btn>
                        </div>
                      </v-item>
                    </v-item-group>
                
                    <v-flex>
                      <v-window
                        dark
                        v-model="window"
                        class="elevation-3"
                        vertical
                      >
                        <v-window-item
                          v-for="n in expText"
                          :key="n"
                        >
                          <v-card dark>
                            <v-card-text>
                              <v-layout align-center mb-4>
                                <strong class="title">{{ n.name }}</strong>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                  <v-icon>mdi-account</v-icon>
                                </v-btn>
                              </v-layout>
                              <p>{{ n.years }} • <b>{{ n.location }}</b></p>
                              <p>{{ n.description }}</p>
                            </v-card-text>
                          </v-card>
                        </v-window-item>
                      </v-window>
                    </v-flex>
                  </v-layout>
                  <!-- <br> -->
                  <!-- <br> -->
          <!-- Non-mobile skills -->
        <v-container class="hidden-xs-and-down">
          <h1>Skills</h1>
            <br />
          <v-flex>
            <v-card dark raised mb-2>
              <v-layout id="proficiency" 
                align-center justify-space-between row fill-height
              >
                <v-layout mt-2 column align-center justify-center>
                  <v-progress-circular id="ruby" class="mx-5" :value="90" :size="85" :width="5" color="red">
                    <img src="https://assets.webiconspng.com/uploads/2017/09/Ruby-PNG-Image-57218.png"
                      style="height: 30px; width: 30x;" alt="Ruby">
                  </v-progress-circular>    
                    <br>
                    <p>Ruby</p>
                </v-layout>          

                <v-layout mt-2 column align-center justify-center>
                  <v-progress-circular id="rubyonrails" class="mx-5" :value="85" :size="85" :width="5" color="red darken-4">
                    <img src="https://www.e-yug.com/wp-content/uploads/2017/07/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5-350x350.png" style="height: auto; width: 40px;" alt="ror">
                  </v-progress-circular>
                    <br>
                  <p>Ruby on Rails</p>
                </v-layout>

                <v-layout mt-2 column align-center justify-center>
                  <v-progress-circular id="js" class="mx-5" :value="80" :size="85" :width="5" color="green">
                    <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"
                              style="height: auto; width: 55px;" alt="Javascript">
                  </v-progress-circular> 
                      <br>
                    <p>Javascript(ES6)</p>
                </v-layout>

                <v-layout mt-2 column align-center justify-center>
                  <v-progress-circular id="vue" class="mx-5" :value="85" :size="85" :width="5" color="lime">
                    <img src="https://vuejs.org/images/logo.png" style="height: auto; width: 35px;" alt="VueJS">
                  </v-progress-circular>
                      <br>
                    <p>VueJS</p>
                </v-layout>
                
                <v-layout mt-2 column align-center justify-center>
                  <v-progress-circular id="php" class="mx-5" :value="35" :size="85" :width="5" color="blue lighten-1">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                              style="height: 30px; width: auto;" alt="PHP">
                  </v-progress-circular> 
                      <br>
                      <p>React</p>
                </v-layout>
                    <br>

                <v-layout mt-2 column align-center justify-center>
                  <v-progress-circular id="html_css" class="mx-5" :value="80" :size="85" :width="5" color="yellow">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/640px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"
                      style="height: 30px; width: auto;" alt="HTML and CSS">
                  </v-progress-circular> 
                      <br>
                    <p>HTML & CSS</p>
                </v-layout>
                
                <v-layout mt-2 column align-center justify-center>
                  <v-progress-circular id="php" class="mx-5" :value="40" :size="85" :width="5" color="purple lighten-3">
                    <img src="https://i.ya-webdesign.com/images/elephants-svg-nursery-6.png"
                              style="height: 30px; width: auto;" alt="PHP">
                  </v-progress-circular> 
                      <br>
                      <p>PHP</p>
                </v-layout>                
              </v-layout>
            </v-card>
          </v-flex>
        </v-container>
              </div>  
            </section>
          </v-container>
          </v-flex>
        </v-parallax>
      </div>
    </div>
        <!-- Non-mobile projects -->
    <div class="hidden-xs-and-down project">
      <div id="desktop-projects">
        <v-parallax
          height="100%"

          src="https://www.zaigham.xyz/wp-content/uploads/2018/01/material_design_wallpaper_red_034_by_charlie_henson-daa22ts.png"
        >
          <v-flex mr-2 ml-2 mt-1 mb-5 style="overflow:visible">      
            <section v-scroll-reveal.reset="{ delay: 300 }">
                <br>
              <h1 style="margin-left: 20px;">Here's some stuff I worked on</h1>
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
                              <span class="front-back" style="float: right;">
                                  <v-btn href='https://github.com/ThundaHorse/tripper_vue_app' color="red lighten-2">
                                    Front End
                                  </v-btn>
                                  <v-btn href="https://github.com/ThundaHorse/tripper_app" color="blue purple-lighten-2">
                                    Back End
                                  </v-btn>                                    
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
                                  <v-btn color="purple lighten-2" href="https://github.com/ThundaHorse/costgo_app">
                                    Repository
                                  </v-btn>
                                </span>
                            </v-layout>
                          </v-container>
                        </v-card>
                      </v-timeline-item>
                  </v-timeline>
                </v-layout>
            </section>
          </v-flex>
        </v-parallax>
      </div>
    </div>
      <hr> 
  </div>
</template>

<style>
  li {
    display: inline;
  }
  .box-left-mini .front {
      z-index: 5;
      position: absolute;
      left: 0;
      top: 40%;
      width: 100%;
  }
  .box-left-mini .behind_container {
    position: relative;
    height: inherit;
    /* top: -18px; */
  }
  .box-left-mini .behind {
    display: block;
    z-index: 3;
    height: inherit;
  }
</style>

<script>
export default {
  name: 'NonMobile',
  data: function() {
    return {
      isMobile: false,
      length: 2,
      window: 0,
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
   
  },
  methods: {
    redirButton(input) {
      window.location.replace(input);
    },
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    greeting() {
      var time = new Date(); 
      var timeObj = {
        hours: time.getHours() < 10 ? `0${time.getHours}` : time.getHours(),     
        timeOfDay: time.getHours() < 12 ? 'AM' : 'PM'
      }
      return timeObj.hours < 12 ? 'Good morning!' : timeObj.hours > 12 && timeObj.hours < 17 ? 'Good afternoon!' : 'Good evening!';
    },
    onLinkClick() {
      document.getElementById('description').scrollIntoView();
    }    
  }
};
</script>