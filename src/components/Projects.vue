<template>
	<div>
		<div class="section"><router-view/></div>
	</div>
</template>

<script>
import { Projects } from '../assets/projects.js'

export default {
	name: 'Projects',
	components: {

	},
	data() {
		return {
			essays: Projects,
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
