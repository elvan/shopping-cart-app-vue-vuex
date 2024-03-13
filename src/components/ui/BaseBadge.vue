<template>
  <span class="badge" :class="['badge--' + mode, { nml: noMarginLeft }]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['mode', 'noMarginLeft'],
};
</script>

<style scoped>
.badge {
  display: inline-block;
  margin: 0 0.75rem;
  padding: 0.15rem 1.25rem;
  border-radius: 30px;
  color: #292929;
  background-color: #ccc;
}

.nml {
  margin-left: 0;
}

.badge--highlight {
  color: black;
  background-color: #f0b800;
}

.badge--elegant {
  color: white;
  background-color: #45006d;
}
</style>
