"use client";
interface IInputProps {
  errorMsg?: string;
  children?: React.ReactNode;
  className?: string;
}

function Input({
  errorMsg,
  className,
  children,
  ...args
}: IInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`relative flex flex-col shrink-0`}>
      <input
        className={`text-[0.75em] font-normal text-secondary bg-transparent outline-none pb-[0.48em] pr-[1.8em] placeholder:text-dark-gray w-[18em] ${className}`}
        {...args}
      />
      {children}
      <hr className="border-none h-[0.08em] bg-normal-gray" />
      {errorMsg ? (
        <p className="text-[0.55em] h-[1.4em] w-full mt-[0.9em] font-normal text-error">
          {errorMsg}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
