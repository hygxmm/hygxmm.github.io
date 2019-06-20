<template>
    <div class="wrap">
        <div class="box">
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        w: {},
        h: {},
        s: {}
    },
    computed: {
        width() {

        },
        height() {

        },
        scale() {

        }
    },
    created() {
        if (this.w && this.h) {

        }
    }
};
</script>

<style scoped>
.wrap {
    background-color: #308999;


}
</style>

