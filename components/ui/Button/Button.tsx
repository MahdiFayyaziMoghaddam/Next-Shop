"use client";
interface IButtonProps {
  children?: React.ReactNode;
  variant: "primary" | "secondary" | "none";
  className?: string;
}

function Button({
  children,
  variant,
  className,
  ...args
}: IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-secondary border-[0.1em] border-secondary hover:bg-secondary/15 active:opacity-40 py-[0.3em] px-[1.2em]";
      case "secondary":
        return "bg-secondary text-primary hover:bg-secondary/80 active:opacity-40 py-[0.3em] px-[1.2em]";
      case "none":
        return "";
    }
  };

  return (
    <button
      className={`${getVariantClass()} rounded-[0.3em] font-medium cursor-pointer shrink-0 duration-200! ${className}`}
      onClick={(e) => {
        if (args.onClick) {
          args.onClick(e);
        }
        e.currentTarget.blur();
      }}
      {...args}
    >
      {children}
    </button>
  );
}

export default Button;
