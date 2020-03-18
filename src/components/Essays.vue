<template>
	<div>
		<div class="section"><router-view/></div>
	</div>
</template>

<script>
import { Essays } from '../assets/essays.js'

export default {
	name: 'Essays',
	components: {

	},
	data() {
		return {
			essays: Essays,
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
