import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const spacingVariants = cva("w-full", {
  variants: {
    spacingTop: {
      lg: "pt-[60px] sm:pt-[100px] md:pt-[120px]",
      md: "pt-[30px] sm:pt-[60px]",
      none: "pt-0",
    },
    spacingBottom: {
      lg: "pb-[60px] sm:pb-[100px] md:pb-[120px]",
      md: "pb-[30px] sm:pb-[60px]",
      none: "pb-0",
    },
  },
  defaultVariants: {
    spacingTop: "md",
    spacingBottom: "md",
  },
});

const Section = ({ children, className, id, spacingTop, spacingBottom }) => {
  return (
    <section
      id={id}
      className={cn(
        spacingVariants({
          spacingTop,
          spacingBottom,
          className,
        })
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
