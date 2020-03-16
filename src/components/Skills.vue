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
				quote: "A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.",
				author: "Robert Anson Heinlein"
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
