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
                    style="width:calc(100% - 100px); max-width: 700px; cursor: pointer;" default-format="hex"
                    alpha-channel="hide"
                    :color="$store.state.color"
                    @color-change="onchanging"/>
</template>