<template>
	<div>
		<aside class="menu">
		<figure class='image is-64x64'><img src='../assets/lambda-white.png'></figure>
			<ul class="menu-list">
			<p> In the beginning, there was &lambda;; then there was light! </p>
			<hr>
			<li><router-link to="/" exact>Home</router-link></li>
			<li><router-link to="/essays">Essays/ Musings</router-link></li>
			<li><router-link to="/bookshelf">My Bookshelf</router-link></li>
			<li><router-link to="/academic">Academic</router-link></li>
			<li><router-link to="/projects">Projects</router-link></li>
			<li><router-link to="/skills">Skills</router-link></li>
		</ul>
		</aside>
	</div>
</template>

<style scoped>
p {
	font-style: italic;
	color: #eeeeee;

}
hr {
	background-color: red
}

img {
	border: solid;
	border-width: 2px;
	border-color: white;
	margin: 2em;
	fill: white;

}

.menu-list{
	padding: 4em 2em 2em 2em;
}

.menu-list a{
	color: white;
}

.menu-list a:hover,
.menu-list a.router-link-active{
	color: white;
	background-color: transparent;
	font-weight: bold;
	text-decoration: underline;
}




</style>
