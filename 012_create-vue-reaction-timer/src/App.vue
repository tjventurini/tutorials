<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue Reaction-Timer Game</h1>
    <button @click="start" :disabled="isPlaying">play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Results v-if="score" :score="score" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
    name: 'App',
    components: {
        Block,
        Results,
    },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
        }
    },
    methods: {
        start() {
            this.isPlaying = true
            this.delay = 1000 + Math.random() * 5000
            this.score = null
        },
        endGame(reactionTime) {
            this.score = reactionTime
            this.isPlaying = false
            console.log('score', this.score)
            console.log('reactionTime', reactionTime)
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
