import './Header.css'

const Header = ({text}) => {
  text = [...text]
return(
<header>
        <h1>{
          text.map((letter,i) =>{
            return <span 
            key={`${letter+ i}`}
            className="letter">{letter}</span>
          })
        }</h1>
      </header>
)
}
export default Header;