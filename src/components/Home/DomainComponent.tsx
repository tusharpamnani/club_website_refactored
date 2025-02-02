import React from "react";

const DomainComponent = () => {
  const data = [
    {
      icon: "/Assets/ML.png",
      title: "Machine Learning",
      content:
        "Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence.",
    },
    {
      icon: "/Assets/WebDev.png",
      title: "Web Development",
      content:
        "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",
    },
    {
      icon: "/Assets/AppDev.png",
      title: "App Development",
      content:
        "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
    },
    {
      icon: "/Assets/Competitive.png",
      title: "Competitive Programming",
      content:
        "Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications.",
    },
    {
      icon: "/Assets/Designing.png",
      title: "Designing",
      content:
        "Designing is the creation of a plan or convention for the construction of an object, system or measurable human interaction.",
    },
    {
      icon: "/Assets/Blockchain.png",
      title: "Blockchain",
      content:
        "A blockchain is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1>Our Domains</h1>
      <div className="w-full flex gap-1 flex-wrap justify-evenly items-center">
        {data.map((item, index) => (
          <DomainCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

interface DomainCardProps {
  icon: string;
  title: string;
  content: string;
}

const DomainCard = ({ icon, title, content }: DomainCardProps) => {
  return (
    <div className="w-full">
      <img src={icon} alt={title} className="w-20 h-20" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default DomainComponent;
