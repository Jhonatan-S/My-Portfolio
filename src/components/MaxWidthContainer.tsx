import { classNames } from "@/utils/classNames"

interface MaxWidthContainerProps {
  className?: string
  children: React.ReactNode
}

export const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <div className={classNames(className, "w-full max-w-[85rem] px-px mx-auto")}>
      {children}
    </div>
  )
}
