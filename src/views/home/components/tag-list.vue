<template>
  <div class="sidebar">
    <p>Popular Tags</p>

    <div class="tag-list">
      <a href class="tag-pill tag-default" v-for="tag in tags" :key="tag">{{tag}}</a>
    </div>
  </div>
</template>

<script>
import { getTags } from "../../../api/tag";

export default {
  name: "TagList",
  data() {
    return {
      tags: []
    };
  },

  created() {
    this.loadTags();
  },

  methods: {
    async loadTags() {
      const { data } = await getTags();
      this.tags = data.tags;
    }
  }
};
</script>