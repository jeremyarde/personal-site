import fs from "fs";
  import path from "path";
//   import grayMatter from "gray-matter";
    import fm from "front-matter";

  const getAllPosts = () =>
    fs.readdirSync("content").map(fileName => {
      const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
      return fm(post).data;
    });

  export function get(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const posts = getAllPosts();
    res.end(JSON.stringify(posts));
  }