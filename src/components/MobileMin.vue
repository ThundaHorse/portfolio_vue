<template>
  <div id='MobileMin'>
    <v-carousel 
      v-model="carousel"
      :cycle="false" 
      :height="window.height"
      v-touch="{
        left: () => swipe('Left'),
        right: () => swipe('Right'),
        down: () => swipe('Down'),
        up: () => swipe('Up')
      }"
    >
        <!-- Greeting -->
      <v-carousel-item id="greeting">
        <v-sheet
          color="blue lighten-2"
          height="100%"
          tile
        >
          <v-layout
            fill-height
            justify-center
          >
            <v-container mr-4 ml-4>
              <v-layout justify-center>
                <div class="intro" style='text-align:center;'>
                  <h1>
                    {{ greeting() }}
                  </h1>

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
                        style="height: 30px; width: 30px;" atl="Github"></a>
                    <a href="https://www.linkedin.com/in/abrahamtkim/"><img
                        src="https://image.flaticon.com/icons/png/512/61/61109.png"
                        style="height: 30px; width: 30px; margin-left: 10px;" atl="LinkedIn"></a>
                  </span>
                </div>
              </v-layout>
            </v-container>
          </v-layout>
        </v-sheet>
      </v-carousel-item>
    
        <!-- About -->
      <v-carousel-item id="about">
        <v-sheet
          color="green lighten-2"
          height="100%"
          tile
        >
          <v-layout
            fill-height
            justify-center
            align-start
          >
            <v-container mr-4 ml-4>
              <v-layout justify-center>
                <div class="about" style='text-align:center;'>
                <p class='text-start'>A Little bit about me</p>
                  <v-avatar size="220">
                    <v-img src="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/67352704_10156330133967791_2850526213322047488_o.jpg?_nc_cat=111&_nc_oc=AQn7nrLSFXn1CkNF3ci28Jk4dul2LMGm7haokbG5oE0jwxWxi2jLdyIpuMCOt2giehI0heFpGrvUF1RA2PYq0iv_&_nc_ht=scontent.fmia1-2.fna&oh=a5a06f80c67a15a67b35ce70de0d3971&oe=5DB6CEDB" position="top 15%"></v-img>
                  </v-avatar>

                  <div class="font-weight-bold" style="text-align: center;" id="description">
                    <v-container>
                      <h3>
                          <br>
                        I'm a software engineer currently residing in Sunrise, FL originally from Atlanta, GA.
                          <!-- <br> -->
                        I graduated from Georgia State University with a degree in Political Science. 
                          <!-- <br> -->
                        During my undergraduated studies I started working for Apple and after graduating, I became 
                          <!-- <br> -->
                        a Senior Advisor for AppleCare. 
                          <br>
                        I studied software development on my own throughout highschool and my undergraduate studies. Come 2019 I decided to attend Actualize Coding Bootcamp in Chicago, IL to pursue my passion. During my time at Actualize, I became familiar with the following technologies: 
                      </h3>
                        <br>
                      <div id="techs">
                        <li>Javascript (ES6)</li>  <b> • </b>
                        <li>VueJS</li>  <b> • </b>
                        <li>React</li> <b> • </b>
                        <li>Ruby</li>  
                          <br>
                        <li>Ruby on Rails</li>  
                        <li>SQL</li>  <b> • </b>
                        <li>Express</li> <b> • </b>
                        <li>HTML & CSS</li>  
                          <br> 
                        <li>Git & Bash</li>  <b> • </b>
                        <li>PHP</li>  <b> • </b>
                        <li>Laravel</li>
                      </div>
                    </v-container>
                  </div>
                </div>
              </v-layout>
            </v-container>
          </v-layout>
        </v-sheet>
      </v-carousel-item>

        <!-- Experience -->
      <v-carousel-item id="experience">
        <v-sheet
          color="purple lighten-2"
          height="100%"
          tile
        >
        <!-- <v-layout justify-start align-center>
          <h1>My Experience</h1>
        </v-layout> -->
          <v-layout
            align-center
            justify-center
          >
            <v-container mr-4 ml-4 mt-5>
              <h1>My Experiences</h1>
                <v-layout justify-center>
                  <div class="intro" style='text-align:center;'>
                    <br>
                    <v-layout align-center>
                      <v-item-group
                        v-model="dialogue"
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
                          :dark="true"
                          v-model="dialogue"
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
                  </div>
                </v-layout>

              <div class="text-xs-center" id='proficiency'>
                <br>
                <br>
                <p style='text-align:center;'>Here are some of the Frameworks and Languages I know!</p>
                  <v-dialog
                    v-model="proficiency"
                    width="50%"
                    height="50%"
                    :scrollable="true"
                  >   
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="teal lighten-2"
                        dark
                        medium
                        round
                        v-on="on"                       
                      > 
                      Frameworks and languages
                      </v-btn>
                    </template>
                    <v-card
                      :dark="true"
                      align-center 
                      justify-center
                      height="50%"
                    >
                      <v-card-title
                        class="headline grey darken-1"
                        primary-title
                      >
                      <v-btn icon dark @click="proficiency = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                        Proficiencies
                      </v-card-title>
                      <v-card-text>
                        <v-container class="hidden-sm-and-up">
                          <v-flex>
                            <v-card height ="50%" dark raised>
                              <v-layout id="proficiency" 
                                align-center
                                row
                                justify-center
                              >
                                <v-layout column align-center justify-center mt-4>
                                  <v-progress-circular id="ruby" class="mx-5" :value="90" :size="90" :width="4" color="red">
                                    <img src="https://assets.webiconspng.com/uploads/2017/09/Ruby-PNG-Image-57218.png"
                                      style="height: 30px; width: 30x;" alt="Ruby">
                                  </v-progress-circular>    
                                    <br>
                                    <p>Ruby</p>
                                    <br>
                                  <v-progress-circular id="rubyonrails" class="mx-5" :value="85" :size="90" :width="4" color="red darken-4">
                                    <img src="https://www.e-yug.com/wp-content/uploads/2017/07/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5-350x350.png" style="height: auto; width: 40px;" alt="ror">
                                  </v-progress-circular>
                                    <br>
                                  <p>Ruby on Rails</p>
                                    <br>
                                  <v-progress-circular id="js" class="mx-5" :value="80" :size="90" :width="4" color="green">
                                    <img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"
                                              style="height: auto; width: 55px;" alt="Javascript">
                                  </v-progress-circular> 
                                      <br>
                                    <p>Javascript(ES6)</p>
                                      <br>
                                  <v-progress-circular id="vue" class="mx-5" :value="85" :size="90" :width="4" color="lime">
                                    <img src="https://vuejs.org/images/logo.png" style="height: auto; width: 35px;" alt="VueJS">
                                  </v-progress-circular>
                                      <br>
                                    <p>VueJS</p>
                                      <br>
                                  <v-progress-circular id="php" class="mx-5" :value="35" :size="90" :width="4" color="blue lighten-1">
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                              style="height: 30px; width: auto;" alt="PHP">
                                  </v-progress-circular> 
                                      <br>
                                      <p>React</p>
                                      <br>
                                    <v-progress-circular id="html_css" class="mx-5" :value="80" :size="90" :width="4" color="yellow">
                                    <img 
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/640px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"
                                      style="height: 30px; width: auto;" alt="HTML and CSS">
                                  </v-progress-circular> 
                                      <br>
                                    <p>HTML & CSS</p>
                                      <br>
                                  <v-progress-circular id="php" class="mx-5" :value="40" :size="90" :width="4" color="purple lighten-3">
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
            </v-container>
          </v-layout>
        </v-sheet>
      </v-carousel-item>

        <!-- Projects -->
      <v-carousel-item id="projects">
        <v-sheet
          color="blue lighten-2"
          height="100%"
          tile
        >
          <v-layout justify-center align-center column>
            <v-container mr-2 ml-2>
            <h2 style="text-align: center; padding-right: 5px;">Here are some of the projects that I  have worked on!</h2>
                <br>
                <!-- <h1 style="text-align: center">Here are some of the projects that I  have worked on!</h1> -->
              <v-layout justify-center>
                <v-container>
                  <v-app id="projects" style="background-color: rgb(0, 0, 0, 0);">
                    <!-- <v-layout align-center justify-center column> -->
                      <v-timeline dark>
                          <!-- Disney -->
                        <v-timeline-item>
                          <div class="disney" id="disney" style="padding-right: 140px;">
                            <v-dialog dark v-model="projects.disney" width="600px">
                              <template v-slot:activator="{ on }">
                                <v-btn round right mr-7 color="blue lighten-2" dark v-on="on">Let's Go to Disney!</v-btn>
                              </template>
                              <v-card dark elevation='30' max-height="500">
                                <v-card-title>
                                  VueJS • Ruby on Rails • Ruby • Javascript
                                </v-card-title>
                                <v-card-text>
                                  <v-layout>
                                    <v-layout wrap>
                                      <v-flex style="text-align: center;">
                                        An app that used a Rails back-end and a VueJS front-end a user is able to create an account and log in to view user info in addition to creating an itinerary to plan a day at Disney. 
                                        <br>
                                        Attraction wait times are updated in real-time by utilizing Action Cable and custom rake tasks in Rails that utilizes a custom script to be run at set intervals. in conjunction with the API to gather times, the script file access the Rails database and updates the attraction models which in turn is updated in the Vue app by Action Cable. 
                                      </v-flex>
                                    </v-layout>
                                  </v-layout>
                                    <br>
                                    <!-- Rake --> 
                                  <v-card-action>
                                    <span class="rake" style='float:left;'>
                                      <div class="text-xs-center" id='rake'>
                                        <v-dialog
                                          v-model="projects.rake"
                                          width="100%"
                                          height="50%"
                                        >
                                          <template v-slot:activator="{ on }">
                                            <v-btn
                                              color="teal lighten-2"
                                              dark
                                              round
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
                                              <v-img :src="images.rake" aspect-ratio="1.7"/>
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
                                          width="100%"
                                          height="50%"
                                        >
                                          <template v-slot:activator="{ on }">
                                            <v-btn
                                              color="green lighten-2"
                                              dark
                                              round
                                              v-on="on"
                                            > 
                                            Script
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
                                              Script to access Node.js databse
                                            </v-card-title>
                                            <v-card-text>
                                              <v-img :src="images.script" aspect-ratio="1.7" />
                                            </v-card-text>
                                            <v-divider></v-divider>
                                          </v-card>
                                        </v-dialog>
                                      </div>
                                    </span>
                                  </v-card-action>
                                </v-card-text>
                              </v-card>
                            </v-dialog>
                          </div>
                        </v-timeline-item>

                          <!-- tripper -->
                        <v-timeline-item>
                          <div class="tripper" id="tripper" style="padding-left: 1px;">
                            <v-dialog dark v-model="projects.tripper" width="600px">
                              <template v-slot:activator="{ on }">
                              <v-btn round right color="purple lighten-2" dark v-on="on">Tripper</v-btn>
                              </template>
                              <v-card dark elevation='30'>
                                <v-card-text>
                                  <v-container>
                                  <v-card-title>
                                    Ruby on Rails • Ruby • VueJS • Javascript
                                  </v-card-title>
                                    <v-layout wrap>
                                      <v-flex style="text-align: center;">
                                          <br>
                                        Utilized Twilio, Ngrok, Rails, VueJS to provide real-time flight status updates and monitoring and update users for flight information and statuses. Utilized API to gather airport codes and display relative locations for lodging and food. 
                                          <br> 
                                        Multi-page app that listed airports and options to sort flights by status, city, and flight status. Added option for only admins able to edit flights. In order to verify a user was an admin, utilized authentication and authorization in Rails back end.
                                      </v-flex>
                                        <br>
                                      <span class="front-back" style="float: right;">
                                          <v-btn round href='https://github.com/ThundaHorse/tripper_vue_app' color="red lighten-2">
                                            Front End
                                          </v-btn>
                                      </span>
                                      <span class="back" style="float:left;">
                                          <v-btn round href="https://github.com/ThundaHorse/tripper_app" color="blue purple-lighten-2">
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

                          <!-- cost -->
                        <v-timeline-item>
                          <div class="costGo" id="costGo">
                            <v-dialog dark v-model="projects.costGo" width="600px">
                              <template v-slot:activator="{ on }">
                                <v-btn left round color="green" dark v-on="on">Cost-Go</v-btn>
                              </template>
                              <v-card dark elevation='30'>
                                <v-card-text>
                                  <v-container>
                                    <v-card-title>
                                    Sinatra • Ruby
                                    </v-card-title>
                                      <br>
                                    <v-flex style="text-align: center;">
                                        Lightweight app that calculated cost comparison using Google Maps API to determine cost-benefit of public transportation vs vehicular travel. Utilized Sinatra to manage requests and view rendering. 
                                          <br> 
                                        User is able to input starting and ending destinations to view information such as distance, time to destination, trip duration.
                                          <br>
                                          <br>
                                          <v-btn round center color="purple lighten-2" href="https://github.com/ThundaHorse/costgo_app">
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

                    <!-- </v-layout> -->
                  </v-app>
                </v-container>
              </v-layout>
            </v-container>
          </v-layout>
        </v-sheet>
      </v-carousel-item>

    </v-carousel>
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
  name: 'MobileMin',
  data: function() {
    return {
      swipeDirection: 'None',
      bottomNav: 1,
      activeBtn: 0,
      length: 2,
      dialogue: 0,
      proficiency: false,
      carousel: 0,
      window: {
        width: 0,
        height: 0
      },
      projects: {
        disney: false,
        rake: false,
        script: false,
        tripper: false,
        costGo: false
      },
      images: {
        rake: require('../../public/disney_app_pics/custom_rake.png'),
        script: require('../../public/disney_app_pics/disney_script.png')
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
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    swipe (direction) {
      this.swipeDirection = direction
    },
    greeting() {
      var time = new Date(); 
      var timeObj = {
        hours: time.getHours() < 10 ? `0${time.getHours}` : time.getHours(),  
        minutes: time.getMinutes(),
        timeOfDay: time.getHours() < 12 ? 'AM' : 'PM'
      }

      return timeObj.timeOfDay === 'AM' ? 'Good morning!' : 'Good evening.'; 
    }
  }
};
</script>