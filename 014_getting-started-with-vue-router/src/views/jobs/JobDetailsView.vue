<template>
    <div class="job" v-if="job">
        <h2>{{ job.title }}</h2>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading data ...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null,
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err))
    }
}
</script>

<style>
</style>