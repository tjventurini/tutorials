<template>
    <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    mounted() {
        console.log('mounted')
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },
    updated() {
        console.log('updated')
    },
    unmounted() {
        console.log('unmounted')
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end', this.reactionTime)
            console.log('this.reactionTime', this.reactionTime)
        }
    }
}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    background-color: #0faf87;
}
</style>