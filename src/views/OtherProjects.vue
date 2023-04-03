<template>
  <div>
    <h1>Other projects</h1>

    <div style="margin-bottom: 30px;">
      As an indie developer I also take care of art, music and many other things. Those are what I also created.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  }
});
</script>
