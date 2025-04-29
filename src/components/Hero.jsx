const Hero = () => {
  return (
    <section className="sectionWidth">
      <div className="wrapper">
        {/* text content */}
        <div className="pt-5 pb-20 grid gap-5 uppercase">
          <h1 className="text-center text-[2.4rem] md:text-[4rem] font-light">
            Your <span style={{ color: 'var(--primary-blue)' }}>bespoke</span>{' '}
            partner.
          </h1>
          <h3 className="text-center text-[1.8rem] md:text-[2.5rem] font-light">
            Luxury real estate media to impress
          </h3>
        </div>
        {/* video content */}
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            src="https://player.vimeo.com/video/855018152?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
