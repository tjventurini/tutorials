<template>
    <div class="backdrop" @click.self="closeModal()">
        <div class="modal" :class="{ warning: theme === 'warning' }">
            <h1>{{ header }}</h1>
            <slot />

            <div class="disclaimer">
                <slot name="disclaimer">
                    <p>Default disclaimer text ...</p>
                </slot>
            </div>

            <div class="actions">
                <slot name="actions" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style scoped>
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.modal.warning {
    background: red;
    color: white;
}
</style>