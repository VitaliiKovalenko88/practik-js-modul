import PropTypes from "prop-types";

export const Section =({children,title})=>{ 
return <section>
  {title&&<h2>{title}</h2>}
  {children}
</section>} ;

                      