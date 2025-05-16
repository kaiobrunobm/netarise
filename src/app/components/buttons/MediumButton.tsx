interface MediumButtonProps {
  text: string,
  onClick: () => void,
  className?: string
}
export default function MediumButton(props: MediumButtonProps) {
  return (
    <button
      className={`bg-[#212740] text-[#F4F5F7] duration-300 transition-all ease-in-out hover:bg-[#282C41] active:bg-[#202335] px-4 py-2.5 font-body text-base font-medium rounded-xl ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )

}