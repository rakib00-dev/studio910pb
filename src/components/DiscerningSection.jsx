const DiscerningSection = () => {
  return (
    <section className="sectionWidth">
      <div className="wrapper py-20 grid md:grid-cols-2 overflow-hidden gap-10">
        <div className="flex justify-center items-center">
          <h2 className="text-center md:text-start text-[1.5rem] md:text-[2.8rem] font-light leading-8 md:leading-12 uppercase">
            What our{' '}
            <span style={{ color: 'var(--primary-blue)' }}>discerning</span>{' '}
            clients are saying...
          </h2>
        </div>
        <div className="grid grid-cols-2 place-items-center md:grid-cols-3 gap-5 px-2">
          <img
            src="/images/discerning/DSC01964-Edit-2-3-683x1024.jpg"
            alt=""
            loading="lazy"
            className=" w-full"
          />
          <img
            src="/images/discerning/DSC07186-2-683x1024.jpg"
            alt=""
            loading="lazy"
            className=" w-full"
          />
          <img
            src="/images/discerning/DSC05858-683x1024.jpg"
            alt=""
            loading="lazy"
            className=" w-full col-span-2 md:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscerningSection;
