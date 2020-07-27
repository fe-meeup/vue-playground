<template>
  <button
    type="button"
    class="button mt-4"
    :class="{ 'button--selected': isSelected }"
  >
    {{ buttonText }}
    <em v-if="isNew" class="button__new" :class="$style['is--orange']">
      <span class="visually-hidden">new</span>
    </em>
  </button>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      default: false
    },
    isNew: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: "버튼"
    }
  }
};
</script>

<style lang="scss">
@import "../styles/components/button";
</style>

<style lang="scss" module>
.is--orange {
  background: orange;
}
</style>

<style lang="postcss"></style>
