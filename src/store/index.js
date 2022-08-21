// store/index.js
 
import {createStore} from "vuex";
 
export default createStore({
 state: {
    isConnected: false,
    device: '',
    error: null,
    windowWidth: window.windowWidth,
    brightness: 0,
    color: '#ffffff',
    characteristic: null
 },
 getters: {

 },
 mutations: {
    UPDATE_CHARACTERISTICS(state, characteristic) {
        state.characteristic = characteristic
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
    },
    UPDATE_LEDIDX(state, led) {
        state.ledIdx = led
    }
 },
 actions: {
    showErr(context, msg) {
        var error = context.state.error
        error = msg
        context.commit('UPDATE_ERRORS', error)
    },
    validConnection(context, bool) {
        var isConnected = context.state.isConnected
        isConnected = bool
        context.commit('UPDATE_CONNECTED', isConnected)
    },
    getDevice(context, name) {
        var device = context.state.device
        device = name
        context.commit('UPDATE_DEVICE', device)
    }
 },
});