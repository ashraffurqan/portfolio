import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-8 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              A showcase of some of my recent work, focusing on web development projects.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
                <Link target='_blank' href={"https://asanmart.vercel.app/"}>
                  <Image
                    alt="project"
                    className="object-cover object-center h-[400px] w-[600px]"
                    src={'/project.jpg'}
                    height={400}
                    width={600}
                  />
                </Link>
                <div className="px-8 py-6 relative z-10 w-full bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
                    E-Comm Project
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                    Ecomm Online Delivery Site
                  </h1>
                  <p className="leading-relaxed text-base text-gray-600 mb-4">
                    World-wide online store offering attractive discounts and deals on a variety of products.
                  </p>
                  <Link target='_blank' href={"https://asanmart.vercel.app/"}>
                    <button className="text-blue-500 inline-flex items-center hover:text-blue-700">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
                <Link target='_blank' href={"https://galler-app.vercel.app/"}>
                  <Image
                    alt="gallery"
                    className="object-cover object-center h-[400px] w-[600px]"
                    src={'/gallery.JPG'}
                    height={400}
                    width={600}
                  />
                </Link>
                <div className="px-8 py-6 relative z-10 w-full bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
                    Gallery App
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                    Gallery App Using Cloudinary
                  </h1>
                  <p className="leading-relaxed text-base text-gray-600 mb-4">
                    Manage profile images and other features using Cloudinary's services for image storage and delivery.
                  </p>
                  <Link target='_blank' href={"https://galler-app.vercel.app/"}>
                    <button className="text-blue-500 inline-flex items-center hover:text-blue-700">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
                <Link target='_blank' href={"https://office-project-lake.vercel.app"}>
                  <Image
                    alt="sql"
                    className="object-cover object-center h-[400px] w-[600px]"
                    src={'/sql.JPG'}
                    height={400}
                    width={600}
                  />
                </Link>
                <div className="px-8 py-6 relative z-10 w-full bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
                    SQL Project
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                    SQL Database Management
                  </h1>
                  <p className="leading-relaxed text-base text-gray-600 mb-4">
                    Using a serverless database to save time and optimize power consumption, powered by Vercel's PostgreSQL database.
                  </p>
                  <Link target='_blank' href={"https://office-project-lake.vercel.app"}>
                    <button className="text-blue-500 inline-flex items-center hover:text-blue-700">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>


             {/* Project 4 */}
             <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
                <Link target='_blank' href={"https://hiringmine.vercel.app/"}>
                  <Image
                    alt="sql"
                    className="object-cover object-center h-[400px] w-[600px]"
                    src={'/hiringmine.JPG'}
                    height={400}
                    width={600}
                  />
                </Link>
                <div className="px-8 py-6 relative z-10 w-full bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
                    Frontend Template
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                    Hiringmine Frontend Template 
                  </h1>
                  <p className="leading-relaxed text-base text-gray-600 mb-4">
                    Using latest Next.js 15 with tailwind and shadcn ui .
                  </p>
                  <Link target='_blank' href={"https://hiringmine.vercel.app"}>
                    <button className="text-blue-500 inline-flex items-center hover:text-blue-700">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>



             {/* Project 5 */}
             <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
                <Link target='_blank' href={"https://saylani-p5ca.vercel.app/"}>
                  <Image
                    alt="sql"
                    className="object-cover object-center h-[400px] w-[600px]"
                    src={'/iphone.JPG'}
                    height={400}
                    width={600}
                  />
                </Link>
                <div className="px-8 py-6 relative z-10 w-full bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
                    Front End Template
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                    Saylani Homepage Vlone Template
                  </h1>
                  <p className="leading-relaxed text-base text-gray-600 mb-4">
                  Using latest Next.js 15 with tailwind and shadcn ui .
                  </p>
                  <Link target='_blank' href={"https://saylani-p5ca.vercel.app/"}>
                    <button className="text-blue-500 inline-flex items-center hover:text-blue-700">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>




             {/* Project 6 */}
             <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative shadow-lg hover:shadow-2xl transition-shadow rounded-lg overflow-hidden">
                <Link target='_blank' href={"https://office-project-lake.vercel.app"}>
                  <Image
                    alt="sql"
                    className="object-cover object-center h-[400px] w-[600px]"
                    src={'/saylani.JPG'}
                    height={400}
                    width={600}
                  />
                </Link>
                <div className="px-8 py-6 relative z-10 w-full bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
                  Front End Template
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                    Iphone Home Page Clone Template
                  </h1>
                  <p className="leading-relaxed text-base text-gray-600 mb-4">
                  Using latest Next.js 15 with tailwind and shadcn ui .
                  </p>
                  <Link target='_blank' href={"https://office-project-lake.vercel.app"}>
                    <button className="text-blue-500 inline-flex items-center hover:text-blue-700">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
