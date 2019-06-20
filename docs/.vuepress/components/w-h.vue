<template>
    <div>
        <label for="wid"></label>
        <input id="wid" type="number" v-model="width" ></input>
        <button type="button">1 : 1</button>
        <button type="button">5 : 3</button>
        <button type="button">16 : 9</button>
        <scale-up w="" h="" s=""></scale-up>
    </div>
</template>

<script>
import ScaleUp from './scaleUp.vue';

export default {
    data() {
        return {
            width: 200
        };
    },
    methods: {

    },
    components: {
        ScaleUp
    }
};
</script>

