<script>
	// var fm = require('front-matter');

	const posts = import.meta.glob('./posts/*.md');

	for (const path in posts) {
		posts[path]().then((mod) => {
			console.log(path, mod);
		});
	}

	console.log('posts', posts);

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
	</ul>
</section>
