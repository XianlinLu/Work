import { sitePath } from "@/lib/paths";

type ProjectCardProps = {
  title: string;
  discipline: string;
  image: string;
  overlay?: string;
  href: string;
  className: string;
  id: string;
  motionId: string;
  newTab?: boolean;
};

export function ProjectCard({
  title,
  discipline,
  image,
  overlay,
  href,
  className,
  id,
  motionId,
  newTab,
}: ProjectCardProps) {
  const resolve = (url: string) => (url.startsWith("/") ? sitePath(url) : url);
  return (
    <a
      id={id}
      data-w-id={motionId}
      className={className}
      href={resolve(href)}
      target={newTab ? "_blank" : undefined}
    >
      <div className="block-text-project">
        <div className="project-name">{title}</div>
        <div
          className={"project-year" + (discipline ? "" : " w-dyn-bind-empty")}
        >
          {discipline}
        </div>
      </div>
      {image && (
        <>
          <img
            className="image-project-absolute"
            src={resolve(overlay || image)}
            alt=""
          />
          <img className="image-project" src={resolve(image)} alt={title} />
        </>
      )}
    </a>
  );
}
