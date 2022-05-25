<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link> |
        <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    </nav>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>

    <router-view />
</template>

<script>
export default {
    methods: {
        redirect() {
            this.$router.push({ name: 'about' })
        },
        back() {
            this.$router.back()
            // this.$router.go(-1)
        },
        forward() {
            this.$router.forward()
            // this.$router.go(1)
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
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
