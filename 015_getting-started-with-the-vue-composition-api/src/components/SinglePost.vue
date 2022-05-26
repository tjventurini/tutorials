<template>
    <router-link :to="{ name: 'post-details', params: { id: post.id } }"
        ><h2>{{ post.title }}</h2></router-link
    >
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}&nbsp;</span>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 10) + "..."
        })

        return {
            snippet
        }
    }
}
</script>

<style>
</style>