<script>
    import { ColorPicker } from 'vue-accessible-color-picker'
    import { sendJSON } from '../assets/js/sendJSON'
    import store from '../store'
    export default {
        components: {
            ColorPicker
        },
        data() {
            return {
                sendJSON
            }
        },
        methods: {
            onchanging(e) {
                store.commit("UPDATE_COLOR", e.cssColor)
                sendJSON.data.color = e.cssColor
                sendJSON.sending()
            }
        }
    }
</script>

<template>
<color-picker v-if="$store.state.windowWidth >= 484"
                  style="min-width:calc(50%); max-width: 70%; cursor: pointer;" default-format="hex"
                  alpha-channel="hide"
                  color="#000000"
                  @color-change="onchanging"/>
<color-picker v-if="$store.state.windowWidth <= 484"
                  style="min-width:15rem; cursor: pointer" default-format="hex"
                  alpha-channel="hide"
                  color="#000000"
                  @color-change="onchanging"/>
</template>