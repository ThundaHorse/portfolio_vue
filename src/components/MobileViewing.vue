<template>
  <div class='mobile' :id="mobile">
    <v-parallax
      dark
      height="100%"
      src="https://appcyla.files.wordpress.com/2015/02/m1.jpg"
      > 

      <div class="box-left-mini" style="height: inherit;">
        <div class="front">
          <span>
            <div class="down">
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

                    <br>

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
    <v-parallax
      height="1050"
      src="https://appcyla.files.wordpress.com/2015/02/m1.jpg"
    >
      <v-container class="hidden-sm-and-up">
        <v-layout
          align-center
          column
          justify-center
        >
          <v-container class="hidden-sm-and-up">
            <span class="animation" animation>
              <div v-if="show">
                <h2>
                  <p>
                    {{ greeting() }}
                  </p>
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

                  <br>

                <span class="iconlinks">
                  <a href="https://www.github.com/ThundaHorse"><img
                      src="https://image.flaticon.com/icons/png/512/3/3641.png"
                      style="height: 30px; width: 30px; float: left;" atl="Github"></a>
                  <a href="https://www.linkedin.com/in/abrahamtkim/"><img
                      src="https://image.flaticon.com/icons/png/512/61/61109.png"
                      style="height: 30px; width: 30px; float: left; margin-left: 10px;" atl="LinkedIn"></a>
                </span>

              </div>
            </span>
          </v-container>
        </v-layout>
      </v-container>
    </v-parallax>
      
      <hr>
      <!-- Mobile About -->
    <div class="hidden-sm-and-up about">
      <v-parallax
        height="1080"
        src="https://i.redd.it/4pgc1u4rdrv21.jpg"
      >
      <v-flex xs12 style="overflow:visible">      
        <section v-scroll-reveal.reset="{ delay: 300 }">
            <br>
          <h1 id="aboutme" style="margin-left: 10px;">About me!</h1>
            <br>
          <!-- <transition v-if="show" name="slide-fade"> -->
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
                  <div class="font-weight-bold" style="text-align: center;" id="description">
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

          <!-- </transition> -->
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
                    dark="true"
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

              <div class="text-xs-center" id='proficiency' @click.stop>
                <v-dialog
                  v-model="dialogue"
                  width="auto"
                  scrollable="true"
                >
                  <v-btn
                    fab
                    color="teal lighten-2"
                    right
                    x-small
                    absolute
                    @click="dialogue = !dialogue"
                  >X</v-btn>
                
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="teal lighten-2"
                      dark
                      small
                      v-on="on"                       
                    > 
                    Skills
                    </v-btn>
                  </template>
            
                  <v-card
                    :dark="true"
                    align-center 
                    justify-center
                  >
                    <v-card-title
                      class="headline grey darken-1"
                      primary-title
                    >
                      Proficiencies
                    </v-card-title>
                    <v-card-text>
                      <v-container class="hidden-sm-and-up">
                        <!-- <h1>Proficiency</h1> -->
                          <!-- <br> -->
                        <v-flex>
                          <v-card dark raised>
                            <v-layout id="proficiency" 
                              align-center
                              row
                              justify-center
                            >
                              <v-layout column align-center justify-center mt-4>
                                <v-progress-circular id="ruby" class="mx-5" :value="90" :size="100" :width="8" color="red">
                                  <img src="https://assets.webiconspng.com/uploads/2017/09/Ruby-PNG-Image-57218.png"
                                    style="height: 30px; width: 30x;" alt="Ruby">
                                </v-progress-circular>    
                                  <br>
                                  <p>Ruby</p>
                                  <br>
                                <v-progress-circular id="rubyonrails" class="mx-5" :value="85" :size="100" :width="8" color="red darken-4">
                                  <img src="https://www.e-yug.com/wp-content/uploads/2017/07/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5-350x350.png" style="height: auto; width: 40px;" alt="ror">
                                </v-progress-circular>
                                  <br>
                                <p>Ruby on Rails</p>
                                  <br>
                                <v-progress-circular id="js" class="mx-5" :value="80" :size="100" :width="8" color="green">
                                  <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"
                                            style="height: auto; width: 55px;" alt="Javascript">
                                </v-progress-circular> 
                                    <br>
                                  <p>Javascript(ES6)</p>
                                    <br>
                                <v-progress-circular id="vue" class="mx-5" :value="85" :size="100" :width="8" color="lime">
                                  <img src="https://vuejs.org/images/logo.png" style="height: auto; width: 35px;" alt="VueJS">
                                </v-progress-circular>
                                    <br>
                                  <p>VueJS</p>
                                    <br>
                                <v-progress-circular id="php" class="mx-5" :value="35" :size="100" :width="8" color="blue lighten-1">
                                  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                            style="height: 30px; width: auto;" alt="PHP">
                                </v-progress-circular> 
                                    <br>
                                    <p>React</p>
                                    <br>
                                  <v-progress-circular id="html_css" class="mx-5" :value="80" :size="100" :width="8" color="yellow">
                                  <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/640px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"
                                    style="height: 30px; width: auto;" alt="HTML and CSS">
                                </v-progress-circular> 
                                    <br>
                                  <p>HTML & CSS</p>
                                    <br>
                                <v-progress-circular id="php" class="mx-5" :value="40" :size="100" :width="8" color="purple lighten-3">
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
                    </v-card-text>
                    <v-divider></v-divider>
                  </v-card>
                </v-dialog>
              </div>
          </div>  
        </section>
      </v-flex>        
      </v-parallax>
    </div>
        <hr>
    
    <!-- Mobile projects -->
    <div class="hidden-sm-and-up project">
      <!-- <div id="projects"> -->
        <v-parallax
          height="100%"
          src="https://www.zaigham.xyz/wp-content/uploads/2018/01/material_design_wallpaper_red_034_by_charlie_henson-daa22ts.png"
        >
          <v-layout justify center>
            <!-- <v-flex xs12>       -->
              <section v-scroll-reveal.reset="{ delay: 300 }">
                  <br>
          <v-flex>
                <h1 style="margin-left: 20px;">Here are some projects that I worked on!</h1>
            <v-container>
              <v-app id="projects" style="background-color: rgb(0, 0, 0, 0);">
                <v-layout align-center justify-center column>

                  <v-timeline dark>
                    <v-timeline-item>
                      <div class="disney" id="disney" style="padding-right: 140px;">
                        <v-dialog dark v-model="projects.disney" width="600px">
                          <v-btn
                              fab
                              color="blue lighten-2"
                              right
                              x-small
                              fixed
                              @click="projects.disney = !projects.disney"
                            >X</v-btn>
                          <template v-slot:activator="{ on }">
                            <v-btn color="blue lighten-2" dark v-on="on">Let's Go to Disney!</v-btn>
                          </template>
                          <v-card dark elevation='30' height="490">
                          
                            <v-card-text>
                              <br>
                              <br>
                              <br>
                              <h4 style='text-align: center;'>VueJS • Ruby on Rails • Ruby • Javascript</h4>
                                <br>
                              <v-layout>
                                <v-layout wrap>
                                  <v-flex style="text-align: center;">
                                    An app that used a Rails back-end and a VueJS front-end a user is able to create an account and log in to view user info in addition to creating an itinerary to plan a day at Disney, attraction wait times are updated in real-time by utilizing Action Cable and custom rake tasks in Rails that utilizes a custom script to be run at set intervals. in conjunction with the API to gather times, the script file access the Rails database and updates the attraction models which in turn is updated in the Vue app by Action Cable. 
                                  </v-flex>
                                </v-layout>
                              </v-layout>
                                <br>
                                <!-- Rake --> 
                                <span class="rake" style='float:left;'>
                                  <div class="text-xs-center" id='rake'>
                                    <v-dialog
                                      v-model="projects.rake"
                                      width="100%"
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
                                        width="600"
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
                                <span class="script" style='float:right'>
                                  <div class="text-xs-center" id='script'>
                                    <v-dialog
                                      v-model="projects.script"
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
                            </v-card-text>
                          </v-card>
                        </v-dialog>
                      </div>
                    </v-timeline-item>

                    <v-timeline-item>
                      <div class="tripper" id="tripper" style="padding-left: 1px;">
                        <v-dialog dark v-model="projects.tripper" width="600px">
                          <v-btn
                              fab
                              color="purple lighten-2"
                              right
                              x-small
                              absolute
                              @click="projects.tripper = !projects.tripper"
                            >X</v-btn>
                          <template v-slot:activator="{ on }">
                          <v-btn color="purple lighten-2" dark v-on="on">Tripper</v-btn>
                          </template>
                          <v-card dark elevation='30'>
                            <v-card-text>
                              <br>
                              <br> 
                              <v-container>
                                <h4 style='text-align: center'>Ruby on Rails • Ruby • VueJS • Javascript</h4>
                                <v-layout wrap>
                                  <v-flex style="text-align: center;">
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
                            </v-card-text>
                          </v-card>
                        </v-dialog>
                      </div>
                    </v-timeline-item>

                    <v-timeline-item>
                      <div class="costGo" id="costGo">
                        <v-dialog dark v-model="projects.costGo" width="600px">
                          <v-btn
                              fab
                              color="green"
                              right
                              x-small
                              absolute
                              @click="projects.costGo = !projects.costGo"
                            >X</v-btn>
                          <template v-slot:activator="{ on }">
                            <v-btn color="green" dark v-on="on">Cost-Go</v-btn>
                          </template>
                          <v-card dark elevation='30'>
                            <v-card-text>
                              <v-container>
                                <h4 style='text-align: center;'>Sinatra • Ruby</h4>
                                  <br>
                                <v-flex style="text-align: center;">
                                    Lightweight app that calculated cost comparison using Google Maps API to determine cost-benefit of public transportation vs vehicular travel. Utilized Sinatra to manage requests and view rendering. 
                                      <br> 
                                    User is able to input starting and ending destinations to view information such as distance, time to destination, trip duration.
                                      <br>
                                      <br>
                                      <v-btn center color="purple lighten-2" href="https://github.com/ThundaHorse/costgo_app">
                                        Repository
                                      </v-btn>
                                  </v-flex>
                                </v-container>
                              </v-card-text>
                            </v-card>
                        </v-dialog>
                      </div>
                    </v-timeline-item>
                  </v-timeline>

                </v-layout>
              </v-app>
            </v-container>
        </v-flex>
              </section>        
            <!-- </v-flex> -->
          </v-layout>

        </v-parallax>
      </div>
    </div>
  
  </template>

<style>
  parallax.projects {
    min-height: 812px;
  }
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
  name: 'MobileView',
  props: [],
  data: function() {
    return {
      isMobile: false,
      length: 2,
      window: 0,
      show: true, 
      dialogue: false,
      projects: {
        disney: false,
        rake: false,
        script: false,
        tripper: false,
        costGo: false
      },
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