import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import sanityClient from "../client.js";
import  imageUrlBuilder  from '@sanity/image-url';

const builder =  imageUrlBuilder(sanityClient);
function urlFor(source:string){
    return builder.image(source)
}

const SinglePost = () =>  {
    const [singlePost, setSinglePost] = useState(null);
    const slug = useParams();

    useEffect(()=>{
        sanityClient
            .fetch(`*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                body
            }`)
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [])

    return (
        <div>
            <h1>Single Post</h1>
        </div>
    )
}

export default SinglePost
