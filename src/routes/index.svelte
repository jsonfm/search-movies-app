<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { MoviesService } from "../services/movies.services";
	let moviesService = new MoviesService();
	let movies = moviesService.searchMovie();
	let movieName = "";

	let onTitleChange = (e: InputEvent) => {
		const target = e.target as HTMLInputElement;
		if(target){
			movieName = target.value;
			if(movieName.length > 3){
				movies = moviesService.searchMovie(movieName);
			}else{
				movies = new Promise( r => []);
			}
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="min-h-screen">
	<div class="max-w-[1024px] mx-auto mt-12 py-5">
		<div class="mx-auto flex flex-col items-center">
			<p class="text-2xl mb-5">Look for a movie 🍿</p>
			<input
				class="px-5 py-2 rounded-full max-w-[400px] w-80 text-blue-600 font-bold focus:border-blue-500 mb-5"
				type="search"
				placeholder="Spiderman, Alien, Matrix, etc ..."
				on:input={onTitleChange}
			/>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 place-content-center">
				{#await movies}
					{#if movieName.length > 3}
					<div class="mx-auto spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12" role="status">
						<span class="visually-hidden">...</span>
					</div>
					{/if}
				{:then response}
					{#each response as movie}
					<div class="p-4 flex flex-col items-center ease-in-out duration-100">
						<img
							src={movie.Poster}
							alt="Poster"
							class="h-64"
							loading="lazy"
						/>

						<p class="mt-4 font-semibold">{movie.Title}</p>
						<p>{movie.Year}</p>

					</div>
					{:else}
						<div class="my-12 font-bold">Something was wrong</div>
					{/each}
				{:catch error}
					<p>{error.message}</p>
				{/await}
			</div>
		</div>
	</div>
</section>
