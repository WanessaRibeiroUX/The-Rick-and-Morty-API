import { cn } from "../utils/utils";

export function Button({ title, className, ...rest }) {
  return (
    <button
      {...rest}
      className={cn(
        `rounded-md px-5 py-1 text-2xl bg-primary hover:bg-dark01`,
        className
      )}
    >
      {title}
    </button>
  );
}
