import { sitePath } from "@/lib/paths";

type GalleryProps = {
  listClass: string;
  itemClass: string;
  imageClass: string;
  images: string[];
};

export function ImageGallery({
  listClass,
  itemClass,
  imageClass,
  images,
}: GalleryProps) {
  return (
    <div role="list" className={listClass}>
      {images.map((src, index) => (
        <div role="listitem" className={itemClass} key={index}>
          <img
            src={src.startsWith("/") ? sitePath(src) : src}
            alt=""
            loading="lazy"
            className={imageClass}
          />
        </div>
      ))}
    </div>
  );
}
