<template>
	<div>
		<section class="section">
		<Essay/>
		</section>
	</div>
</template>

<script>
import Essay from './utilities/Essay.vue'; 
export default {
	name: 'Essays',
	components: {
		Essay
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
