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

const spacingClasses = {
  sm: "pb-4",
  md: "pb-8",
  lg: "pb-12",
};

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
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-start gap-4",
          !isLast && spacingClasses[spacing],
          className,
        )}
        {...props}
      >
        {/* Dot and Line */}
        <div className="relative flex h-[1.5em] w-2 shrink-0 items-center justify-center">
          <div className="size-2 rounded-full bg-primary" />
          {!isLast && (
            <div className="absolute left-1/2 top-[1.5em] h-[calc(100%+1rem)] w-px -translate-x-1/2 bg-border" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="font-semibold leading-[1.5em]">{title}</div>
          {description && (
            <div className="text-sm text-muted-foreground">{description}</div>
          )}
        </div>
      </div>
    );
  },
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
