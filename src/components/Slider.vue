<script>
  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/material.css'
  import { sendJSON } from '../assets/js/sendJSON'
  import store from '../store'

  export default {
    components: {
      VueSlider,
    },

    data() {
      return {
        value: 0,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        sendJSON,
      }
    },

    computed: {
        sendData() {
            store.commit('UPDATE_BRIGHTNESS', this.value)
            sendJSON.data.intensity = this.value;
            sendJSON.sending();
        }
    },

    created() {
      window.addEventListener("resize", this.myEventHandler);
      store.commit('UPDATE_WIDTH', this.windowWidth)
    },

    destroyed() {
      window.removeEventListener("resize", this.myEventHandler);
    },

    methods: {
      myEventHandler(e) {
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight
        store.commit('UPDATE_WIDTH' ,this.windowWidth)
      }
    }
  }
</script>

<template>

  <div v-if="windowWidth < 1024" class="range-slider-hor">
    <vue-slider 
      :width="windowWidth - 100"
      style="min-width: calc(100%-40x)"
      ref="slider"
      v-model="value"
      @change="sendData">
    </vue-slider>
  </div>

  <div v-if="windowWidth >= 1024" class="range-slider-vert">
    <vue-slider 
      ref="slider"
      v-model="value"
      direction="btt"
      :height="windowHeight / 5 + 60"
      @change="sendData">
    </vue-slider>
  </div>

</template>


<style scoped>
  .range-slider-vert {
    display: flex;
    margin-top: 0em;
    margin-bottom: 1em;
    padding-top: 1em;
    justify-content: center;
    position: relative;
    width: auto;
  }

  .range-slider-hor {
    display: flex;
    margin: 0 1em 0 1em;
    justify-content: center;
    position: relative;
  }
</style>