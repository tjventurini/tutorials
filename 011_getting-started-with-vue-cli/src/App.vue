<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- refs -->
    <div>
        <input type="input" ref="foo" />
        <button @click="handleFooClick">foo click</button>
    </div>

    <!-- components -->
    <teleport v-if="showModal" to=".modals">
        <Modal
            header="My Header"
            text="Some content"
            theme="warning"
            @closeModal="showModal = !showModal"
        >
            <p>Some content as slot ...</p>

            <template v-slot:disclaimer>
                <p>Custom disclaimer text ...</p>
            </template>

            <template v-slot:actions>
                <a href="#">action 1</a>&nbsp;<a href="#">action 2</a>
            </template>
        </Modal>
    </teleport>
    <button @click="showModal = !showModal">Open modal</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import Modal from "./components/Modal.vue"

export default {
    name: "App",
    components: {
        HelloWorld,
        Modal,
    },
    methods: {
        handleFooClick() {
            console.log(this.$refs.foo.value)
            this.$refs.foo.classList.add('active')
            this.$refs.foo.focus()
        },
    },
    data() {
        return {
            showModal: false,
        }
    },
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
