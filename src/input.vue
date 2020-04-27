<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readyonly">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import  Icon from './icon'
    export default {
        components:{
            Icon
        },
        name: "GuluInput",
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readyonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--button-bg: white;*/
    /*--button-active-bg: #eee;*/
    /*--border-radius: 4px;*/
    /*--color: #333;*/
    /*--border-color: #999;*/
    /*--border-color-hover: #666;*/
    $border-color:#999;
    $border-color-hover:#666;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,.5);
    .wrapper{
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        >*{
            margin-right:.5em;
        }
        .icon-error{
            fill: red;
        }
        .errorMessage{
            color: red;
        }
        &.error{
            >input{
                border-color: #f1453d;
            }
        }
        >input{
            height: 32px;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readyonly]{
                border-color: #aaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }
    }
</style>