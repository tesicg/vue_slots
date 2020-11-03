<template>
  <fieldset class="child-component__field--first">
    <legend class="child-component__legend">ChildComponent1</legend>
    <p>Content of ChildComponent1</p>
    <!-- Content from the parent gets rendered here. -->
    <slot name="first">Default content of first slot.</slot>
    <slot name="second">Default content of second slot.</slot>
    <slot name="third">Default content of third slot.</slot>
    <slot :num="number"></slot>
  </fieldset>
</template>

<script>
	export default {
		data() {
			return {
				number: 42
			}
		}
	}
</script>

<style scoped>
  .child-component__field--first {
    color: #00688B;
  }
  .child-component__legend {
    color: #0000EE;
  }
</style>