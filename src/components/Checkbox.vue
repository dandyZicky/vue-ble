<script>
    import { CFormCheck } from "@coreui/vue";
    import { sendJSON } from "../assets/js/sendJSON";
    import store from "../store";

    export default  {
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
                
                store.dispatch('commit_led', sendJSON.data.ledIndexs)
                sendJSON.sending()
            }
        }

    }
</script>

<template>

    <div v-if="$store.state.windowWidth >= 568">

        <div style="display: flex; justify-content: center;" class="correct-margin">
            <div v-for="n in 10" style="display: inline">
                <div v-if="$store.state.leds[n-1]" style="display:inline">
                    <div style="display: inline; justify-content: center;">
                        {{n}} <input type="checkbox" checked :id="(n-1).toString()" @click="onChange"/>
                    </div>
                </div>

                <div v-else>
                    <div style="display: inline; justify-content: center;">
                        {{n}} <input type="checkbox" :id="(n-1).toString()" @click="onChange"/> 
                    </div>
                </div>
            </div>
        </div>

        <div style="display: flex; justify-content: center;" class="correct-margin">
            <div v-for="n in 10" style="display: inline">
                <div v-if="$store.state.leds[n+9]" style="display:inline">
                    <div style="display: inline; justify-content: center;">
                         {{n+10}} <input type="checkbox" checked :id="(n+9).toString()" @click="onChange"/>
                    </div>
                </div>

                <div v-else>
                    <div style="display: inline; justify-content: center;">
                         {{n+10}} <input type="checkbox" :id="(n+9).toString()" @click="onChange"/>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div v-if="$store.state.windowWidth < 568">

        <div style="display: flex; justify-content: center;" class="correct-margin">
            <div style="display:inline" v-for="n in 5">
                <span v-if="$store.state.leds[n-1]">
                    <input type="checkbox" checked :id="(n-1).toString()" @click="onChange"/> {{n}}
                </span>
                <span v-if="!$store.state.leds[n-1]">
                    <input type="checkbox" :id="(n-1).toString()" @click="onChange"/> {{n}}
                </span>
            </div>
        </div>

        <div style="display: flex; justify-content: center;" class="correct-margin">
            <div style="display:inline" v-for="k in 5">
                <span v-if="$store.state.leds[k+4]">
                    <input type="checkbox" checked :id="(k+4).toString()" @click="onChange"/> {{k+5}}
                </span>
                <span v-if="!$store.state.leds[k+4]">
                    <input type="checkbox" :id="(k+4).toString()" @click="onChange"/> {{k+5}}
                </span>
            </div>
        </div>

        <div style="display: flex; justify-content: center;" class="correct-margin">
            <div style="display:inline" v-for="k in 5">
                <span v-if="$store.state.leds[k+9]">
                    <input type="checkbox" checked :id="(k+9).toString()" @click="onChange"/> {{k+10}}
                </span>
                <span v-if="!$store.state.leds[k+9]">
                    <input type="checkbox" :id="(k+9).toString()" @click="onChange"/> {{k+10}}
                </span>
            </div>
        </div>

        <div style="display: flex; justify-content: center;" class="correct-margin">
            <div style="display:inline" v-for="k in 5">
                <span v-if="$store.state.leds[k+14]">
                    <input type="checkbox" checked :id="(k+14).toString()" @click="onChange"/> {{k+15}}
                </span>
                <span v-if="!$store.state.leds[k+14]">
                    <input type="checkbox" :id="(k+14).toString()" @click="onChange"/> {{k+15}}
                </span>
            </div>
        </div>

    </div>
</template>

<style scoped>
    input[type=checkbox]:hover {
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        input[type=checkbox] {
        /* Double-sized Checkboxes */
            -ms-transform: scale(1.7); /* IE */
            -moz-transform: scale(1.7); /* FF */
            -webkit-transform: scale(1.7); /* Safari and Chrome */
            -o-transform: scale(1.7); /* Opera */
            transform: scale(1.7);
        }

        .correct-margin > div {
            margin: 7px ;
        }
    }

    @media (max-width: 1023px) {
        input[type=checkbox] {
        /* Double-sized Checkboxes */
            -ms-transform: scale(1.4); /* IE */
            -moz-transform: scale(1.4); /* FF */
            -webkit-transform: scale(1.4); /* Safari and Chrome */
            -o-transform: scale(1.4); /* Opera */
            transform: scale(1.4);
        }
        .correct-margin > div {
            margin: 0 6px 12px 6px ;
        }
    }

    @media (max-width: 567px) {
        .correct-margin > div {
            margin: 0 6px 2px 6px ;
        }
    }
</style>