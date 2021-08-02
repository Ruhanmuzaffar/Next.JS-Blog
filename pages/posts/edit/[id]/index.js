import router from "next/router";
import Link from "next/link";
import Cookies from "universal-cookie";
import remark from "remark";
import html from "remark-html";

import EditPost from "../../../../components/EditPost/EditPost";
import EditDelete from "../../../../components/SinglePost/EditDelete";

function editPost({ post }) {
  console.log("post", post);

  // edit
  const editTheArticle = async (event) => {
    event.preventDefault();
    console.log("event>", event.target);

    const cookies = new Cookies();
    const token = cookies.get("jwtToken");
    const file = event.target.img.files[0];

    const formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("markdown", event.target.markdown.value);
    if (file) {
      formData.append("img", file);
    }

    //https://blogged-for-you.herokuapp.com/api/posts/25
    // article? or post?
    const submittedData = await fetch(
      `https://blogged-for-you.herokuapp.com/api/posts/${article.id}`,
      {
        body: formData,
        headers: {
          Authorization: token,
        },
        method: "PUT",
      }
    );
    const editedArticle = await submittedData.json();
    router.push(`/posts/${editedArticle.id}`);
  };
  return (
    <>
      <div className="new-article">
        <h2> Edit Post</h2>

        <EditPost post={post} />
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   const paths = await getAllArticlesId();
//   return {
//     paths,
//     fallback: false,
//   };
// }

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

// export async function getStaticProps({ params }) {
//   const article = await getArticleById(params.id);
//   return {
//     props: {
//       article,
//     },
//   };
// }

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
