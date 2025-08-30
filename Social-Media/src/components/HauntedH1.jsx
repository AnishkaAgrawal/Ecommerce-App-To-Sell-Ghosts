export default function HauntedH1({text= "Haunted Bazaar 💀"}){
  return (
    <>
    <h1 className="
      scary-text text-6xl font-extrabold text-red-600 drop-shadow-[0_0_10px_#ff0000]
      animate-pulse
    ">
      {text}
    </h1>
    </>
  )
}