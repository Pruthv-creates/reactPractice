import heroImg from "../../assets/Hero.jpg"
import "./Hero.css"
export const Hero = () => {
  return (
    <div className='hero' style={{
      backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroImg})`
    }}
    >

    </div>
  )
}
