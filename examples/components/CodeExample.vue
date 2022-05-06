
<template>
  <div
    class="code-example"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source" v-if="component">
      <component :is="component" />
    </div>
    <div
      class="meta"
      ref="meta"
      :style="{ height: childHeight }"
      v-if="component"
    >
      <div class="demo-container-code">
        <pre class="language-html" v-html="html" />
      </div>
    </div>
    <!-- <div class="demo-block-control" ref="control" @click="showCode = !showCode" v-if="component.name">
      <transition name="arrow-slide">
        <i :class="[iconClass(), { hovering: hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText() }}</span>
      </transition>
    </div>
    <el-tooltip content="隐藏代码" placement="left" v-if="component">
      <el-button v-show="fixedControl" class="is-fixed" @click="showCode = false" circle>
        <img src="../assets/hidden-code.png" width="18" />
      </el-button>
    </el-tooltip> -->
  </div>
</template>

<script setup lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref, watch, nextTick, onBeforeUnmount } from "vue";

const Prism = (window as any).Prism;

const props = defineProps({
  component: {
    type: Object,
    default: () => ({}),
  },
  description: String,
  label: {
    type: String,
    default: "Vue",
  },
  lang: String,
});

const html = computed(() => {
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});

const showCode = ref(false);
const hovering = ref(false);
const fixedControl = ref(false);
const scrollParent = ref<HTMLElement | null | undefined>();
const childHeight = ref("0");

// refs
const codeBlock = ref();
const control = ref();
const meta = ref();
watch(showCode, (val) => {
  nextTick(() => {
    childHeight.value = val ? `${codeBlock.value.$el.offsetHeight}px` : "0";
  });
  if (!val) {
    fixedControl.value = false;
    control.value.style.left = "0";
    removeScrollHandler();
    return;
  }
  setTimeout(() => {
    scrollParent.value = document.querySelector(
      ".page-component__scroll > .el-scrollbar__wrap"
    ) as HTMLElement;
    scrollParent.value &&
      scrollParent.value.addEventListener("scroll", scrollHandler);
    scrollHandler();
  }, 200);
});

onBeforeUnmount(() => {
  removeScrollHandler();
});

function iconClass() {
  return showCode ? "el-icon-caret-top" : "el-icon-caret-bottom";
}
function controlText() {
  return showCode ? "隐藏代码" : "显示代码";
}
// function  codeArea() {
//   return codeBlock.value
// },
function scrollHandler() {
  const { top, bottom, left } = meta.value.getBoundingClientRect();
  fixedControl.value =
    bottom > document.documentElement.clientHeight &&
    top + 44 <= document.documentElement.clientHeight;
  control.value.style.left = fixedControl.value ? `${left}px` : "0";
}

function removeScrollHandler() {
  scrollParent.value &&
    scrollParent.value.removeEventListener("scroll", scrollHandler);
}
</script>

<style lang="scss" scoped>
$themeColor: #2d61a2;

.code-example {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .is-fixed {
    position: fixed;
    bottom: 150px;
    margin-left: 795px;
    // right: 150px;
    color: #2d61a2;
    font-size: 16px;
  }

  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;

      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: $themeColor;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>
