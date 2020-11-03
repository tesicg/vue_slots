<template>
  <div>
    <child-component-1 class="child-component">
      <!-- Named slot -->
			<template v-slot:first>
				<p>First named slot</p>
			</template>
      <!-- Named slot -->
			<template v-slot:second>
        <p>Second named slot</p>
			</template>
      <!-- Named slot -->
			<template v-slot:third>
				<p>Third named slot</p>
			</template>
      <!-- Scoped slot -->
			<template v-slot:default="childData">
				<p>The data from child component: {{ childData.num }}</p>
			</template>
    </child-component-1>

    <child-component-2 class="child-component">
      <!-- Simple slot -->
      <p>AAAA</p>
      <p>BBBB, {{ someVariable }}</p>
			<p>CCCC</p>
			<p>DDDD</p>
    </child-component-2>

    <!-- Scoped slot -->
    <child-component-3 v-slot="{number}" class="child-component">
      {{ number }}
    </child-component-3>
  </div>
</template>

<script>
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import ChildComponent3 from './ChildComponent3';

export default {
  components: {
    ChildComponent1,
    ChildComponent2,
    ChildComponent3
  },
  data() {
    return {
      someVariable: `Some variable`
    }
  }
}
</script>

<style scoped>
  .child-component {
    border: 3px solid lightgrey;
    margin: 10px;
    padding: 5px;
  }
</style>