<template>
  <fieldset class="child-component__field--third">
    <legend class="child-component__legend">ChildComponent3</legend>
    <p>Content of ChildComponent3</p>
    <slot :number="number"></slot>
  </fieldset>
</template>

<script>
	export default {
		data() {
			return {
        number: 100
			}
		}
	}
</script>

<style scoped>
  .child-component__field--third {
    color: #50A6C2;
  }
  .child-component__legend {
    color: #0000EE;
  }
</style>