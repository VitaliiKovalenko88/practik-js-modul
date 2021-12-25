import PropTypes from "prop-types";


export const FeaturesListItem =({title, text})=>{
return <>
<h3>{title}</h3>
<p>{text}</p>
</>
}

FeaturesListItem.prototypes ={
  title:PropTypes.string.isRequired,
  text:PropTypes.string.isRequired
}