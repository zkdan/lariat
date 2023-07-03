import './Header.css'

const Header = ({text}) => {
  text = [...text]
return(
<header>
        <h1>{
          text.map(letter =>{
            return <span className="letter">{letter}</span>
          })
        }</h1>
      </header>
)
}
export default Header;