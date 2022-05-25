<template>
    <div class="score">Time: {{ score }}ms</div>
    <div class="rank">Rank: {{ rank }}</div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Ninja Fingers 🥷'
        } else if (this.score < 400) {
            this.rank = 'Rapid Reflexes 🏎'
        } else {
            this.rank = 'Snail Pace 🐌'
        }
    }
}
</script>

<style>
</style>