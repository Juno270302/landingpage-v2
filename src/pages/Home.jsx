import SectionFour from "../components/Home/SectionFour";
import SectionOne from "../components/Home/SectionOne";
import SectionThree from "../components/Home/SectionThree";
import SectionTwo from "../components/Home/SectionTwo";

const Home = () => {
  return (
    <>
      <div className="w-full py-10 px-20 space-y-40 max-sm:px-8 max-md:px-12 max-lg:px-16 max-xl:px-20 max-md:py-6">
        <div>
          <SectionOne />
        </div>
        <div>
          <SectionTwo />
        </div>
        <div>
          <SectionThree />
        </div>
        <div>
          <SectionFour />
        </div>
        
      </div>
    </>
  );
};

export default Home;
