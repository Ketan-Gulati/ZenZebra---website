import CountUp from "./countUp";


export default function BrandCounter() {
  return (
    <p className="text-center text-white/70 text-2xl mt-20">
      Trusted by <CountUp to={150} duration={1.2} suffix="+" /> brands
    </p>
  )
}
