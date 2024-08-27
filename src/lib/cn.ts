import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: any): string {
  return twMerge(clsx(...classes));
}

export default cn;
