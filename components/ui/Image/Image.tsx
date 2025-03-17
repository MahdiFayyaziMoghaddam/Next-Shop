import I from "next/image";

interface IImageProps {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

function Image({ alt = "", src, className, children }: IImageProps) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[0.18em] hover:*:bottom-0! select-none hover:*:opacity-100 w-[10em] shrink-0 ${className}`}
    >
      <img src={src} alt={alt} className="w-full! bg-contain" />

      {children}
    </div>
  );
}

export default Image;
