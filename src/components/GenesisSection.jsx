import React from 'react';

const GenesisSection = () => {
  return (
    <section className="sectionWidth">
      <div className="wrapper grid md:grid-cols-2 gap-10 md:gap-20 py-25">
        <img
          src="/images/genesis/IMG_6672-1024x683.jpg"
          alt=""
          loading="lazy"
        />
        <div className="flex justify-center items-start mx-auto flex-col gap-5">
          <h1 className="uppercase text-start text-[1.5rem] md:text-[2.5rem] font-light leading-8 md:leading-12">
            the <span style={{ color: 'var(--primary-blue)' }}>genesis</span> of
            what makes us better
          </h1>
          <a
            href="https://studio910pb.com/about/"
            className="transtion-all duration-300 uppercase flex justify-start py-3 px-6 border font-medium jumpHover hover:bg-white hover:text-black"
          >
            about studio 910
          </a>
        </div>
      </div>
    </section>
  );
};

export default GenesisSection;
