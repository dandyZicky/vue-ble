<script setup>
  import {useBluetooth} from '@vueuse/core'
  import store from '../store';
  import {sendJSON} from '../assets/js/sendJSON'
</script>

<script>

  const SERIAL_UUID = 0x1101

  const {
    isConnected,
    isSupported,
    device,
    requestDevice,
    server,
    error,
  } = useBluetooth({
    acceptAllDevices: true,
    optionalServices: [
      SERIAL_UUID
    ]
  })

  var blarr = [isConnected, isSupported, device, requestDevice, server, error]

  store.dispatch('commit_ble', blarr)

  export default {
    name: "ButtonBLE",
    data() {
      return {
        isConnected,
        isSupported,
        device,
        requestDevice,
        server,
        error,
        sendJSON
      }
    },
    computed: {
      async setInfo() {
        store.commit('UPDATE_CONNECTED', isConnected)
        store.commit('UPDATE_DEVICE', device)
        console.log("Setting Connection")
      },
      setError() {
        store.commit('UPDATE_ERRORS', error)
        console.log("Error: ", error)
      },
    },
  }

</script>

<template>
  <div class="fixed-button">
    <div>{{ isSupported ? '' : 'Your browser does not support the Bluetooth Web API' }}</div>

    <div v-if="isSupported">
      <button @click="requestDevice">
      </button>
    </div>

    <div class="hidden" v-if="isConnected"> {{setInfo}} </div>
    <div class="hidden" v-if="error"> {{setError}} </div>
  </div>
</template>

<style scoped>
  button {
    background: url(../assets/Bluetooth.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: 0;
    height: 65px;
    width: 45px;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    .fixed-button {
      display: flex;
      position: relative ;
      align-items: flex-start;
      
    }
  }

  @media (max-width: 1024x){
    .fixed-button {
      position: relative;
      display: flex;
      justify-content: center;
    }
    
    button {
      height: 100px;
      width: 70px;
    }

  }

  .hidden {
    display: none;
  }
</style>