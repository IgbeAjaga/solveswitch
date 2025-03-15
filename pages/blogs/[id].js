import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import React from "react";

// ✅ This component no longer depends on `useRouter`
const SinglePost = ({ post }) => {
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS / JANUARY 12, 2022" />
            <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Phasellus at magna - elit tristique lacinia." />
              <p className="desc-p">
                Nulla iaculis convallis fermentum...
              </p>
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  );
};

export default SinglePost;

// ✅ This function fetches data for a specific post at build time
export async function getStaticProps({ params }) {
  const post = blogdata.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}

// ✅ This function generates all possible blog post paths at build time
export async function getStaticPaths() {
  const paths = blogdata.map((post) => ({
    params: { id: post.id.toString() }, // Convert `id` to string for URL
  }));

  return {
    paths,
    fallback: false, // `false` ensures only defined paths are built
  };
}
