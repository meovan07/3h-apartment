export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Square mark */}
      <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center shrink-0">
        <span
          className="font-serif text-cream font-semibold leading-none"
          style={{ fontSize: '13px', letterSpacing: '-0.02em' }}
        >
          3H
        </span>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-[3px]">
        <span className="font-sans text-ink font-semibold uppercase" style={{ fontSize: '10px', letterSpacing: '3px' }}>
          Apartment
        </span>
        <span className="font-sans text-gold" style={{ fontSize: '7.5px', letterSpacing: '2px' }}>
          ĐÀ NẴNG · VIETNAM
        </span>
      </div>
    </div>
  )
}
