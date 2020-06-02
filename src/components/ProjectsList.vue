<template>
	<div>
		<section class="section has-padding-medium">
		<h1 class="title"> Projects </h1>
		<p class="has-padding-medium"> Here’s is a list of interesting projects (professional/amateur) I have worked on or am working on. I update this page as I get time and gather the patience to dig out my digital archives, and at any given time it could be incomplete. But if I could be of any help and if it’s something I can share (anything non-proprietary), then please feel free to get in touch with me. </p>
		<br>

		<div class="card is-shadowless" v-bind:key="project.title" v-for="project in projects">
			<div class="has-text-weight-bold has-padding-medium">
				<router-link :to="{
						name: 'projects.detail', 
						params: {
							slug: project.slug, 
							title: project.title
							}
						}">
							<span class='is-size-4 is-family-primary'>{{ project.title }}</span>
				</router-link>
				<div>
					<img v-bind:src="project.imageLink">
					<br>
					<span class="tag has-text-white has-background-grey-dark" v-for="tag in project.tags" :key="tag"> {{ tag }} </span>
				</div>
				<div>
					<br>
					<span class="has-text-grey has-text-weight-light is-italic"> {{ project.date }} </span>
				</div>
			</div>
		</div>
		</section>
	</div>
</template>

<script>
import { Projects } from '../assets/projects.js'


export default {
	name: 'Projects',
	components: {
	},
	data() {
		return {
			projects: Projects,
		}
	},
	mounted() {
		window.gtag('config', 'UA-163385520-1', 
		{'page_path': '/projects'});
	}

}
</script>

<style scoped>
.tag{
    margin-right:2em;
}
.card{
	margin-top:2em;
	border: solid 1px;
	color: green;
}

.card img{
	max-height:200px;
	width:100%
}

</style>
