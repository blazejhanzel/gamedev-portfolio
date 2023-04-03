<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      <i>I started my game development journey when I was 13 (...) created some projects which stay sealed.</i><br />
      However, those are projects that I am excited to share with you.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There is more to come in the future!
      <a target="_blank" href="https://twitter.com/blazeDev_vlog">Follow me on Twitter</a> to stay tuned.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
