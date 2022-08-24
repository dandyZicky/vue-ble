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
        const dataJSON = JSON.stringify(this.data);
        var enc = new TextEncoder();
        const encodedJSON = enc.encode(dataJSON);

        // console.log(encodedJSON)


        if(store.state.BLUETOOTH[0].value) {
            const service = await store.state.BLUETOOTH[4].value.getPrimaryService(SERIAL_UUID)
            const serviceCharacteristics = await service.getCharacteristic(SERIAL_UUID)
            serviceCharacteristics.writeValue(encodedJSON)
        }
    }
})
