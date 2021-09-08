import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import postType from '../../blog/schemas/post';

export interface asset {
  _id: string;
  url: string;
}

export interface slug {
  current: string;
}

export interface mainImage {
  asset: asset;
  alt: string;
}

export interface IPost {
  id: string;
  title: string;
  slug: slug;
  mainImage: mainImage;
}

const Post = () => {
  const [postData, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`,
      )
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);
  return (
    <main className=" min-h-screen">
      <section className="section-container">
        <h1 className="page-heading">Blog Posts</h1>
        <h2 className="page-sub-heading">Welcome to my blog posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData.map((post) => (
            <article>
              <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white"
                  key={post.id}
                >
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="w-full h-full rounded-r object-cover absolute opacity-60 "
                  />
                  <span className="relative h-full flex justify-end items-end pr-4 pb-4 font-bold text-xl 2xl:text-2xl text-gray-900">
                    <h3>{post.title}</h3>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
