<script setup>
import { watch ,inject} from 'vue';
import { useRoute } from 'vue-router';
// const rootScrollBar = inject("rootScrollBar");
const route = useRoute();

// 監聽路由回到頂部
// watch(() => route.fullPath, () => {
//   console.log({"回到頂部":route.fullPath});
//   rootScrollBar.value.scrollTo({ top: 0, behavior: "smooth" });
// });
</script>

<template>
  <main class=" min-h-screen" >
    <router-view :key="$route.fullPath" v-slot="{ Component }">
      <KeepAlive >
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </main>
</template>

<style scoped></style>
