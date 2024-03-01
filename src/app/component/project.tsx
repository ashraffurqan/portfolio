import Link from 'next/link'
import React from 'react'
import project from "../../../public/project.jpg"
import sql from "@/app/component/sql.jpg"
import gallery from "@/app/component/gallery.jpg"
import Image from 'next/image'
import pro1 from "../../../public/pro1.jpg"

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* start project data */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-[50rem] h-[15rem] object-cover object-center"
                  src={project}
                  height={300}
                  width={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-10 hover:opacity-80">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    E-Comm Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Ecomm online Delivery Sites
                  </h1>
                  <p className="leading-relaxed">
                    wold wide online store many tems are there and very attractive discount and deals
                  </p>
                  <Link target='blank' href={"https://asanmart.vercel.app/"}>
                    <p className="leading-relaxed">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* start project data 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-[50rem] h-[15rem] object-cover object-center"
                  src={gallery}
                  height={300}
                  width={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-10 hover:opacity-80">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Gallery App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Gallery App Using with Cloudinay
                  </h1>
                  <p className="leading-relaxed">
                    Manage Profile Image or other help of cloudinay Server
                  </p>
                  <Link target='blank' href={"https://galler-app.vercel.app/"}>
                    <p className="leading-relaxed">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* start project data 33 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-[50rem] h-[15rem] object-cover object-center"
                  src={sql}
                  height={300}
                  width={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-10 hover:opacity-80">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    SQL Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Sql Project for save data in database
                  </h1>
                  <p className="leading-relaxed">
                    using serverless database for save time or power with vercel postgress databse
                  </p>
                  <Link target='blank' href={"https://office-project-lake.vercel.app"}>
                    <p className="leading-relaxed">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
