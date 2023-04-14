<template>
  <Wrapper>
    <router-view />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";

export default {
  name: "App",
  components: {
    Wrapper,
  },
};
</script>

<style>
body {
  overflow: hidden;
}
</style>
