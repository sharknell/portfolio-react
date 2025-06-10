import React from "react"
import { cn } from "../utils/cn"


const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props}>
    {children}
  </div>
))
Card.displayName = "Card"

export default Card
