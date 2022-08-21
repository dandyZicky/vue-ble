<script>
    import { CFormCheck } from "@coreui/vue";
    import { sendJSON } from "../assets/js/sendJSON";
    import mixin from "../mixin"

    export default  {
        mixins: [mixin],
        data() {
            return {
                checkBoxes: [] ,
                sendJSON
            }
        },
        components: {
            CFormCheck
        },
        methods: {
            onChange (e) {
                let id = e.target.id
                let content = 0

                if(sendJSON.data.ledIndexs[id] == 1) {
                    content = 0
                }

                else if(sendJSON.data.ledIndexs[id] == 0) {
                    content = 1
                }

                sendJSON.data.ledIndexs[id] = content

                sendJSON.sending()
            }
        }

    }
</script>

<template>
    <div v-if="$store.state.windowWidth >= 786">
        <div style="display:inline; margin: 6px 6px 6px 6px" v-for="n in 20">
            <CFormCheck style="cursor:pointer" :id="(n-1).toString()" @click="onChange"/> {{n}}
        </div>
    </div>
    
    <div v-if="$store.state.windowWidth <= 786 && $store.state.windowWidth >= 484">
        <div style="display: flex; justify-content: center;">
            <div style="display:inline" v-for="n in 10">
                <CFormCheck :id="(n-1).toString()" @click="onChange"/> {{n}}
            </div>
        </div>
        <div style="display:inline" v-for="k in 10">
            <CFormCheck :id="(k+9).toString()" @click="onChange"/> {{k+10}}
        </div>
    </div>

    <div v-if="$store.state.windowWidth <= 484">
        <div style="display: flex; justify-content: center;">
            <div style="display:inline" v-for="n in 5">
                <CFormCheck :id="(n-1).toString()" @click="onChange"/> {{n}}
            </div>
        </div>

        <div style="display: flex; justify-content: center;">
            <div style="display:inline" v-for="k in 5">
                <CFormCheck :id="(k+4).toString()" @click="onChange"/> {{k+5}}
            </div>
        </div>

        <div style="display: flex; justify-content: center;">
            <div style="display:inline" v-for="k in 5">
                <CFormCheck :id="(k+9).toString()" @click="onChange"/> {{k+10}}
            </div>
        </div>

        <div style="display:inline" v-for="k in 5">
            <CFormCheck :id="(k+14).toString()" @click="onChange"/> {{k+15}}
        </div>
    </div>
</template>

<style scoped>
    .testing:hover {
        cursor: pointer !important;
    }
</style>