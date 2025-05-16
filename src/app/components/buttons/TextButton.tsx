import Link from "next/link"


interface TextButtonProps {
  text: string,
  onClick: () => void,
  className?: string
  href?: string
}

export default function TextButton(props: TextButtonProps) {
  return (
    <Link href={props.href ? props.href : "#/"}>
      <button
        className={`bg-transparent duration-300 transition-all ease-in-out hover:bg-[#D5D5D5]/20 active:bg-[#D4D4D4]/30 hover:underline px-4 py-1.5 font-body text-base font-medium rounded-xl text-[#212740] ${props.className}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </Link>

  )
}
