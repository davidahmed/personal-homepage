<template>
	<div>
		<div class="section">
		<h2 class="title">{{ project.title }}</h2>
		<img :src=project.imageLink>
		<p v-if="typeof(project.imageCredits) !== 'undefined'"> Image Credits: {{ project.imageCredits }}</p>
		<div v-html="project.content"></div>
		</div>
	</div>
	
</template>

<script>
import { Projects } from '../../assets/projects.js';

export default{
	name: 'Project',
	props: ['title'],
	computed: {
		project: function(){

			for (var i=0; i<Projects.length; i++){
				let slug = this.$route.params.slug
				if (Projects[i]['slug'] === slug){
					return Projects[i]
				}
			}
			return []
		}
	}
}
</script>
