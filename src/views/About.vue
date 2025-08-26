<template>
  <div style="margin-bottom: 80px;">
    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of blazeDev" />
    </div>

    <h1>blazeDev</h1>

    <div class="social-media-container">
      <div class="social-media-icons">
        <a href="https://twitter.com/blazeDev_vlog" target="_blank" title="@blazeDev_vlog">
          <i class="fa fa-twitter fa-lg fa-fw" style="vertical-align: -5%;"></i>
        </a>
        <a href="https://youtube.com/@blazeDev_vlog" target="_blank" title="@blazeDev_vlog">
          <i class="fa fa-youtube fa-lg fa-fw"></i>
        </a>
        <!-- <a href="https://instagram.com/blaze.h99" target="_blank" title="@blaze.h99">
          <i class="fa fa-instagram fa-lg fa-fw"></i>
        </a> -->
        <!-- <a href="https://www.tiktok.com/@blazedev_vlog" target="_blank" title="@blazedev_vlog">
          <i class="fab fa-tiktok fa-lg fa-fw"></i>
        </a> -->
        <!-- <a href="https://mastodon.social/@blazedev" target="_blank" title="@blazedev@mastodon.social" rel="me">
          <i class="fab fa-mastodon fa-lg fa-fw"></i>
        </a> -->
        <!-- <router-link to="/contact" title="E-mail contact form">
                    <i class="fa fa-envelope-o fa-lg fa-fw"></i>
                </router-link> -->
        <a href="https://play.google.com/store/apps/dev?id=6672776623652816699" target="_blank"
          title="blazeDev on Google Play">
          <i class="fab fa-google-play fa-lg fa-fw"></i>
        </a>
        <!-- <a href="https://blazedev-vlog.itch.io" target="_blank" title="blazedev-vlog.itch.io">
          <i class="fab fa-itch-io fa-lg fa-fw"></i>
        </a> -->
      </div>
    </div>

    <div class="paragraph">
      <div>
        Hi there, <strong>Blaze here</strong>,
        {{ currentAge }} years old Indie Game Developer from Poland 🇵🇱 Creator of “Astro Strike – Space Shooter” game 👾 and “Blaze Builder – Easy Multiplatform Build” Unity tool 🎮 I create cool game dev-related projects 💻 and YouTube videos 🎬 I like emojis 😄
      </div>

      <div style="margin-top: 20px;">
        I started my game development journey when I was 13 (<i>{{ gamedevJourneyAge }} years ago</i>),
        take a part of first game dev workshop two years later,
        created some projects which stay sealed and finally decided to <strong>release my own game</strong> 🥳
      </div>


      <div style="margin-top: 20px;">
        I’m documenting my journey on Twitter/X and on YouTube, where I post everything related with game development – devlogs, tips and tutorials.
      </div>
    </div>




    <div style="clear:both"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
  computed: {
    currentAge() {
      return new Date().getFullYear() - 1999;
    },
    gamedevJourneyAge() {
      return new Date().getFullYear() - 2012;
    }
  }
})
</script>

<style scoped>
h1 {
  margin-bottom: 30px;
}

.social-media-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.social-media-icons {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  line-height: 3em;
}

.social-media-icons a {
  display: block;
  margin-right: 20px;
  font-size: 1.4em;
  transition: all 0.3s ease-in-out;
}

.social-media-icons a:hover {
  transform: scale(1.2);
}

.social-media-icons a i {
  font-size: 1.4em;
}

.social-media-icons a:hover::after {
  content: attr(title);
  display: block;
  position: absolute;
  left: 0;
  bottom: 120%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  z-index: 1;
}

.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.photo>img {
  width: 180px;
  border-radius: 50%;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 10px;
    padding-right: 80px;
  }

  .photo>img {
    width: 224px;
  }

  .social-media-container {
    align-items: left;
    justify-content: left;
  }
}
</style>
