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
                sendJSON,
            }
        },
        methods: {
            onchanging(e) {
                store.commit("UPDATE_COLOR", e.cssColor)
                sendJSON.data.color = e.cssColor
                sendJSON.sending()
            }
        },
    }
</script>

<template>
    <color-picker 
                    style="min-width:calc(40%); max-width: 1024px; cursor: pointer;" default-format="hex"
                    alpha-channel="hide"
                    :color="$store.state.color"
                    @color-change="onchanging"/>
</template>