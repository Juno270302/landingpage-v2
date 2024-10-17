import { useRef } from "react";
import hiddenImage from "../../assets/hidden-image.png";
import { motion, useInView } from "framer-motion";

const SectionThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(50px)",
        }}
        className="w-full flex max-md:hidden"
      >
        <div className="w-[50%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={hiddenImage} alt="hiddenImage" className="w-[430px] max-sm:w-[200px] max-md:w-[300px] max-lg:w-[350px] max-xl:w-[430px]"/>
            <div className="pr-[40%]">
              <h2 className="text-[26px] font-mont-bold py-2">GIẢI PHÁP</h2>
              <p>
                Golden Cloud Technology luôn cống hiến hết mình cho ra những sản
                phẩm với tiêu chí tốt và chi phí phải chăng.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-[50%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={hiddenImage} alt="hiddenImage" className="w-[430px] max-sm:w-[200px] max-md:w-[300px] max-lg:w-[350px] max-xl:w-[430px]"  />
            <div className="">
              <h2 className="text-[26px] font-mont-bold py-2 max-sm:w-[200px] max-md:w-[300px] max-lg:w-[350px] max-xl:w-[430px]">QUÁ TRÌNH</h2>
              <div>
                <p>Thu thập và đánh giá</p>
                <p>Phân tích và tối ưu hoá giải pháp</p>
                <p>Tham vấn và lên kế hoạch xây dựng giải pháp</p>
                <p>
                  Triển khai và thu thập thông tin - Bảo dưỡng và phát triển hậu
                  kỳ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
