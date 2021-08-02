import router from "next/router";
import Link from "next/link";
import Cookies from "universal-cookie";
import remark from "remark";
import html from "remark-html";

import EditPost from "../../../../components/EditPost/EditPost";

function editPost({ post }) {
  console.log("post", post);

  return (
    <>
      <div className="new-article">
        <h2> Edit Post</h2>

        <EditPost post={post} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://blogged-for-you.herokuapp.com/api/all-posts/`
  );
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  console.log("path>>", paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log("here");
  const res = await fetch(
    `https://blogged-for-you.herokuapp.com/api/posts/${params.id}`
  );

  const post = await res.json();

  const processedContent = await remark().use(html).process(post.content);

  post.content = processedContent.toString();

  return {
    props: { post },
  };
}

export default editPost;
