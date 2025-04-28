<template>
  <div
    class="min-h-screen w-svw flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 via-yellow-100 to-white p-4 relative overflow-hidden">
    <div class="text-center max-w-sm w-full">

      <!-- 靈籤標題 -->
      <h1 v-if="!isAnimating && !showCard && !showResult" class="text-3xl font-bold mb-6 text-yellow-600">🌟 靈籤祈願 🌟
      </h1>


      <!-- 🎴 等待動畫：卡片飛來翻轉放大（有光暈＋正常方向） -->
      <div v-if="isAnimating" class="relative flex flex-col items-center mb-6 h-[400px] overflow-visible">
        <div class="relative perspective w-4/6 h-[22rem]">
          <!-- 卡片本體 -->
          <div
            class="w-full h-full rounded-lg shadow-lg transform animate-fly-flip overflow-hidden bg-cover bg-center relative"
            style="background-image: url('./img/flycard-default.png');">
            <!-- ✨ 光暈效果 -->
            <div class="absolute inset-0 rounded-lg bg-white opacity-20 pointer-events-none animate-glow"></div>
          </div>
        </div>
      </div>



      <!-- 🎴 主卡片出現 -->
      <transition name="fade">
        <div v-if="showCard" class="flex flex-col items-center space-y-4">
          <div class="relative perspective w-5/6 h-[28rem]" @click="flipCard">
            <div class="w-full h-full transition-transform duration-700 transform-style preserve-3d"
              :class="{'rotateY-180': isFlipped}">
              <!-- 正面：圖片 -->
              <div class="absolute w-full h-full rounded-lg shadow-lg backface-hidden overflow-hidden">
                <img :src="mainImage" class="w-full h-full object-cover" />
              </div>
              <!-- 背面：籤文 -->
              <div
                class="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-white transform rotateY-180 p-4 flex flex-col justify-around">
                <div class="text-yellow-700 font-bold text-lg mb-2">{{ currentFortune.title }}</div>
                <div class="text-gray-700 whitespace-pre-line text-md  leading-relaxed text-start">{{ currentFortune.content }}
                </div>
                <div class="text-right text-[1rem] text-gray-500 mt-2">{{ currentFortune.source }}</div>
              </div>
            </div>
          </div>

          <!-- 提示文字（翻開） -->
          <div v-if="!isFlipped" class="text-yellow-600 mt-8 font-bold text-[1.5rem] animate-fadein-up">
            請點擊卡片翻開查看籤文
          </div>

          <!-- 活動按鈕 -->
          <button v-if="isFlipped" @click="openModal"
            class="mt-10 px-6 py-3 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-500 transition">
            💌 送出我的感恩祝福
          </button>
        </div>
      </transition>

      <!-- 🎴 祈求按鈕 -->
      <div v-if="!isAnimating && !showCard && !showResult" class="relative flex justify-center items-center mt-24">
        <span class="absolute size-24 rounded-full bg-yellow-400 opacity-40 animate-ping-slow"></span>
        <button @click="drawFortune"
          class="size-24 shadow-md bg-yellow-500 text-white rounded-full font-bold text-[1.3rem] z-10 flex items-center justify-center hover:bg-yellow-600 transition">
          許願
        </button>
      </div>
    </div>

    <!-- 🌸 活動彈窗 -->
    <!-- 🎴 活動彈窗 -->
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

        <!-- 只有卡片 zoom in -->
        <transition name="zoom-fade">
          <div class="bg-white rounded-xl shadow-2xl p-5 max-w-md w-11/12 relative ">
            <h2 class="text-2xl font-bold text-pink-500 mb-2 text-center">🌸【母親節卡片傳恩情】🌸</h2>
            <p class="text-gray-700 whitespace-pre-line leading-relaxed text-left text-sm">
              國北福青社邀你一起傳遞溫暖與感謝 💌<br/>
              母親節快到了，還在想要怎麼表達對媽媽的愛嗎？<br/>
              來福青社的卡片傳恩情活動，親手寫下感謝的話語，讓愛不只放在心裡！<br/>
              <br/>
              📍實體擺攤<br/>
              🗓️ 4/30（三）、5/1（四）<br/>
              🕛 中午12:10 - 13:20<br/>
              📌 活動中心一樓學餐前<br/>
              我們準備了多款精美卡片，歡迎來挑選寫卡～我們還會幫你免費寄送喔！<br/>
              <br/>
              📍無人攤位（自助式）<br/>
              🗓️ 4/24（四）～5/6（二）<br/>
              📌 國北圖書館一樓 （借還書櫃檯旁邊）<br/><br/>
              害羞不敢來攤位？這裡也能自由拿卡片，隨時傳遞你的心意！<br/>

              讓我們用一張卡片，說出一聲「謝謝你，媽媽」❤️
            </p>
            <button @click="closeModal"
              class="mt-6 w-full bg-yellow-400 text-white font-bold py-2 rounded-full hover:bg-yellow-500 transition">
              關閉
            </button>
          </div>
        </transition>

      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// 狀態
const isAnimating = ref(false)
const showCard = ref(false)
const isFlipped = ref(false)
const showModal = ref(false)
const currentFortune = ref({})
const mainImage = ref('') // 不預設單一張，等抽到時再設定

// 四則籤文
// 四則籤文
const fortunes = [
  {
    title: '🌻 最幸福的人 🌻',
    content: `當我的心對別人\n所做的一切感到麻木的時候，\n是自己的心變冷酷了吧？\n\n心變冷了，自己會幸福嗎？\n絕對不會。\n\n心裡裝著滿滿的感恩的人，\n是最幸福的。`,
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
  {
    title: '🌻 感恩之人最富足 🌻',
    content: `當我們慢慢練習感恩心，\n會更廣闊地看到更多人、\n更多生命在此時此刻對一切的付出。\n\n任何好的事情都不是從天而降，\n要學會感恩大眾。\n\n有人說：\n「哪裡有貧窮？抱怨的人就貧窮。\n哪裡有富足？感恩的人就富足。」`,
    source: '出處《希望新生》'
  },
  {
    title: '☀️ 幸福的起點 ☀️',
    content: `不是對方給了我們多少理解、多少安慰，\n成為我們幸福的依靠；\n\n而是我們自己內心的善意，\n才是幸福真正的起點。`,
    source: '出處《希望新生》'
  },
  {
    title: '🌻 離苦先助人 🌻',
    content: `在自己痛苦的時候，\n能選擇先去幫助別人，\n這樣的人一定會幸福的！`,
    source: '出處《希望新生》'
  },
  {
    title: '🌻 幸福的籌碼 🌻',
    content: `感恩心是幸福的籌碼，\n\n心裡裝得越多，\n實際上幸福感會越強。`,
    source: '出處《希望新生》'
  }
];


// ✨ 新增：10張圖片的陣列
const images = [
  './img/fortune1.png',
  './img/fortune2.png',
  './img/fortune3.png',
  './img/fortune4.png',
  './img/fortune5.jpg',
  './img/fortune6.png',
  './img/fortune7.png',
  './img/fortune8.png',
  './img/fortune9.png',
  './img/fortune10.png',
  './img/fortune11.png',
  './img/fortune12.png',
  './img/fortune13.png',
  './img/fortune14.png',
  './img/fortune15.jpg',
  './img/fortune16.jpg',
  './img/fortune17.jpg',
  './img/fortune18.jpg',
  './img/fortune19.png',
  './img/fortune20.png',
  './img/fortune21.png',
  './img/fortune22.png',
  './img/fortune23.png',
]

// 祈求流程
const drawFortune = () => {
  isAnimating.value = true
  showCard.value = false
  isFlipped.value = false

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    currentFortune.value = fortunes[randomIndex]

    // ✨ 抽一張隨機圖片
    const imageIndex = Math.floor(Math.random() * images.length)
    mainImage.value = images[imageIndex]

    isAnimating.value = false
    showCard.value = true
  }, 3000)
}

// 翻開卡片
const flipCard = () => {
  isFlipped.value = true
}

// 彈窗
const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
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
  0% { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(2.5); opacity: 0; }
}
.animate-ping-slow {
  animation: ping-slow 2s infinite;
}

/* 卡片從遠到近+旋轉動畫 */
@keyframes fly-flip {
  0% { transform: translateY(200px) scale(0.3) rotateY(0deg); opacity: 0; }
  100% { transform: translateY(0) scale(1) rotateY(180deg); opacity: 1; }
}
.animate-fly-flip {
  animation: fly-flip 2.5s ease forwards;
}

/* 卡片翻轉 */
.perspective {
  perspective: 1000px;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotateY-180 {
  transform: rotateY(180deg);
}
.transform-style {
  transform-style: preserve-3d;
}

/* ✨ 光暈動畫 */
@keyframes glow {
  0% { opacity: 0.2; }
  50% { opacity: 0.4; }
  100% { opacity: 0.2; }
}
.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
/* 提示文字浮現 */
@keyframes fadein-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadein-up {
  animation: fadein-up 1s ease-out forwards;
}

/* 彈窗縮放淡入 */
.zoom-fade-enter-active {
  animation: zoomIn 0.4s;
}
@keyframes zoomIn {
  0% { opacity: 0; transform: scale(0.7); }
  100% { opacity: 1; transform: scale(1); }
}
</style>

