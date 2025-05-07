import React from "react";
import { Zap, ShieldCheck, Headset } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Zap size={50} />,
      title: "Easy Exchange Policy",
      description: "We offer hassle free exchange policy",
    },
    {
      id: 2,
      icon: <ShieldCheck size={50} />,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      id: 3,
      icon: <Headset size={50} />,
      title: "Best customer support",
      description: "we provide 24/7 customer support",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 leading-relaxed tracking-wider my-30">
      {services.map((service,index) => {
        const duration = 500 + index * 200; // 500ms + 200ms * index
        const delay = index * 80;
        return (
          <div
            key={service.id}
            className=" text-center"
            data-aos="fade-up-right"
            data-aos-duration={duration}
            data-aos-delay={delay}
          >
            <div className="flex justify-center mb-4 ">{service.icon}</div>
            <p className="text-base font-semibold ">{service.title}</p>
            <p className="text-gray-500 text-base">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
