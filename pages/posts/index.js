import Link from "next/link";
import postStyles from "./index.module.css";

import Layout from "../../components/layout";
import Navigation from "../../components/Navigation/Navigation";
import LoggedInNav from "../../components/Navigation/LoggedInNav";
import Cookies from "universal-cookie";

const posts = ({ posts }) => {
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");

  return (
    <Layout>
      {cookie ? <LoggedInNav /> : <Navigation />}
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
                    <img
                      src={`https://blogged-for-you.herokuapp.com/uploads/${post.imageFileName}`}
                    ></img>
                    <p className={postStyles.title}>{post.title}</p>
                    {/* <p>{post.content}</p> */}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // for reading from file
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

async function getPosts() {
  const res = await fetch(
    `https://blogged-for-you.herokuapp.com/api/all-posts/`
  );
  const posts = await res.json();

  return posts;
}
export default posts;
