import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "sm" | "md" | "lg";
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  isLast?: boolean;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, spacing = "sm", children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {React.Children.map(childrenArray, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isLast: index === childrenArray.length - 1,
              spacing,
            } as any);
          }
          return child;
        })}
      </div>
    );
  },
);
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  TimelineItemProps & { spacing?: "sm" | "md" | "lg" }
>(
  (
    { className, title, description, isLast, spacing = "sm", ...props },
    ref,
  ) => {
    console.log("TimelineItem spacing:", spacing, "isLast:", isLast);

    let spacingClass = "";
    if (!isLast) {
      if (spacing === "sm") {
        spacingClass = "";
      } else if (spacing === "md") {
        spacingClass = "pb-4";
      } else if (spacing === "lg") {
        spacingClass = "pb-8";
      }
    }

    return (
      <div
        ref={ref}
        className={cn("relative flex gap-4", className)}
        {...props}
      >
        {/* Dot and Line Container */}
        <div className="relative flex w-2 shrink-0 flex-col items-center pt-2">
          <div className="size-2 rounded-full bg-primary" />
          {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
        </div>

        {/* Content */}
        <div className={cn("flex-1 pt-2", spacingClass)}>
          <div className="font-semibold leading-none">{title}</div>
          {description && (
            <div className="mt-1 text-sm text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      </div>
    );
  },
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
