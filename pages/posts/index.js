import Link from "next/link";
import postStyles from "./index.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout";
import Navigation from "../../components/Navigation/Navigation";

const posts = ({ posts, allPostsData }) => {
  return (
    <Layout>
      <Navigation />
      <div className={postStyles.container}>
        <div className={postStyles.main}>
          <h1>Here are some posts</h1>
          <div className={postStyles.grid}>
            {posts.map((post) => {
              return (
                <a
                  href={`/posts/${post.id}`}
                  className={postStyles.card}
                  key={post.id}
                >
                  <div>
                    <h3 className={postStyles.title}>{post.title}</h3>
                    {/* <p>{post.content}</p> */}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
 
  const res = await fetch(
    `https://blogged-for-you.herokuapp.com/api/all-posts/`
  );
  const posts = await res.json();
  // for reading from file
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts,
      allPostsData,
    },
  };
}

export default posts;
