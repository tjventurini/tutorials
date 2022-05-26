<template>
    <div class="post-list">
        <div class="post" v-for="post in posts" :key="post.id">
            <SignlePost :post="post" />
        </div>
    </div>
</template>

<script>
import SignlePost from '@/components/SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'

export default {
    props: ['posts'],
    components: { SignlePost },
    setup(props) {
        console.log(props.posts)

        onMounted(() => {
            console.log('onMounted ran!')
        })

        onUnmounted(() => {
            console.log('onUnmounted ran!')
        })

        onUpdated(() => {
            console.log('onUpdated ran!')
        })
    }
}
</script>

<style>
</style>