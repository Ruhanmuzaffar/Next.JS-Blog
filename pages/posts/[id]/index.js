import Link from "next/link";
import remark from "remark";
import html from "remark-html";
import Navigation from "../../../components/Navigation/Navigation";
import SinglePost from "../../../components/SinglePost/SinglePost";
const singlePost = ({ post }) => {
  return (
    <>
      <Navigation />
      <SinglePost post={post} />

      <Link href="/posts">
        <a>Go Home &larr;</a>
      </Link>
    </>
  );
};

export async function getStaticProps({ params }) {
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

  return { paths, fallback: false };
}

export default singlePost;
