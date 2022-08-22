import { useBluetooth } from "@vueuse/core"

export default class BLE {
    constructor() {
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

        this.isConnected = isConnected
        this.isSupported = isSupported
        this.device = device
        this.requestDevice = requestDevice
        this.server = server
        this.error = error
    }
}