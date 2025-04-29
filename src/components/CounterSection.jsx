import CountUp from 'react-countup';

const CounterSection = () => {
  return (
    <section className="sectionWidth">
      <div className="wrapper grid py-20">
        <div className="pt-5 pb-20 grid gap-5 uppercase">
          <h1 className="text-center text-[1.8rem] md:text-[2.5rem] font-light leading-12">
            Reflecting the{' '}
            <span style={{ color: 'var(--primary-blue)' }}>aspirations</span>{' '}
            <br /> of the modern buyer
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <CounterCard />
          <CounterCard
            Beforetitle={'$'}
            Aftertitle={'B+'}
            start="1"
            end="3"
            subTitle="Shot in 2024"
          />
          <CounterCard
            Aftertitle={'+'}
            start="77"
            end="100"
            subTitle="5 Star Reviews"
          />
          <CounterCard
            Beforetitle={'$'}
            Aftertitle={'M+'}
            start="41"
            end="56"
            subTitle="Commissions Earned"
            className="border-r-transparent bord"
          />
        </div>
      </div>
    </section>
  );
};

const CounterCard = ({
  Beforetitle = null,
  Aftertitle = 'M+',
  subTitle = 'Views Generated',
  start = '13',
  end = '25',
  className = 'border-b md:border-r md:border-b-transparent',
}) => {
  return (
    <div
      className={`p-10 text-center border-b md:border-b-transparent ${className}`}
    >
      <h4 className="text-4xl md:text-5xl font-light">
        {Beforetitle}
        <CountUp start={start} end={end} duration={5} />
        {Aftertitle}
      </h4>
      <p className="text-xl md:text-2xl text-gray-400">{subTitle}</p>
    </div>
  );
};

export default CounterSection;
