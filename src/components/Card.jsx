const Card = props => {
    const {title,imgSrc,text} = props;
  return (
    <article>
        <img src={imgSrc} alt="a cool logo" />
        <h3>{title || 'a default title'}</h3>
        <p>{text || 'some default text'}</p>
    </article>
  )
}

export default Card