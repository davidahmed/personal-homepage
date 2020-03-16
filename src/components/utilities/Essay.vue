<template>
	<div>
	<p class="has-text-weight-bold is-italic"> </p>
	<p class="has-text-right is-italic"> -Johann Wolfgang von Goethe </p> 
	</div>
</template>

<script>
export default{
	name: 'Quote',
	props: {
		title: String,
		content: String,
		meta: Object
	}

}
</script>