<script setup lang="ts">
import MsgIcon from './msg.svg?component'

function handleClick() {
  // eslint-disable-next-line no-console
  console.log('clicked')
}
</script>

<template>
  <MsgIcon style="fill: red; width: 200px; height: 200px" @click="handleClick" />
</template>
