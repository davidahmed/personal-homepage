<template>
	<div>
		<section class="section">
		<Quote quote="Ohne Hast, ohne Rast." author="Johann Wolfgang Von Goethe"/>
		<hr>
		<h2 class="title">Homepage</h2>
		<p> This is my homepage; here, I publish things that I can't hold in my head for too long. </p>
		<p> I am a jack of few trades, and informally a devoted student of the holy science of Mathematics.
		My life-long interest lies within and around the field space of fields like Artificial (General) Intelligence,
		Software Engineering (and PLT), Linguistics, and Epistemology.</p>
		<p> Currently, I'm on a self-imposed 'sabbatical' somewhere in Deutschland. </p>
		</section>
	</div>
</template>

<script>
import Quote from './utilities/Quote.vue';
export default {
	name: 'Home',
	components: {
		Quote
	},
	mounted() {
		window.gtag('config', 'UA-163385520-1', 
		{'page_path': '/home'});
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
