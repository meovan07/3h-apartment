type Props = { className?: string }

export default function Stripe({ className = 'bg-[#E8E3DC]' }: Props) {
  return (
    <div className="h-14 overflow-hidden">
      <div className={`h-full w-full origin-top-right -skew-y-[1.4deg] scale-y-[1.6] ${className}`} />
    </div>
  )
}
