import { forwardRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ({ ...props }, ref) {
  return (
    <button
      ref={ref}
      className="
          relative h-full flex items-center gap-2 justify-center overflow-hidden font-semibold
          before:absolute before:content-[''] before:-bottom-1 before:w-full before:h-1 before:bg-red-700 before:rounded-t-xl hover:before:bottom-0 before:transition-all before:duration-100 before:ease-in-out
        "
      {...props}
    >
      {props.children}
    </button>
  );
});

export default Button;
