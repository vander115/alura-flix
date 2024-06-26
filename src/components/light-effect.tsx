export function LightEffect() {
  return (
    <section className="absolute z-[-1] size-full overflow-hidden">
      <div className="absolute -bottom-[32rem] left-0 z-[-1] size-[40rem] rounded-full bg-cyan-400 blur-[200px]" />
      <div className="absolute -bottom-[32rem] left-1/2 z-[-1] size-[40rem] -translate-x-1/2 rounded-full bg-green-400 blur-[200px]" />
      <div className="absolute -bottom-[32rem] right-0 z-[-1] size-[40rem] rounded-full bg-amber-400 blur-[200px]" />
    </section>
  )
}
