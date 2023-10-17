function Work({title, description, name, link}) {
    return <>
     <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Name: {name}</p>
         <a href={link}>{name}</a>
     </div>
    </>
}

export default Work;