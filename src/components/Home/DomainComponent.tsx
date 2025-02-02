import React from "react";

const DomainComponent = () => {
  const data = [
    {
      icon: "/Assets/WEB.png",
      title: "Web Development",
      content:
        "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",
    },

    {
      icon: "/Assets/CP.png",
      title: "Competitive Programming",
      content:
        "Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications.",
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
    <div className="w-full flex items-center justify-center px-4 my-10">
      <div className="flex-1 h-full w-1/2 py-10 flex justify-center items-center">
        <img src={icon} alt={title} className="h-full aspect-square drop-shadow-div" />
      </div>
      <div className="flex-1 w-1/3 flex flex-col">
        <div className="w-3/4">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default DomainComponent;
