import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center max-md:hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(50px)",
      }}
    >
      <motion.h2
        className="font-mont-bold text-[26px] max-sm:text-[14px] max-md:text-[18px] max-lg:text-[22px] max-xl:text-[26px] py-5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Chúng Tôi
      </motion.h2>
      <motion.p
        className="text-[16px] font-mont-regular px-40 text-center max-sm:text-[10px] max-md:text-[12px] max-lg:text-[14px] max-xl:text-[16px] max-sm:px-0 max-md:px-5 max-lg:px-10 max-xl:px-40"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Golden Cloud Solutions là một công ty công nghệ hàng đầu, chuyên cung
        cấp các giải pháp thiết kế web, lập trình web Ecommerce, chuyển đổi số
        cho doanh nghiệp và dịch vụ marketing trọn gói. Với sứ mệnh mang đến sự
        đổi mới và phát triển bền vững, chúng tôi cam kết luôn đồng hành và hỗ
        trợ khách hàng đạt được mục tiêu kinh doanh của mình.
      </motion.p>
    </div>
  );
};

export default SectionTwo;
