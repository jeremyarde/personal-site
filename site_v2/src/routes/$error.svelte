<!-- <h1>Oops! 404 - Page Not Found.</h1>
<p>I don't think you are supposed to be here...</p> -->
<script context="module">
	export function load({ error, status }) {
		title = `${status}: ${error.message}`;
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<h1>{title}</h1>
