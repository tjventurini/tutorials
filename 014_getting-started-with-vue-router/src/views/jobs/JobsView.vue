<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
        <div class="job" v-for="job in jobs" :key="job.id">
            <router-link
                :to="{
                    name: 'jobDetails',
                    params: { id: job.id },
                }"
            >
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>Loading data ...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err))
    }
}
</script>

<style>
</style>