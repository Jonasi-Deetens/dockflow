import { FaGithub } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";

const GithubSocial = () => {
  return (
    <div className="github w-full h-full relative bg-neutral-50 flex items-center justify-center rounded-3xl">
      <FaGithub size={"50px"} />
      <a
        className="absolute bottom-2 left-2"
        href="https://github.com/Jonasi-Deetens"
        target="_blank"
      >
        <button className="border">
          <MdAdsClick />
        </button>
      </a>
    </div>
  );
};

export default GithubSocial;
