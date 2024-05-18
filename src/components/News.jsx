const News = () => {
  const agencyData = [
    {
      topText: "Jan 4, 2016   |   In Culture",
      heading: "Akita Inu Dog",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, \nnascetur ridiculus mus. Lorem ipsum dolor sit amet\n consectetur adipiscing elit. Donec sed odio dui. Vivamus\n sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n\nDonec ullamcorper nulla non metus auctor fringilla. Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur",
      src: "/Images/news-img-1.png",
      classes: "bg-[#222222] flex flex-row",
    },
    {
      topText: "Jan 4, 2016   |   In Culture",
      heading: "Akita Inu Dog",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, \nnascetur ridiculus mus. Lorem ipsum dolor sit amet\n consectetur adipiscing elit. Donec sed odio dui. Vivamus\n sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n\nDonec ullamcorper nulla non metus auctor fringilla. Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur",
      src: "/Images/news-img-2.png",
      classes: "bg-[#f3f3f3] flex flex-row-reverse",
    },
  ];
  return (
    <div id="news" className="flex flex-col h-max w-full">
      {agencyData.map((agency, index) => (
        <div
          key={index}
          className={`${agency.classes} justify-between items-center`}
        >
          <div className="flex-grow flex flex-col items-center justify-center">
            <div className={index == 1 ? "text-black" : "text-white"}>
              <p className="text-xs leading-6 font-gotham">{agency.topText}</p>
              <h1 className="text-2xl leading-9 uppercase font-gotham font-medium">
                {agency.heading}
              </h1>
              <p className="text-sm leading-6 font-gotham whitespace-pre-line">
                {agency.description}
              </p>
            </div>
          </div>
          <img
            src={agency.src}
            alt=""
            className="w-6/12 object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

export default News;
