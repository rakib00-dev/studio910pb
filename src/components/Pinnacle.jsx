const Pinnacle = () => {
  return (
    <section className="relative sectionWidth pinnacleSection w-fit h-full">
      <div className="wrapper py-20">
        <div className="absolute inset-0 bg-gray-800/50 bg-opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-center text-[2.4rem] md:text-[4rem] font-light">
            This is the{' '}
            <span style={{ color: 'var(--primary-blue)' }}>pinnacle</span> of
            real estate media.
          </h1>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Pinnacle;
