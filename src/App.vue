<template>
  <div id="app">
    <ul class="tag-list">
      <li v-for="(tag, index) in tagList" :key="index" class="tag-list__tag">
        <ButtonWithSCSS
          :is-new="tag.isNew"
          :is-selected="tag.isSelected"
          :button-text="tag.text"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonWithSCSS from "@/components/Button.vue";
import { ref } from "@vue/composition-api";

export default {
  name: "App",
  components: {
    ButtonWithSCSS
  },
  setup() {
    const tagList = ref([
      {
        text: "다이어트",
        isNew: false,
        isSelected: false
      },
      {
        text: "간편식",
        isNew: false,
        isSelected: false
      },
      {
        text: "가공식품",
        isNew: true,
        isSelected: true
      }
    ]);

    return {
      tagList
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding: 20px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;

  &__tag {
    padding: 10px;

    ::v-deep .button__new {
      background-color: blue;
    }
  }
}
</style>
