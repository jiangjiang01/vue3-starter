<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1 class="color-green text-center text-30 font-bold">{{ msg }}</h1>
  </div>
</template>
