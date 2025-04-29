const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto w-full">
      <div className="px-19">
        {/* text content */}
        <div></div>
        {/* video content */}
        <div className="w-full">
          <iframe
            src="https://player.vimeo.com/video/855018152?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="heroVideo"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
