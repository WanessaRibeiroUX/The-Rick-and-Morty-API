import { cn } from "../utils/utils";

export function Status({ status }) {
  return (
    <div
      className={cn(
        status == "Alive" ? "bg-light01" : "bg-red-500",
        "rounded-full w-3 h-3"
      )}
    ></div>
  );
}
