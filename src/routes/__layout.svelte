<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main class="min-h-screen overflow-x-hidden">
	<slot />
</main>

<Footer />