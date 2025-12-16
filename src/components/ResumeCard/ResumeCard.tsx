import Image from "next/image";
import GoogleDocIcon from "~/icons/GoogleDoc";

const ResumeCard = () => (
  <div className="project-card flex flex-col gap-5 p-5">
    <div className="flex flex-row items-center justify-start gap-4">
      <GoogleDocIcon />
      <p className="text-xl font-bold">{" Anthony's Resume "}</p>
    </div>
    <a
      href="https://tonesbucket.s3.amazonaws.com/AnthonyArellanoResume.pdf"
      download
      target={"_blank"}
    >
      <div className="w-100 h-4/5 rounded-md bg-white">
        <Image
          src="/resumeImage.png"
          alt="Resume image"
          width={300}
          height={350}
        />
      </div>
    </a>
  </div>
);

export default ResumeCard;
