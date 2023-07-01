import React from "react";
import img1 from "../../public/images/del.png";
import img2 from "../../public/images/pay.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className=" items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="flex gap-72 justify-between mt-8 text-dimWhite ">
          <div>
            <TbTruckDelivery className="text-9xl" />
            <h3>Super Fast and Free Delivery</h3>
          </div>
          <div>
            <GiReceiveMoney className="text-9xl" />
            <h3>Money-back Guaranteed</h3>
          </div>
          <div>
            <RiSecurePaymentLine className="text-9xl" />
            <h3>Super Secure Payment System</h3>
          </div>
          <div>
            <MdSecurity className="text-9xl" />
            <h3>Non-contact Shipping</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
