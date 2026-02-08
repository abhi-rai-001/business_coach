import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Note: I am not installing radix-ui/react-slot for now to keep it simple, 
// but using a simple implementation or just standard props.
// Actually, for a "shadcn-like" feel, I should implement it properly.
// But for now, I'll stick to standard button props to avoid extra dependencies if not needed.
// Wait, I can install @radix-ui/react-slot if I want polymorphism, but strict requirements said "no overengineering".
// I'll skip Slot for now and just use standard button.

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 ease-out",
    {
        variants: {
            variant: {
                default: "bg-ink text-off-white hover:bg-ink/90 shadow-sm hover:shadow-md",
                destructive:
                    "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
                outline:
                    "border border-ink/20 bg-transparent hover:bg-ink/5 text-ink",
                secondary:
                    "bg-off-white text-ink border border-ink/10 hover:bg-off-white/80 shadow-sm",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                accent: "bg-muted-gold text-white hover:bg-muted-gold/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-full px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
