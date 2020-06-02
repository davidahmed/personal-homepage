<template>
	<div>
		<div class="section">
		<h2 class="title">{{ essay.title }}</h2>
		<div v-html="essay.content"></div>
		</div>
	</div>
	
</template>

<script>
import { Essays } from '../../assets/essays.js';

export default{
	name: 'Quote',
	props: ['title'],
	computed: {
		essay: function(){
			for (var i=0; i<Essays.length; i++){
				let slug = this.$route.params.slug
				if (Essays[i]['meta'] && Essays[i]['meta']['slug'] === slug){
					return Essays[i]
				}
			}
			return []
		}
	},
	mounted() {
		window.gtag('config', 'UA-163385520-1', 
		{'page_path': '/essays/'+this.$route.params.slug});
	}
}

</script>

<style scoped>
</style>