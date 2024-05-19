/* import { SectionHeader } from "./Constants";
const Blog = () => {
  const blogHeading = "Fresh Summer Campaign";
  const blogContent =
    "Cum sociis natoque penatibus et\nmagnis dis parturient montes,\nnascetur ridiculus mus. Lorem\nipsum dolor sit amet consectetur\nadipiscing elit. Donec sed odio dui.\nVivamus sagittis lacus vel augue";
  const blogImgSrcs = [
    "/Images/blog-img-1.png",
    "/Images/blog-img-2.png",
    "/Images/blog-img-3.png",
    "/Images/blog-img-4.png",
  ];
  return (
    <div id="blog" className="bg-white py-6">
      <SectionHeader letter="B" sentence="Let's Blog" color="black">
        <p className="leading-9 font-gotham text-[#222222] sm:text-center text-xl xl:text-3xl">
          We love clean design and advanced digital solutions.
        </p>
      </SectionHeader>
      <div className="flex items-center justify-center gap-10 mt-14 sm:flex-col lg:grid md:grid grid-cols-2 md:gap-4 md:px-8 lg:px-10">
        {blogImgSrcs.map((src, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 md:items-center md:gap-2 lg:items-center"
          >
            <img
              src={src}
              alt=""
              className="object-cover object-center sm:w-auto sm:h-[180px] xl:w-[16.875rem] h-[17.5rem] aspect-square md:w-[250px] md:h-auto lg:w-[400px] lg:h-auto lg:aspect-video"
              key={index}
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-lg leading-9 uppercase text-[#11479e] text-center font-semibold font-gotham">
                {blogHeading}
              </h1>
              <p className="text-sm leading-6 font-gotham text-[#222222] text-center whitespace-pre-line">
                {blogContent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
 */

import { SectionHeader } from "./Constants";

const Blog = () => {
  // Heading and content for each blog item
  const blogHeading = "Fresh Summer Campaign";
  const blogContent =
    "Cum sociis natoque penatibus et\nmagnis dis parturient montes,\nnascetur ridiculus mus. Lorem\nipsum dolor sit amet consectetur\nadipiscing elit. Donec sed odio dui.\nVivamus sagittis lacus vel augue";
  // Image sources for the blog items
  const blogImgSrcs = [
    "/Images/blog-img-1.png",
    "/Images/blog-img-2.png",
    "/Images/blog-img-3.png",
    "/Images/blog-img-4.png",
  ];

  return (
    // Main container for the Blog section with white background and vertical padding
    <div id="blog" className="bg-white py-6">
      {/* Section header with a letter, sentence, and custom color */}
      <SectionHeader letter="B" sentence="Let's Blog" color="black">
        <p className="leading-9 font-gotham text-[#222222] sm:text-center text-xl xl:text-3xl">
          We love clean design and advanced digital solutions.
        </p>
      </SectionHeader>
      {/* Container for blog items with responsive grid layout */}
      <div className="flex items-center justify-center gap-10 mt-14 sm:flex-col lg:grid md:grid grid-cols-2 md:gap-4 md:px-8 lg:px-10">
        {blogImgSrcs.map((src, index) => (
          // Container for each blog item including image and text content
          <div
            key={index}
            className="flex flex-col gap-4 md:items-center md:gap-2 lg:items-center"
          >
            {/* Blog image with responsive styles */}
            <img
              src={src}
              alt=""
              className="object-cover object-center sm:w-auto sm:h-[180px] xl:w-[16.875rem] h-[17.5rem] aspect-square md:w-[250px] md:h-auto lg:w-[400px] lg:h-auto lg:aspect-video"
              key={index}
            />
            {/* Blog text content */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-lg leading-9 uppercase text-[#11479e] text-center font-semibold font-gotham">
                {blogHeading}
              </h1>
              <p className="text-sm leading-6 font-gotham text-[#222222] text-center whitespace-pre-line">
                {blogContent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
