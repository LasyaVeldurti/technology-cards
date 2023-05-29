// Write your code here.
import './index.css'

const CardItem = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item
  return (
    <li className={className}>
      <div className="card-container">
        <h1 className="list-heading">{title}</h1>
        <p className="list-description">{description}</p>
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
