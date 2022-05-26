<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />

        <h1>Home</h1>

        <p>My name is {{ name }} and my age is {{ age }}</p>

        <button @click="changeNameAndAge">Change name and age</button>

        <p ref="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            omnis, deleniti blanditiis consequatur esse fugit hic quaerat iusto
            sequi dolorum. Nobis cumque inventore quas tempore repellendus,
            harum et impedit itaque.
        </p>
        <button @click="changeParagraphText">Change paragraph text</button>
        <button @click="changeBackgroundColor">Change background color</button>

        <input type="text" v-model="search" />
        <div class="name" v-for="name in matchingNames" :key="name">
            {{ name }}
        </div>

        <button
            @click="
                stopWatch();
                stopWatchEffect();
            "
        >
            Stop watching
        </button>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'

export default {
    name: 'Home',
    setup() {
        console.log('Setup runs first!')

        let name = ref('Mario')
        let age = ref(30)

        const changeNameAndAge = () => {
            name.value = 'Luigi'
            age.value = 40
        }

        const paragraph = ref(null)

        const changeParagraphText = () => {
            paragraph.value.textContent = 'Changed text ...'
        }

        const changeBackgroundColor = () => {
            paragraph.value.classList.add('bg-red')
        }

        const names = ref(['Mario', 'Luigi', 'Yoshi', 'Bowser', 'Peach', 'Toad'])
        const search = ref('')

        const matchingNames = computed(() => {
            return names.value.filter(name => name.includes(search.value))
        })

        const stopWatch = watch(search, () => {
            console.log('watch function runs: ', search.value)
        })

        const stopWatchEffect = watchEffect(() => {
            console.log('watchEffect function ran: ', search.value)
        })

        return {
            name,
            age,
            changeNameAndAge,
            paragraph,
            changeParagraphText,
            changeBackgroundColor,
            names,
            search,
            matchingNames,
            stopWatch,
            stopWatchEffect,
        }
    },
}
</script>

<style scoped>
.bg-red {
    background-color: red;
}
</style>