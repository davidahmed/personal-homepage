<template>
	<div>
		<section class="section has-padding-medium">
		<h2 class="subtitle"> Essays </h2>
		<p class="has-padding-medium"> These are essays from my personal writings, most of them won’t be available until I get the time and courage to type, format and post them here. </p>
		<br>
		<div v-bind:key="essay.title" v-for="essay in essays">
			<p class="has-text-weight-bold has-padding-medium">
			<span v-if="essay.meta && essay.meta.published && essay.meta.slug"> 
				<router-link :to="{
					name: 'essays.detail', 
					params: {
						slug: essay.meta.slug, 
						title: essay.title}}">{{ essay.title }}</router-link>
			</span> 
			<span v-else> {{ essay.title }} </span>
		</p>
		</div>
		</section>
		<br>
		<section class="section has-padding-medium">
		<h2 class="subtitle"> Musings </h2>
		<div v-bind:key="essay.title" v-for="essay in musings">
			<p class="has-text-weight-bold has-padding-medium">
			<span v-if="essay.meta && essay.meta.published && essay.meta.slug"> 
				<router-link :to="{
					name: 'essays.detail', 
					params: {
						slug: essay.meta.slug, 
						title: essay.title}}">{{ essay.title }}</router-link>
			</span> 
			<span v-else> {{ essay.title }} </span>
		</p>
		</div>
		</section>
		<br>
		<section class="section has-padding-medium">
		<h2 class="subtitle"> Personal </h2>

		<div v-bind:key="essay.title" v-for="essay in personal">
			<p class="has-text-weight-bold">
			<span v-if="essay.meta && essay.meta.published && essay.meta.slug"> 
				<router-link :to="{
					name: 'essays.detail', 
					params: {
						slug: essay.meta.slug, 
						title: essay.title}}">{{ essay.title }}</router-link>
			</span> 
			<span v-else> {{ essay.title }} </span>
		</p>
		</div>
		</section>

	</div>
</template>

<script>
import { Essays } from '../assets/essays.js'

function filterEssays(essays, type) {
	var arr= [];
	for (var i=0; i<essays.length; i++){
		if (essays[i].type === type){
			arr.push(essays[i]);
		}

		else if (type === 'essay' && !['musing', 'personal'].includes(essays[i].type)){
			arr.push(essays[i]);
		}
	}
	return arr;
}

export default {
	name: 'Essays',
	components: {
	},
	computed: {
		musings: function(){
			return filterEssays(Essays, 'musing')
		},
		essays: function(){
			return filterEssays(Essays, 'essay')
		},
		personal: function(){
			return filterEssays(Essays, 'personal')
		}
	}

}
</script>
