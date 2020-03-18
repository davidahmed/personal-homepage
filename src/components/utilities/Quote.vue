<template>
	<div>
	<p class="has-text-weight-bold is-italic"> {{ quote }} </p>
	<p class="has-text-right is-italic"> {{ author }} </p> 
	</div>
</template>

<script>
export default{
	name: 'Quote',
	props: {
		quote: String,
		author: String
	}
}
</script>
