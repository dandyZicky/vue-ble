import { reactive } from "vue";
import mixin from '../../mixin'
import store from "../../store";

const indexs = []

for(let i = 0; i<20; i++) {
    indexs[i] = 0
}

export const sendJSON = reactive({
    mixins: [mixin],
    data: {
        ledIndexs: indexs,
        color: '#ffffff',
        intensity: 0
    },
    async sending() {
        const dataJSON = JSON.stringify(this.data);
        var enc = new TextEncoder();
        var encodedJSON = enc.encode(dataJSON);
        console.log(encodedJSON);

        
    }
})
