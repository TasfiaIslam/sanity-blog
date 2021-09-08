import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { RouteComponentProps } from 'react-router-dom';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: string) {
  return builder.image(source);
}

export interface asset {
  _id: string;
  url: string;
}

export interface mainImage {
  asset: asset;
  alt: string;
}

export interface slug {
  current: string;
}

export interface ISinglePost {
  _id: string;
  title: string;
  mainImage: mainImage;
  body: Text;
  name: string;
  slug: slug;
  authorImage: string;
}

interface RouteParams {
  slug: string;
}

const SinglePost: React.FC<RouteComponentProps<any>> = () => {
  const [singlePost, setSinglePost] = useState<ISinglePost | null>(null);
  const { slug } = useParams<RouteParams>();
  console.log(1, slug);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image,
            }`,
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) {
    return <div>"loading"</div>;
  }

  return (
    <main className="min-h-screen">
      <section className="w-11/12 mx-auto">
        <h1 className="page-heading">Post Detail</h1>
        <article className="w-1/2  mx-auto my-4">
          <header className="mb-4">
            <h1 className="my-4 font-semibold text-lg 2xl:text-xl">{singlePost.title}</h1>
            <div className="w-full flex items-center space-x-2">
              <img
                src={urlFor(singlePost.authorImage).url()}
                alt={singlePost.name}
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
              <p className="text-base 2xl:text-lg text-gray-400">{singlePost.name}</p>
            </div>
          </header>
          <img
            className="w-full h-full object-cover"
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
          />
          <div className="my-8 text-justify">
            <BlockContent blocks={singlePost.body} projectId="nkackl28" dataset="production" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default SinglePost;
