import React from "react";

interface ProjectCardProps {
  img: string;
  url: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  url,
  title,
  description,
  technologies,
}) => {
  return (
    <a className="z-50" id="project-link" href={`${url}`} target="_blank">
      <div className="project-card">
        <div className="image-container">
          <img className="project-image" src={img} />
        </div>
        <div className="project-info-container">
          <div className="project-title">{title}</div>
          <div className="">{description}</div>
          <div className="mt-[10px] break-normal">
            <span className="font-bold">Built with: </span>
            {technologies.join(", ")}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
