import heroImg from "../../assets/Hero.jpg"
import "./Hero.css"
export const Hero = () => {
  return (
    <div className='hero container' style={{
      backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroImg})`
    }}
    >
        <div className="hero-text">
            <h1>We Focus on practical and industrial worthy Knowledge</h1>
            <p>our curriculum is designed in such a way that everyone just fells in love with thier field of interest</p>
            <button className="btn"> Explore more  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgB3ZnRcYJAEIYXyEMe04FnBaEEsIH4mLfEDizBdBAriFYQU4BKKogdSAk0wJD/n2CGuRHkeNrjm2G8W8WZb/a4W9dAFJIkyUMURZ8c4tqVZbnIsqxw+Y5QdPIkf1JkDskjZcUBlWIQsSXiOoO9USmGpbfFy8kKJ7PZ7EN6EohS6ufsiGHcjFdVtTkcDotb96sVI5AztZxpxvvIRaKYPM+LyWTyFYbhHNP/5y4Igng6ncr5fP5uu1e1GOmQS7rk1IuRIXJeiBFXOW/EiIucV2KEcsaYDDLPmN5f4rac6u2+izRNH5G5TBqZIzjcX1FXbgOcFS84K97tD/gM5SAdrmREUoSJCrE2RyVVU7AIXuLKZURgKa5Gt3mA5X6/X9+Jh7RJoTheoThec6z1F3QrrPixL+zkutTbZe7VUqQUMnWEmGnGbSnijZiLFPFCzFWKqBcbIkXUtwauSYENtvTO1oDqZg6kfoZIEZXnWKNDZay3ekkRzZ3g2Iqd+koRXzrBJ9R/qTiguRO8q6cZpVz/lPgF4obEWs0mGtMAAAAASUVORK5CYII=" alt="" /></button>
        </div>
    </div>
  )
}
