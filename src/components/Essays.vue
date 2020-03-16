<template>
	<div>
		<section class="section">
		<h2 class="subtitle"> Essays </h2>
		<p> These are essays from my personal writings, most of them won’t be available until I get the time and courage to type, format and post them here. </p>

		<div v-bind:key="essay.title" v-for="essay in essays">
			<p class="has-text-weight-bold">
			<a v-if="essay.meta && essay.meta.published">{{ essay.title }}</a> 
			<span v-else> {{ essay.title }} </span>
		</p>
		</div>
		</section>
		
		<section class="section">
		<h2 class="subtitle"> Musings </h2>
		</section>

		<section class="section">
		<h2 class="subtitle"> Personal/Reflections </h2>
		</section>

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
