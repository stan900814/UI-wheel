<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluRow"
    }
</script>

<style scoped>
    .row{
        display: flex;
    }
</style>