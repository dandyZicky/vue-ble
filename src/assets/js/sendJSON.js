import { reactive } from "vue";
import store from "../../store";

const SERIAL_UUID = 0x1101
const indexs = []

for(let i = 0; i<20; i++) {
    indexs[i] = 0
}

export const sendJSON = reactive({
    data: {
        ledIndexs: indexs,
        color: '#ffffff',
        intensity: 0
    },
    async sending() {
        if(store.state.isConnected) {
            try {
                console.log(store.state.server)
                const writer = await store.state.server.writable.getWriter()
                const dataJSON = JSON.stringify(this.data)
                const enc = new TextEncoder()
                const encodedJSON = enc.encode(dataJSON)
                await writer.write(encodedJSON)
                console.log(dataJSON)
                await writer.releaseLock();
            }
            catch(err) {
                console.warn(err)
            }
        }
    }
})
