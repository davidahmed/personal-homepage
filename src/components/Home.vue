<template>
	<div>
		<section class="section">
		<Quote/>
		<h2 class="title">Homepage</h2>
		<p> This is my homepage; here, I publish things that I can't hold in my head for too long. </p>
		<p> I am a jack of few trades, and informally a devoted student of the holy science of Mathematics. My main academic interest lies within the field space of fields like Artificial Intelligence, Cyber Security, Software Engineering (and PLT), and Epistemology.</p>
		<p> Currently, I'm on a self-imposed sabbatical somewhere in Deutschland </p>
		<p>email: david[dot]ahmed[at]protonmail.com</p>
		</section>
	</div>
</template>

<script>
import Quote from './utilities/Quote.vue'; 
export default {
	name: 'Home',
	components: {
		Quote
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
