import imgBlog from "../../assets/Image-blog.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RippleButton from "../RippleButton";
const a = [
  {
    id: 1,
    img: imgBlog,
    title: "Thiết Kế Website",
    description:
      "Chúng tôi tạo ra các trang web hiện đại, dễ sử dụng và thân thiện với người dùng. Từ ý tưởng ban đầu đến sản phẩm hoàn thiện, chúng tôi đảm bảo trang web của bạn không chỉ đẹp mắt mà còn hoạt động hiệu quả.",
    dl: 0.5,
  },
  {
    id: 2,
    img: imgBlog,
    title: "Lập Trình Web Ecommerce ",
    description:
      "Chúng tôi cung cấp các giải pháp thương mại điện tử toàn diện, giúp bạn xây dựng và quản lý cửa hàng trực tuyến chuyên nghiệp. Tích hợp các tính năng thanh toán an toàn và quản lý đơn hàng thông minh.",
    dl: 1,
  },
  {
    id: 3,
    img: imgBlog,
    title: "Chuyển Đổi Số Doanh Nghiệp (ERP, CRM)",
    description:
      "Chúng tôi hỗ trợ doanh nghiệp của bạn chuyển đổi số thành công với các hệ thống ERP và CRM tiên tiến, giúp tối ưu hóa quy trình quản lý và nâng cao hiệu quả hoạt động.",
    dl: 1.5,
  },
  {
    id: 4,
    img: imgBlog,
    title: "Marketing Trọn Gói",
    description:
      "Chúng tôi cung cấp các chiến dịch marketing toàn diện, từ quảng cáo trực tuyến đến tối ưu hóa công cụ tìm kiếm (SEO), giúp bạn tiếp cận và tương tác với khách hàng mục tiêu một cách hiệu quả.",
    dl: 2,
  },
];

const SectionFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(50px)",
      }}
      className="max-md:hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[26px] py-5"
      >
        Dịch Vụ
      </motion.div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-6 ">
        {a?.map((data) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: data.dl }}
              key={data.id}
              className="background-gradient-l flex flex-col justify-center py-20"
            >
              <div className=" flex justify-center">
                <img src={data.img} alt={data.title} />
              </div>
              <div className="px-20 space-y-3">
                <h2 className="text-[24px] font-mont-bold">{data.title}</h2>
                <p className="text-[14px] font-mont-regular">
                  {data.description}
                </p>
                <RippleButton className="px-6 py-3 bg-white text-black text-[14px] font-mont-bold">
                  Xem Thêm
                </RippleButton>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionFour;
