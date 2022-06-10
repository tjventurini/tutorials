<template>
    <h1>Click the Menu Icon! 🤩</h1>
    <canvas
        ref="canvas"
        width="200"
        height="200"
        @click="toggleMenuIcon"
    ></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
    Rive,
    Layout,
    Fit,
    Alignment,
    StateMachineInput,
} from "@rive-app/canvas";
import { StateMachine } from "@rive-app/canvas/rive_advanced.mjs";

export default defineComponent({
    name: "MenuIcon",
    setup() {
        const canvas = ref(null);
        const state = ref(null);
        let menuIconClickTrigger: StateMachineInput | undefined;

        onMounted(() => {
            const r = new Rive({
                canvas: canvas.value,
                src: "../assets/burger-times.riv",
                layout: new Layout({
                    fit: Fit.Fill,
                    alignment: Alignment.Center,
                }),
                autoplay: true,
                stateMachines: "State Machine",
                onLoad: (_) => {
                    const inputs = r.stateMachineInputs("State Machine");
                    menuIconClickTrigger = inputs.find(
                        (i) => i.name === "Click"
                    );
                },
            });
        });

        const toggleMenuIcon = () => {
            if (menuIconClickTrigger) {
                menuIconClickTrigger.fire();
            }
        };

        return {
            canvas,
            state,
            toggleMenuIcon,
        };
    },
});
</script>

<style>
</style>