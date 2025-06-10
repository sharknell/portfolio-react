import React from "react"
import { cn } from "../utils/cn"


const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
    <div
      className="h-full w-full flex-1 bg-gradient-to-r from-primary to-blue-600 transition-all duration-1000 ease-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
))
Progress.displayName = "Progress"

export default Progress
