<template>
 <div id="home" class="ctr-body float-end d-flex flex-column">
    <HomeHero/> 

    <div id="about" ref="about" class="bg-color-1 w-100">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-start">
          <div class="p-3 p-md-5">
            <h2 class="color-4 text-uppercase fw-bold barlow my-3">About Me</h2>
            <p class="text-dark montserrat">
              Hi, I'm Olivier, a front end web developer with a zeal for coding and years of experience. I love the challenge 
              of programming and growing as I learn new technologies, but most importantly, I love the rush of reward from creating 
              solutions to problems. I'm always tinkering and always learning, but when I'm not coding, I enjoy producing music as my alter-ego, 
                <a class="text-decoration-none fw-bold color-2" href="https://olivyae.com/" target="_blank">Oli.Vyae</a>.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="p-3 p-md-5">
            <div class="row">
              <div v-for="skill, a in skills" :key="a" class="col-2">
                <div class="ctr-skill mb-3 mb-md-5">
                  <ProgressCircle :skill="skill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="work" ref="work" class="bg-color-3 p-3 p-md-5">
      <h2 class="text-light text-uppercase fw-bold barlow my-3">My Projects</h2>
      <p class="text-light montserrat mb-5">Here are some of my favorite projects I've had the pleasure and honor of working on over the years.</p>
      <ProjectsLibrary :projects="projects" />
    </div>

    <div id="contact" ref="contact" class="bg-color-4 p-3 p-md-5">
      <h2 class="text-light text-uppercase fw-bold barlow my-3">Contact Me!</h2>
      <form ref="contact_form">
          <div class="container">
              <div class="row">
                  <div class="col-6">
                      <div class="mb-3">
                          <label class="form-label text-light lato text-uppercase">Name</label>
                          <input class="form-control" type="text" name="user_name" v-model="contact.postObj.user_name" placeholder="Joanna Smith" required @keydown="error = false">
                      </div>
                  </div>
                  <div class="col-6">
                      <div class="mb-3">
                          <label class="form-label text-light lato text-uppercase barlow">Email</label>
                          <input class="form-control" type="email" name="user_email" v-model="contact.postObj.user_email" placeholder="joanna@example.com" required @keydown="error = false">
                      </div>
                  </div>
              </div>
              <!-- <div class="row">
                  <div class="col-12">
                      <div class="mb-3">
                          <label class="form-label text-light lato text-uppercase">Subject</label>
                          <input class="form-control" type="text" v-model="postObj.subject" placeholder="Your music possesed my cat!" required @keydown="error = false">
                      </div>
                  </div>
              </div> -->
              <div class="row">
                  <div class="col-12">
                      <div class="mb-3">
                          <label class="form-label text-light lato text-uppercase barlow">Message:</label>
                          <textarea name="message" id="" cols="30" rows="10" class="form-control ta" v-model="contact.postObj.message" required @keydown="contact.error = false"></textarea>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <div class="mb-3">
                          <button class="btn btn-md btn-primary my-3 w-100" @click.prevent="submit">
                              reach out!
                          </button>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <div v-if="error" class="alert alert-danger my-3">
                          {{ contact.error }}
                      </div>
                      <div v-if="success" class="alert alert-success my-3">
                          {{ contact.success }}
                      </div>
                  </div>
              </div>
          </div>
      </form>
    </div>

 </div>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  name: 'IndexPage',
  layout: 'default',
  data(){
    return {
      skills: [
        {
          name: 'HTML5',
          icon: 'fa-brands fa-html5',
          percentage: 100
        },
        {
          name: 'CSS43',
          icon: 'fa-brands fa-css3-alt',
          percentage: 100
        },
        {
          name: 'Sass',
          icon: 'fa-brands fa-sass',
          percentage: 100
        },
        {
          name: 'Less',
          icon: 'fa-brands fa-less',
          percentage: 75
        },
        {
          name: 'JavaScript',
          icon: 'fa-brands fa-js',
          percentage: 100
        },
        {
          name: 'VueJS',
          icon: 'fa-brands fa-vuejs',
          percentage: 95
        },
        {
          name: 'React',
          icon: 'fa-brands fa-react',
          percentage: 75
        },
        {
          name: 'Node',
          icon: 'fa-brands fa-node-js',
          percentage: 80
        },
        {
          name: 'Grunt',
          icon: 'fa-brands fa-grunt',
          percentage: 100
        },
        {
          name: 'Git',
          icon: 'fa-brands fa-git',
          percentage: 100
        },
        {
          name: 'Electron',
          icon: 'fa-solid fa-atom',
          percentage: 25
        },
      ],
      projects: [
        {
          name: 'nSight',
          preview: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/preview_nsight.png?alt=media&token=470d543b-a4ba-4088-a4f1-bcd6ac06076c',
          full_screenshot: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/dashboard.png?alt=media&token=5e3a22bc-947f-4535-8d97-ec3c2354d22f',
          screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fnsight%2Fscreenshot-1.jpg?alt=media&token=4f8be2eb-dc6a-409f-b738-fc8b1286fd15',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fnsight%2Fscreenshot-2.jpg?alt=media&token=8e6f5570-5653-4da5-bafe-f35db26796e7',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fnsight%2Fscreenshot-3.jpg?alt=media&token=e3b9de6f-b89c-4b54-a363-c9e51b2f1bc1',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fnsight%2Fscreenshot-4.jpg?alt=media&token=d76cd712-a3fc-4f26-95fb-0528c7a65199',
          ],
          description: `
              This is a peculiar project. Think of it as a speakeasy, but instead of a bar, it's a clothing shop. The premise of this particular eCommerce store
              is exclusivity. The only marketing is done by word of mouth, and only members can shop. However, members can create new members, thus expanding the store's reach. <br/> <br/>
              For the API, I'm using an amazing Node.JS-based headless CMS <a href="https://strapi.io/" target="_blank" class="text-decoration-none fw-bold">Strapi</a> for users, products, and feed.
              For the eCommerce portion, I'm using the NodeJS based eCommerce platform  <a href="https://snipcart.com/" target="_blank" class="text-decoration-none fw-bold">SnipCart</a>. For the front
              end, I'm using NuxtJS. This project is still under development and design is currently guided by the client and their team.
            `,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ],
          link: 'https://nsight.vip/',
          github: 'https://github.com/OlivierCoq/nsight-frontend'
        },
        {
          name: 'ValCal',
          preview: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fvalcal%2Fpreview_logo.jpg?alt=media&token=345472a3-8238-451f-93b0-90ab45ce6439',
          full_screenshot: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fvalcal%2Ffull_screenshot.png?alt=media&token=8d3609ac-9d52-4fbf-9d34-d12273635588',
          screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fvalcal%2Fscreenshots-1.jpg?alt=media&token=be6036eb-8da0-4d60-9f33-4444aeb46cc7',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fvalcal%2Fscreenshots-2.jpg?alt=media&token=c7f68c1e-ac7e-43e9-8eaf-864e2b89669f',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fvalcal%2Fscreenshots-3.jpg?alt=media&token=b0feb7bb-4f5a-4ced-ab27-87ca90888c4a',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fvalcal%2Fscreenshots-4.jpg?alt=media&token=b29a0389-63de-498d-b9de-cef52573b916'
          ],
          description: `
            This is the first real-world software project I'd embarked on. My friend Valerie worked in sales and was calculating all her current sales in a spreadsheet and wrote
            projections using a notepad and calculator. When she hit a current amount of sales, her commission grew with each tiered level. With a little bit of calculation, I wrote
            ValCal to streamline and automate the process. She brought it to work and her coworkers also ended up using this.
          `,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ],
          link: 'https://valcal.oliviercoq.online/',
          github: 'https://github.com/OlivierCoq/ValCal'
        },
        {
          name: 'OliVyae.com',
          preview: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fpreview_logo.jpg?alt=media&token=53a9ce5e-5175-4ac1-96ef-9358009b8e95',
          full_screenshot: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Ffull_screenshot.png?alt=media&token=147b99af-5cab-4564-ba83-461d0f71d0c0',
          screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fscreenshot-1.jpg?alt=media&token=49e7656e-f6dd-43bc-b9fc-844f669c41d1',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fscreenshot-2.jpg?alt=media&token=4c9757da-ee6d-4513-be7c-7dd650555cad',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fscreenshot-3.jpg?alt=media&token=95c93654-b7ef-4a6b-b9a3-26531b2c7629',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fscreenshot-4.jpg?alt=media&token=92b9f8c5-0402-477f-b5dc-d7eceb82cfb6',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fscreenshot-5.jpg?alt=media&token=5b609cdd-f191-42f2-8b7f-2f963a71c9bc',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fscreenshot-6.jpg?alt=media&token=e18fd424-c421-49b0-9132-e5ce80bec728',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Folivyae%2Fscreenshot-7.jpg?alt=media&token=39c4fa7a-3891-43b5-b308-36ca9338feb9'
          ],
          description: `
            This is by far the most fun project I've worked on, as I am biased: my music website! In addition to writing code, I sometimes produce music for fun. Instead of paying for SquareSpace or
            Wix or WordPress, I figured why not take control of my website and write it from scratch using what I know? <br/><br/>
            This site is built using NuxtJS, with both a front end and an admin, where I upload new albums and tracks. The uploaded files go to Google Firebase, and the admin is 
            protected using Google's built in SSO auth for JavaScript. In addition, I built a custom HTML5 audio streamer. The contact page utilizes 
              <a href="https://www.emailjs.com/" target="_blank" class="text-decoration-none fw-bold">EmailiJS</a>, an awesome server-free JS solution for sending/receiving emails.
          `,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ],
          link: 'https://olivyae.com/',
          github: 'https://github.com/OlivierCoq/olivyae.com'
        },
        {
          name: 'StackNotes',
          preview: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fstack-notes%2Fpreview_logo.jpg?alt=media&token=918029dc-1d8b-44e7-9786-1e98e45ab113',
          full_screenshot: 'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fstack-notes%2Ffull_page_screenshot.png?alt=media&token=3d11904f-6b88-432b-a74f-c7809a6f0c25',
          screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fstack-notes%2Fscreenshot-1.png?alt=media&token=2c6ec06b-1f08-4d4b-be20-2dbd0b5ecf9a',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fstack-notes%2Fscreenshot-2.png?alt=media&token=1948263b-4ab2-4334-9d68-b6d3476c9bba',
            'https://firebasestorage.googleapis.com/v0/b/oliviercoq-online.appspot.com/o/projects%2Fstack-notes%2Fscreenshot-3.png?alt=media&token=a80b8457-f2c6-4856-9f8c-aff4a5a6978c'
          ],
          description: `This is a collab project with a fellow developer and friend. This is my first dip with Electron, and the vast majority was written in JavaScript. This application
          allows computer science students to write notes and quickly run code in an IDE. A note can have as many IDEs as necessary, as well as a select choice of languages to code in. This allows users to test code in
          real time, while learning. This project is still under development, but a test version was used by several students at the University of South Florida.`,
          stack: [
            { name: 'HTML5', icon: 'fa-brands fa-html5' },
            { name: 'JS', icon: 'fa-brands fa-js' },
            { name: 'Vue', icon: 'fa-brands fa-vuejs' },
          ],
          link: 'https://www.stacknotes.tech/',
          github: 'https://github.com/OlivierCoq/stack-notes'
        }
      ],
      contact: {
        email_js_key: 'flA3GCmqOsay_4biB',
        error: false,
        success: false,
        postObj: {
            user_name: '',
            user_email: '',
            message: '',
        }
      }
    }
  },
  created(){
    emailjs.init(this.contact.email_js_key)
  },
  methods: {
    submit(){
      const thisObj = this, vals = Object.values(this.contact.postObj)
      let all_good 
      vals.forEach((val) => {
          if(!val.length) { all_good = false; this.contact.error = `Oops! Plese check all fields; there might be something missing here.` }
          else {
              all_good = true
              this.contact.error = false 
          }
      })
      if((all_good !== undefined) && (!this.error)) {
          // send mail function:  
          emailjs.sendForm('contact_service', 'contact_form', this.$refs.contact_form, this.contact.email_js_key)
          .then(()=> {
              // console.log('SUCCESS!', result.text)
              thisObj.contact.postObj = {
                  user_name: '',
                  user_email: '',
                  message: '',
              }
              thisObj.contact.success = `Sent. Thanks for reaching out! I will get back to you as soon as possible.`
          })
          .catch((error) => {
              thisObj.contact.error = `Uh oh. Server error. Please try again.`
              console.log('FAILED...', error.text)
          })
      }
  }
  }
}
</script>
<style lang="scss">
  .ctr-hero {
    // height: 100vh;
  }
  .ctr-skill {
    // width: 145px;
    // height: 145px;
  }
</style>