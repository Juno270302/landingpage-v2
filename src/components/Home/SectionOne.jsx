import bigLogo from "../../assets/logo-big.png";
import bgMain from "../../assets/background-main.png";
import { motion } from "framer-motion";

const SectionOne = () => {
  const variants = {
    up: { y: -10 }, // Di chuyển lên
    down: { y: 10 }, // Di chuyển xuống
  };
  return (
    <>
      {/* Bản Web */}
      <div className="w-full flex flex-col justify-center items-center max-md:hidden">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-gradient text-[40px] max-sm:text-[20px] max-md:text-[25px] max-lg:text-[30px] max-xl:text-[40px] font-mont-bold">
            GOLDEN CLOUD
          </h1>
          <p className="text-[24px] max-sm:text-[12px] max-md:text-[16px] max-lg:text-[20px] max-xl:text-[24px] font-mont-regular">
            BIẾN Ý TƯỞNG CỦA BẠN THÀNH HIỆN THỰC
          </p>
        </div>
        <div className="w-full relative mt-10  ">
          <div className="relative w-full flex justify-center">
            <motion.img
              src={bigLogo}
              alt="Logo Lớn"
              className="w-[658px] z-10 "
              variants={variants}
              animate={["up", "down"]} // Chuyển động giữa hai trạng thái
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }} // Thời gian và kiểu lặp lại
            />
            <img
              src={bgMain}
              alt="Bg Main"
              className="absolute w-full z-0 -bottom-52 max-xl:-bottom-20 max-2xl:-bottom-36 "
            />
          </div>
          <div className="z-20 absolute top-5 left-[10%] px-10 py-4 text-[20px] background-gradient-l font-mont-bold max-lg:left-[0%] max-xl:left-[3%] max-2xl:left-[5%] max-md:text-[12px] max-lg:text-[16px] max-xl:text-[20px] max-lg:px-8 max-lg:py-3">
            Thiết Kế Website
          </div>
          <div className="z-20 absolute bottom-40 left-[2%] px-10 py-2 text-[20px] background-gradient-l font-mont-bold max-lg:-left-[10%] max-xl:-left-[5%] max-2xl:-left-[3%] max-md:text-[12px] max-lg:text-[16px] max-xl:text-[20px] max-lg:px-8 max-lg:py-1">
            Chuyển Đổi Số <br /> Doanh Nghiệp (ERP, CRM)
          </div>
          <div className="z-20 absolute top-5 right-0 px-10 py-4 text-[20px] background-gradient-r font-mont-bold max-md:text-[12px] max-lg:text-[16px] max-xl:text-[20px] max-lg:px-8 max-lg:py-3">
            Lập Trình Web Ecommerce
          </div>
          <div className="z-20 absolute bottom-36 right-[5%] px-10 py-4 text-[20px] background-gradient-r font-mont-bold max-md:text-[12px] max-lg:text-[16px] max-xl:text-[20px] max-lg:px-8 max-lg:py-3">
            Marketing
          </div>
        </div>
      </div>
      {/* Bản Mobie */}
      <div className="hidden max-md:block text-center">
        Chưa có bản Moblie đâu hì!!!
      </div>
    </>
  );
};

export default SectionOne;
