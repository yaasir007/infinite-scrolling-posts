<script lang="ts" setup>
import getPosts from './cruds/get-posts';
import Post from './components/Post.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const scrollComponent = ref(null)
const posts = ref(getPosts(8))

const loadMore = () => {
  let newPosts = getPosts(8)
  posts.value.push(...newPosts)
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})

const handleScroll = (e: Event) => {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMore();
  }
}
</script>

<template>
  <div class="scrolling-component" ref="scrollComponent">
    <Post
      v-for="(post, index) in posts"
      :post="post"
      :key="index"
    />
  </div>

</template>

<style scoped></style>
