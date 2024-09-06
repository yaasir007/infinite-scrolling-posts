<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps(["post"])
</script>


<template>
  <div class="post">
    <h2>{{ post.author }}</h2>
    <p>{{ post.content }}</p>
  </div>

</template>

<style scoped>
.post {
  background-color: rgb(66, 36, 36);
  padding: 1.3rem;
}

.post:not(:last-child) {
  border-bottom:  1px solid #ddd;
}

.post h2 {
  font-size: 1.2rem;
  padding-bottom: 0.24rem;
}

.post p {
  color: #d3c0c0;
}
</style>
