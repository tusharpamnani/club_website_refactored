import React from "react";

const data = [
  {
    imgUrl: "/Assets/Mentorship.png",
    title: "Our Aim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: "/Assets/Networking.png",
    title: "Our Aim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: "/Assets/Projects.png",
    title: "Our Aim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: "/Assets/Upskill.png",
    title: "Our Aim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: "/Assets/Vision.png",
    title: "Our Aim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: "/Assets/Events.png",
    title: "Our Aim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem mollitia facere aspernatur nam. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const AimComponent = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mt-10">Our Goals</h1>
      <div className="w-full flex gap-1 flex-wrap justify-evenly items-center">
        {data.map((item, index) => (
          <AimCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

interface AimCardProps {
  imgUrl: string;
  title: string;
  content: string;
}

const AimCard = ({ imgUrl, title, content }: AimCardProps) => {
  return (
    <div className="relative text-white px-3 py-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full md:w-1/3 lg:w-1/4">
      {/* Image */}
      <img
        src={imgUrl}
        alt={title}
        height="250px"
        width="250px"
        style={{
          filter:
            "drop-shadow(0 0 1.5rem #069F9F) drop-shadow(0 0 4.5rem #069F9F)",
        }}
        className="mb-4"
      />

      {/* Title with subtle effect */}
      <h1 className="text-gray-300 text-2xl font-semibold tracking-wider uppercase">
        {title}
      </h1>
      <div className="w-3/4 border-b border-gray-500 my-2"></div>

      {/* Content */}
      <p className="text-gray-400 text-lg leading-relaxed text-justify px-6">
        {content}
      </p>
    </div>
  );
};

export default AimComponent;
