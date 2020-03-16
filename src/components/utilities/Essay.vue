<template>
	<div>

	<slot> Nothing here </slot>
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