import { SectionHeader } from "./Constants";
const Blog = () => {
  const blogHeading = "Fresh Summer Campaign";
  const blogContent =
    "Cum sociis natoque penatibus et\nmagnis dis parturient montes,\nnascetur ridiculus mus. Lorem\nipsum dolor sit amet consectetur\nadipiscing elit. Donec sed odio dui.\nVivamus sagittis lacus vel augue";
  const blogImgSrcs = [
    "/src/assets/Images/blog-img-1.png",
    "/src/assets/Images/blog-img-2.png",
    "/src/assets/Images/blog-img-3.png",
    "/src/assets/Images/blog-img-4.png",
  ];
  return (
    <div className="bg-white py-6">
      <SectionHeader letter="B" sentence="Let's Blog" color="black">
        <p className="text-3xl leading-9 font-gotham text-[#222222]">
          We love clean design and advanced digital solutions.
        </p>
      </SectionHeader>
      <div className="flex items-center justify-center gap-10 mt-14">
        {blogImgSrcs.map((src, index) => (
          <div key={index} className="flex flex-col gap-4">
            <img
              src={src}
              alt=""
              className="w-[16.875rem] h-[17.5rem] object-cover object-center aspect-square"
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
