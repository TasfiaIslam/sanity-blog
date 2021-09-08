import React, {useState, useEffect} from 'react';
import sanityClient from "../client.js"

export interface IProject {
    id: string;
    title: string;
    date: Date;
    description: Text;
    projectType: string;
    link: string;
    tags: Array<string>;
  }

const Project = () =>  {
    const [projectData, setProjectData] = useState<IProject[]>([]);

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                date,
                description,
                projectType,
                link,
                tags
            }`)
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, [])


    return (
        <main className="min-h-screen">
            <section className="section-container">
            <h1 className="page-heading">Projects</h1>
                <h2 className="text-lg text-gray-600  flex justify-center mb-12">Welcome to my projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) =>(
                        <article>
                                <div className="block h-64 relative rounded shadow leading-snug bg-white"
                                key={project.id}>
                                    <h1>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" >{project.title}</a>
                                    </h1>
                                    <p>{project.description}</p>
                                </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Project
