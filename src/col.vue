<template>
    <div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluCol",
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type: [Number,String]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col{
        width: 50%;
        border: 1px solid red;
        $class-prefix:col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24)*100%
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left:($n/24)*100% ;
            }
        }
    }

</style>