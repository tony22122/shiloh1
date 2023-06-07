import Link from "next/link";

const SubSection = ({ h2Text, p1Text, h3Text, p2Text }) => {
  return (
    <div className="relative bg-black-600 w-full h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="relative flex justify-center items-end w-full mb-20">
          <h2 className="text-5xl font-normal text-white mt-8">{h2Text}</h2>
        </div>
        <p className="text-white text-lg mx-4 px-2">{p1Text}</p>
        <h3 className="text-5xl font-normal text-white mt-8">{h3Text}</h3>
        <p className="text-white text-lg mx-4 px-2">{p2Text}</p>
      </div>
    </div>
  );
};

export default SubSection;
