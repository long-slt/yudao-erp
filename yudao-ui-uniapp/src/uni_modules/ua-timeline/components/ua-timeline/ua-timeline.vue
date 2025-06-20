<!-- 自定义Timeline组件 -->
<script setup>
  import { formatCls } from './util.js'
  const props = defineProps({
    // 类型(card)
    type: { type: String, default: '' }
  })
  const emit = defineEmits(['click'])
  const preClass = formatCls(props, 've__timeline--', ['type'])
  // 事件
  const handleClick = (e) => {
    emit('click', e)
  }
</script>

<template>
  <ul class="ve__timeline" :class="[preClass]" @click="handleClick">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
  $color-primary: #409eff;
  $color-success: #31c48d;
  $color-warning: #e6a23c;
  $color-danger: #f56c6c;
  $color-info: #909399;
  $color-white: #fff;
  $color-black: #000;

  /*Hover/Active Color*/
  $primary-outline-color: #d9ecff;
  /*Font Color*/
  $color-text-primary: #303133;
  $color-text-regular: #606266;
  $color-text-secondary: #909399;
  $color-text-placeholder: #c0c4cc;
  /*Border Color*/
  $border-color-base: #dcdfe6;
  $border-color-light: #e4e7ed;
  $border-color-lighter: #ebeef5;
  $border-color-extra-light: #f2f6fc;
  /*Background*/
  $background-color-base: #f5f7fa;
  /*Box-shadow*/
  $box-shadow:
    0 3px 9px rgba(0, 0, 0, 0.08),
    0 3px 3px rgba(0, 0, 0, 0.04);
  $box-shadow-base:
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  $box-shadow-light:
    0 4px 12px -8px rgba(0, 0, 0, 0.1),
    0 6px 18px 0 rgba(0, 0, 0, 0.06),
    0 8px 24px 16px rgba(0, 0, 0, 0.03);
  $box-shadow-lighter:
    0 6px 16px -8px rgba(0, 0, 0, 0.08),
    0 9px 28px 0 rgba(0, 0, 0, 0.04),
    0 12px 48px 16px rgba(0, 0, 0, 0.03);
  $border-width-base: 1px;
  $border-style-base: solid;
  $border-color-hover: $color-text-placeholder;
  $border-base: $border-width-base $border-style-base $border-color-base;
  $border-radius-base: 4px;
  $border-radius-small: 2px;
  $border-radius-circle: 100%;
  $border-radius-zero: 0;
  $size-base: 14px;
  $font-size-extra-large: 18px;
  $font-size-large: 16px;
  $font-size-base: 14px;
  $font-size-small: 12px;
  $font-weight-primary: 500;
  $font-weight-secondary: 100;
  $font-line-height-primary: 24px;
  $font-line-height-secondary: 16px;
  $font-color-disabled-base: #bbb;
  $disabled-fill-base: $background-color-base;
  $disabled-color-base: $color-text-placeholder;
  $disabled-border-base: $border-color-light;
  $height-base: 32px;
  $large-height-base: 40px;
  $small-height-base: 24px;

  /* Timeline
	--------------------------------*/
  $timeline-font-size: $font-size-base;
  $timeline-node-color: $border-color-light;
  $timeline-node-size: $font-size-small;

  .ve__timeline {
    font-size: $timeline-font-size;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ve__timeline-item {
    padding-bottom: 20px;
    position: relative;
  }
  .ve__timeline-item:last-child {
    padding-bottom: 0;
  }
  .ve__timeline-item__line {
    border-left: 2px solid $timeline-node-color;
    height: 100%;
    position: absolute;
    left: calc(($timeline-node-size - 2px) / 2);
  }
  .ve__timeline-item:last-child .ve__timeline-item__line {
    display: none;
  }
  .ve__timeline-item__node {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: $timeline-node-color;
    border-radius: 50%;
    height: $timeline-node-size;
    width: $timeline-node-size;
    position: absolute;
  }
  .ve__timeline-item__node [class*='ve-icon-'] {
    color: #fff;
    font-size: inherit;
  }
  .ve__timeline-item__dot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }
  .ve__timeline-item__body {
    padding-left: calc($timeline-node-size + 18px);
    position: relative;
    top: calc($timeline-node-size / 2 - 9px);
  }
  .ve__timeline-item__content {
    color: $color-text-primary;
    font-size: inherit;
    font-family: system-ui;
    word-break: break-all;
  }
  .ve__timeline-item__timestamp {
    color: $color-text-secondary;
    font-size: 12px;
    line-height: 1;
  }
  .ve__timeline-item__timestamp.is-top {
    margin-bottom: 7px;
    padding-top: 3px;
  }
  .ve__timeline-item__timestamp.is-bottom {
    margin-top: 7px;
  }

  /*type*/
  .ve__timeline-item--primary .ve__timeline-item__node {
    background-color: $color-primary;
  }
  .ve__timeline-item--primary .ve__timeline-item__dot {
    color: $color-primary;
  }
  .ve__timeline-item--success .ve__timeline-item__node {
    background-color: $color-success;
  }
  .ve__timeline-item--success .ve__timeline-item__dot {
    color: $color-success;
  }
  .ve__timeline-item--warning .ve__timeline-item__node {
    background-color: $color-warning;
  }
  .ve__timeline-item--warning .ve__timeline-item__dot {
    color: $color-warning;
  }
  .ve__timeline-item--danger .ve__timeline-item__node {
    background-color: $color-danger;
  }
  .ve__timeline-item--danger .ve__timeline-item__dot {
    color: $color-danger;
  }
  .ve__timeline-item--info .ve__timeline-item__node {
    background-color: $color-info;
  }
  .ve__timeline-item--info .ve__timeline-item__dot {
    color: $color-info;
  }

  /*卡片card*/
  .ve__timeline--card .ve__timeline-item__content {
    border-radius: 4px;
    box-shadow: 0 1px 4px $border-color-base;
    padding: 20px;
  }
</style>
