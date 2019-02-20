<template>
    <i 
        class="iconfont"
        :class="type ? `icon-${type}` : ''"
        :style="styles"
    >
    </i>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        styles() {
            const style = {};
            if(this.color) {
                style.color = this.color;
            }
            if(this.size) {
                style.fontSize = this.size;
            }
            return style;
        }
    }

}
</script>

