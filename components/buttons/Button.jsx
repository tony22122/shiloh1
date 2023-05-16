import Link from "next/link";
const Button = ({ buttonText, buttonLink ="/",}) => {
  return (
    <Link href = {buttonLink} target="_blank" rel="noopener noreferrer">
      <button className="px-20 mt-8 mx-5 py-2 text-white border border-blue-500 rounded hover:border-white transition duration-300 ease-in-out focus:outline-none">
        {buttonText}
      </button>
    </Link>
  );
};

export default Button;

