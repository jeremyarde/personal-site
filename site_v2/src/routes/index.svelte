<script>
	const posts = import.meta.glob('./posts/*.md');
	let body = [];
	let post_data;

	for (const path in posts) {
		body.push(posts[path]().then(({ metadata }) => metadata));
	}
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		console.log(body);
		const posts = await Promise.all(body);

		return {
			props: {
				posts
			}
		};
	}
	// console.log(fm(posts[0]));
</script>

<section>
	<p>Hello, I am a technologist focused on creating simple solutions to everyday problems.</p>
	<p>
		My current areas of interest include natural language processing (NLP),{' '}
		low resource machine leaning and the{' '}
		<a href="https://www.rust-lang.org/" target="_blank"> Rust programming language </a>
		.
	</p>
</section>
<section class="headingMd padding1px">
	<h2 class="headingLg">Recent Posts</h2>
	<ul class="list">
		<!-- {allPostsData.slice(0, 5).map(({ id, date, title }) => (
        <li class="listItem" key={id}>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small class="lightText">
            <Date dateString={date} />
          </small>
        </li>
      ))} -->
		{post_data}
	</ul>
</section>
