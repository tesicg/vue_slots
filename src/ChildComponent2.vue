<template>
  <fieldset class="child-component__field--second">
    <legend class="child-component__legend">ChildComponent2</legend>
    <p>Content of ChildComponent2</p>
    <!-- Content from the parent gets rendered here. -->
		<slot></slot>
  </fieldset>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
  .child-component__field--second {
    color: #68838B;
  }
  .child-component__legend {
    color: #0000EE;
  }
</style>