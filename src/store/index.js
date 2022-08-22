// store/index.js
 
import {createStore} from "vuex";

const led_init = []
for(let i=0; i<=20; i++) {
    led_init[i] = 0
}
 
export default createStore({
 state: {
    isConnected: false,
    device: '',
    error: null,
    windowWidth: window.windowWidth,
    brightness: 0,
    color: '#000000',
    leds: led_init,
    BLUETOOTH: null
 },
 getters: {

 },
 mutations: {
    UPDATE_LEDS(state, arr) {
        state.leds = arr
    },
    UPDATE_BLUETOOTH(state, bl) {
        state.BLUETOOTH = bl
    },
    UPDATE_ERRORS(state, msg) {
        state.error = msg
    },
    UPDATE_CONNECTED(state, isConnected) {
        state.isConnected = isConnected
    },
    UPDATE_DEVICE(state, device) {
        state.device = device
    },
    UPDATE_BRIGHTNESS(state, valueBrightness) {
        state.brightness = valueBrightness
    },
    UPDATE_WIDTH(state, width) {
        state.windowWidth = width
    },
    UPDATE_COLOR(state, color) {
        state.color = color
    }
 },
 actions: {
    commit_colors(context, color_msg) {
        var color = context.state.color
        color = color_msg
        context.commit('UPDATE_COLOR', color)
    },
    commit_ble(context, msg) {
        var ble = context.state.BLUETOOTH
        ble = msg
        context.commit('UPDATE_BLUETOOTH', ble)
    },
    commit_led(context,arr) {
        var led = context.state.leds
        led = arr
        context.commit('UPDATE_LEDS', led)
    }
 },
});