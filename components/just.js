import useSWR from "swr";

export default function Profile() {
  //   const { data, error } = useSWR(
  //     "https://blogged-for-you.herokuapp.com/api/authors",
  //     fetch
  //   );

  //   if (error) return <div>failed to load</div>;
  //   if (!data) return <div>loading...</div>;
  //   return <div>hello {data.name}!</div>;

  return <h1>hello profile</h1>;
}   
