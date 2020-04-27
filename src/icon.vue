<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import "./svg";
export default {
  props: ["name"],
  name:"GuluIcon"
};
</script>
<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
