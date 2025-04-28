<template>
  <div
      class="min-h-screen w-svw flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 via-yellow-100 to-white p-4">
      <div class="text-center max-w-sm w-full">
          <h1 class="text-3xl font-bold mb-6 text-yellow-600">🌟 靈籤祈願 🌟</h1>

          <!-- 🎴 祈求動畫 -->
          <div v-if="isAnimating" class="relative flex flex-col items-center mb-6">
              <!-- 光圈煙霧 -->
              <div class="absolute w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <!-- 中心旋轉 -->
              <div class="w-20 h-20 border-[6px] border-white border-t-yellow-500 rounded-full animate-spin z-10">
              </div>
              <p class="mt-6 text-yellow-600 font-medium z-10">祈求中…請靜心等待</p>
          </div>

          <!-- 🎴 籤文顯示 -->
          <transition name="fade">
              <div v-if="showResult" class="bg-white rounded-xl shadow-lg p-6 space-y-4 text-left text-gray-800">
                  <div class="text-lg font-bold text-yellow-700 text-center">{{ currentFortune.title }}</div>
                  <div class="whitespace-pre-line leading-relaxed">{{ currentFortune.content }}</div>
                  <div class="text-right text-sm text-gray-500">{{ currentFortune.source }}</div>

                  <button @click="restart"
                      class="mx-auto mt-4 size-20 bg-yellow-500 text-white rounded-full font-bold text-[1rem] flex items-center justify-center hover:bg-yellow-600 transition">
                      再抽一次
                  </button>
              </div>
          </transition>

          <!-- 🎴 祈求按鈕 -->
          <!-- 祈求按鈕（圓形 + 波紋背景） -->
          <!-- 🎴 祈求按鈕（圓形 + 波紋背景） -->
          <div v-if="!isAnimating && !showResult && showStartButton"
              class="relative flex justify-center items-center mt-24">
              <!-- 波紋動畫 -->
              <span class="absolute size-24 rounded-full bg-yellow-400 opacity-40 animate-ping-slow"></span>

              <!-- 實體按鈕 -->
              <button @click="drawFortune"
                  class="size-24 shadow-md bg-yellow-500 text-white rounded-full font-bold text-[1.3rem] z-10 flex items-center justify-center hover:bg-yellow-600 transition">
                  祈求
              </button>
          </div>



      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 狀態
const isAnimating = ref(false)
const showResult = ref(false)
const currentFortune = ref({})
const showStartButton = ref(true)


// 四則籤文
const fortunes = [
  {
    title: '🌻 最幸福的人 🌻',
    content: `當我的心對別人\n所做的一切感到麻木的時候，\n是自己的心變冷酷了吧？\n\n心變冷了，自己會幸福嗎？\n絕對不會。\n\n心裡裝著滿滿的感恩的人，\n是最幸福的。`,
    source: '出處《希望新生》'
  },
  {
    title: '🌻 讚美是最簡單的心鑰 🌻',
    content: `其實跟別人說幾句讚美的話，\n他就開心了，\n但我們總把事情搞得太複雜，\n不會用非常簡單的方式處理。`,
    source: '出處《希望新生》'
  },
  {
    title: '🌻 凡事都從「好」處看 🌻',
    content: `養成一種習慣，\n一看就會看到別人哪裡好、\n哪裡善良、\n哪裡無私、今天幫忙多少人，\n\n都從這樣的角度去看待別人，\n沿著這樣的方向，\n假以時日自己就會體會到越來\n越多的幸福感。`,
    source: '出處《希望新生》'
  },
  {
    title: '🌻 慈悲心就是幸福 🌻',
    content: `慈悲心是幸福的──\n\n你對別人慈悲，\n結果自己會覺得幸福，\n很像「予人玫瑰，手留餘香」的感覺。\n\n所以一定要學會\n對家人、周圍的人多生慈悲心，\n多表達自己的感恩心。`,
    source: '出處《希望新生》'
  },
]

// 開始祈求（無音效）
const drawFortune = () => {
  isAnimating.value = true
  showResult.value = false

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    currentFortune.value = fortunes[randomIndex]
    isAnimating.value = false
    showResult.value = true
  }, 3000)
}

// 重抽
const restart = () => {
showResult.value = false    // 先關掉籤文
showStartButton.value = false // 同步隱藏按鈕（避免跳出來）

// 延遲讓籤文 fade-out 完再顯示按鈕
setTimeout(() => {
  showStartButton.value = true
}, 600) // 與 .fade 轉場時間一致（0.6 秒）
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@keyframes ping-slow {
0% {
  transform: scale(1);
  opacity: 0.4;
}
100% {
  transform: scale(2.5);
  opacity: 0;
}
}

.animate-ping-slow {
animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

</style>
