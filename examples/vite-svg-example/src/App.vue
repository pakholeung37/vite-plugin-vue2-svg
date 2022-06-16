<template>
  <MsgIcon @click="handleClick" style="fill: red; width: 200px; height: 200px" />
</template>

<script>
import MsgIcon from "./msg.svg";

export default {
  name: "App",
  components: {
    MsgIcon,
  },
  methods: {
    handleClick() {
      alert("clicked");
    }
  }
};
</script>
