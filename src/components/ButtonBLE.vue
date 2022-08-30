<script setup>
  // import {useBluetooth} from '@vueuse/core'
  import store from '../store';
  import {sendJSON} from '../assets/js/sendJSON'
</script>

<script>

  let isSupported;

  if("serial" in navigator) {
    isSupported = true;
    console.log('Serial supported!');
  }

  else {
    isSupported = false;
    console.log('Serial not supported!');
  }

  // var blarr = [isConnected, isSupported, device, requestDevice, server, error]

  // store.dispatch('commit_ble', blarr)

  export default {
    name: "ButtonBLE",
    data() {
      return {
        isConnected: false,
        isSupported,
        device: null,
        error_request: null,
        sendJSON,
        server: null
      }
    },
    computed: {
      setInfo() {
        store.commit('UPDATE_CONNECTED', this.isConnected)
        store.commit('UPDATE_DEVICE', this.device)
      },
      setError() {
        store.commit('UPDATE_ERRORS', this.error_request)
        console.log("Error: ", this.error_request)
      }  
    },
    methods: {
      async requestDevice() {
        try {
          var selectedPort
          const port = await navigator.serial.requestPort()
          .then((response) => {
            selectedPort = response
          })
          .catch((error) => {
            this.error_request = error
          });
          
          await selectedPort.open({baudRate: 9600})
          console.log(selectedPort)
          store.commit('UPDATE_SERVER', selectedPort)
          this.isConnected = true
          console.log('Succesfully opened the serial port!')

        }
        catch(error) {
          console.log(error)
          if(this.isConnected == true) {
            await selectedPort.close()
          }
          this.isConnected = false
          this.error_request = error
        }
      }
    }
  }

</script>

<template>
  <div class="fixed-button">
    <div>{{ isSupported ? '' : 'Your browser does not support the Bluetooth Web API' }}</div>

    <div v-if="isSupported">
      <button @click="requestDevice()">
      </button>
    </div>

    <div class="hidden"> {{setInfo}} </div>
    <div class="hidden" v-if="error_request"> {{setError}} </div>
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