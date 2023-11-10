import React from "react";

interface ProjectCardProps {
  img: string;
  url: string;
  title: string;
  description: string;
  technologies: string[];
  construction?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  url,
  title,
  description,
  technologies,
  construction = false,
}) => {
  return (
    <a className="z-50" id="project-link" href={`${url}`} target="_blank">
      <div className="project-card">
        <div className="image-container">
          <img className="project-image" src={img} />
          {construction && (
            <div className="absolute top-[127px] w-full bg-gray-200/60 text-center text-black">
              🚧 Under construction 🚧
            </div>
          )}
        </div>
        <div className="project-info-container">
          <div className="project-title">{title}</div>
          <div className="px-2 pb-2">{description}</div>
          <div className="mt-[10px] break-normal p-2">
            <span className="font-bold">Built with: </span>
            {technologies.join(", ")}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
