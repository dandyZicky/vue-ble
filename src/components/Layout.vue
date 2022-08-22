<script setup>
    import VueButtonBLE from './ButtonBLE.vue';
    import VueSlider from './Slider.vue';
    import Checkbox from './Checkbox.vue';
    import ColorPicker from  './colorPicker.vue';
</script>

<template>
    <div class="top-bar">

        <div class="left-content">
            <div v-if="$store.state.windowWidth >= 1024">
                <VueButtonBLE />
            </div>
        </div>

        <div class="content">

            <div v-if="$store.state.isConnected">
                <p>Connected</p>
            </div>

            <div v-if="!$store.state.isConnected">
                <p>!Connected</p>
            </div>

            <div>
                <p>Brightness : {{$store.state.brightness}}</p>
            </div>

            <div>
                <p>Color : {{$store.state.color}}</p>
            </div>

        </div>

        <div class="warn-bar">
            <div v-if="$store.state.error">
                <div class="alert">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                    <strong>Error!</strong> {{$store.state.error}}
                </div>
            </div>
        </div>

    </div>

    <div class="main-body">
        <div v-if="$store.state.windowWidth < 1024">
            <VueButtonBLE />
        </div>
        <div class="name-container" v-if="$store.state.isConnected">Device Name: {{$store.state.device.name}}</div>
        <div><ColorPicker /></div>
        <div class="ignore"><VueSlider /></div>
        <div><Checkbox /></div>
    </div>
</template>

<style scoped>
    header {
        text-align: center;
    }

    .main-body {
        display: flex;
        flex-direction: column;
        margin-top: 1em;
        justify-content: center;
        row-gap: 30px;
    }

    .main-body > div {
        display: flex;
        justify-content: center;
        font-size: 25px;
    }

    .ignore {
        display: block !important;
    }

    .top-bar {
        display: flex;
        min-height: 70px;
        padding-left: 0em;
        padding-top: 0em;
        margin: 0em 0em 0em 0em;
        justify-content: flex-start;
        position: relative;
        background-color: #be3d4a;
        flex-wrap: wrap;
        column-gap: calc(100% - 700px);
    }

    .name-container {
        display: flex;
        margin-top: 0;
        justify-content: center;
    }

    .left-content {
        margin-left: 2em;
        padding: 0.3em 0em 0em 1em;
        justify-content: flex-start;
    }
    .content {
        margin-right: 20px;
    }
    .content > div {
        display: inline-flex;
        position: relative;
        margin: 5px 15px 0 15px;
        font-size:1.18em;
        color: #E5E9F0

;
    }

    .alert {
        padding: 15px;
        background-color: #f44336;
        color: white;
        max-width: 18em;
        min-width: 264px;
        border-radius: 1em;
        float: right;
        margin-top: 4.9em;
        margin-right: 1em;
        max-height: 4.45em;
    }

    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }

    .closebtn:hover {
        color: black;
    }

    .warn-bar {  
        width:100%;
        position: fixed;
    }

    @media (max-width: 1023px) {
        .content > div {
            font-size: large;
            margin-top: 0.3em;
        }

        .top-bar {
            justify-content: center;
            min-height: 70px;
            padding-left: 0;
        }
        .ignore {
            display: block !important;
            max-height: 40px;
        }
        .main-body > div {
            font-size: medium;
        }

        .left-content {
            display: none;
        }
    }

    @media (max-width: 540px) {

        .content {
            margin: 0 0 0 0;
        }

        .content > div {
            font-size: smaller;
            margin: 12px 7px 0px 7px;
            padding: 0 0 0 0;
        }

        .left-content {
            padding: 0 0 0 0;
        }

        .top-bar {
            justify-content: center;
            min-height: 70px;
            padding-left: 0;
        }

        .main-body {
            margin: 1em 0 0 0;
            row-gap: 20px;
        }
    }

</style>
