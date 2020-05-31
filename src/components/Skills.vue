<template>
	<div>
		<section class="section">
		<Quote :quote="quote.quote" :author="quote.author"/>
		</section>
	</div>
</template>

<script>
import Quote from './utilities/Quote.vue';
export default {
	name: 'Skills',
	components: {
		Quote
	},
	data() {
		return {
			quote: {
				quote: "The life so short, the crafts so long to learn.",
				author: "Geoffrey Chaucer"
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
