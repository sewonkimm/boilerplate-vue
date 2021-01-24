<template>
  <div class="home">
    <HelloWorld msg="Hello, world!" />
  </div>
</template>

<script>
console.log("message");
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld
  }
}
</script>
