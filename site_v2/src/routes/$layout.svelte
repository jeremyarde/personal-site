<script>
	let siteTitle = 'title here';
	let name = 'Jeremy';
	let children = '';
</script>

<div class="container">
	<head>
		<link rel="icon" href="/favicon-32x32.png" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@jeremyarde" />
		<meta name="twitter:creator" content="@jeremyarde" />
		<meta property="og:url" content="https://jeremyrd.dev" />
		<meta property="og:title" content="Jeremy Arde - Ramblings" />
		<meta property="og:image" content="public\images\face.jpg" />
	</head>
	<title>{siteTitle}</title>
	<header class="header">
		<h2 class="headingXl">
			<a href="/" class="colorInherit">{name}</a>
			{' '}
		</h2>
		<nav>
			<a class="nav" href="/posts"> Posts </a>
		</nav>
	</header>
	<body>
		<slot />
	</body>
	<div>
		<div>
			<footer>
				<hr />
				<a href="https://github.com/jeremyarde/" target="_blank" class="fa fa-github">github</a>
				|
				<a href="https://twitter.com/jeremyarde" target="_blank" class="fa fa-twitter">twitter</a>
				|
				<a href="mailto:jere.arde@gmail.com">jere.arde@gmail.com</a>
			</footer>
		</div>
	</div>
</div>

<style>
	:global(.container) {
		max-width: 44rem;
		padding: 0 1rem;
		margin: 0rem auto 6rem;
	}

	:global(.header) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 1em 0;
		align-items: center;
	}
	:global(.nav) {
		margin-right: 0.5rem;
	}

	:global(body) {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		line-height: 1.6;
		font-size: 18px;
		background-color: rgb(39, 35, 35);
		color: antiquewhite;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		/* color: #a83244; */
		color: antiquewhite;
		text-decoration: underline 3px;
		text-decoration-color: #a83244;
		text-underline-offset: 5px 10px 20px 20px;
	}

	:global(a:hover) {
		/* text-decoration: ; */
		background-color: #772531bd;
	}

	:global(footer) {
		flex: auto;
		margin: auto;
	}

	:global(footer > a) {
		/* padding-inline-start: 2em; */
		/* margin-right: 2rem; */
		padding: 0 10px 0px 10px;
	}

	:global(.headingXl) {
		font-size: 2rem;
		line-height: 1.3;
		font-weight: 800;
		letter-spacing: -0.05rem;
		margin: 1rem 0;
	}

	:global(.headingLg) {
		font-size: 1.5rem;
		line-height: 1.4;
		margin: 1rem 0;
	}

	:global(.headingMd) {
		font-size: 1.2rem;
		line-height: 1.5;
	}

	:global(.borderCircle) {
		border-radius: 9999px;
	}

	:global(.colorInherit) {
		color: inherit;
	}

	:global(.padding1px) {
		padding-top: 1px;
	}

	:global(.list) {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	:global(.listItem) {
		margin: 0 0 1.25rem;
	}

	:global(.heading2Xl) {
		font-size: 2.5rem;
		line-height: 1.2;
		font-weight: 800;
		letter-spacing: -0.05rem;
		margin: 1rem 0;
	}

	:global(.headingXl) {
		font-size: 2rem;
		line-height: 1.3;
		font-weight: 800;
		letter-spacing: -0.05rem;
		margin: 1rem 0;
	}

	:global(.headingLg) {
		font-size: 1.5rem;
		line-height: 1.4;
		margin: 1rem 0;
	}

	:global(.headingMd) {
		font-size: 1.2rem;
		line-height: 1.5;
	}

	:global(.borderCircle) {
		border-radius: 9999px;
	}

	:global(.colorInherit) {
		color: inherit;
	}

	:global(.padding1px) {
		padding-top: 1px;
	}

	:global(.list) {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	:global(.listItem) {
		margin: 0 0 1.25rem;
	}

	:global(.lightText) {
		color: #999;
	}
	/* :global(.container) {
		max-width: 44rem;
		padding: 0 1rem;
		margin: 0rem auto 6rem;
	} */
</style>
