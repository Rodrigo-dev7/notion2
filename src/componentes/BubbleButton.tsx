import { ComponentProps, ReactNode} from 'react'  

export interface  BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button className="p-2 text-zinc-200 text-sm itens-center gap-1.5
     font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600 flex items-center 
      data-[active=true]:text-sky-400
     "
      {...props}
     />

  )
}
