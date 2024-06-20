import Card from './Card';

function Desc() {
  return (
    <div className="w-full h-screen relative mt-60 text-black">
      <div className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/4 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".5"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="0%"
              x2="100%"
              y1="0%"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#4C1D97" /> 
              <stop offset="100%" stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pl-10">
        <h1 className="text-[85px] font-bold -tracking-wider text-black">
          EMPOWERING BRANDS.
        </h1>
        
        <p className="text-5xl font-bold  -tracking-wider text-black mt-4">
          Discover high-achieving content creators, customize your campaigns for your specific audience, and view the results across the entire conversion process, from creating awareness to boosting sales
        </p>
      </div>
      <div className='flex justify-around items-center gap-8'> 
    <Card title="+12 MILLION" subtitle="influencers to  discover" desc="With a search tool boasting access to over 12 million influencers, ensuring you to find the perfect match for your brand collaboration."/>

     
    <Card title="UNLIMITED" subtitle="global platform" desc="With the capability to reach across the globe, you can execute campaigns worldwide. Seamlessly plan and launch your influencer marketing anywhere in the world."/>

     
    <Card title="THOUSANDS" subtitle="of people engaged" desc="Create campaigns that resonate with people. Leverage the influence of creators to captivate audiences and drive meaningful connections for your brand."/>
      </div>
    </div>
  );
}

export default Desc;
