export default function HauntedH4({text= "Haunted Bazaar 💀"}){
  return (
    <>
    <h4 className="
      scary-text text-6xl font-extrabold text-white drop-shadow-[0_0_10px_#dc2626]
      animate-pulse
    ">
      {text}
    </h4>
    </>
  )
}