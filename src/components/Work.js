function Work({title, description, name, link}) {
    return <>
     <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Name: {name}</p>
        <p>Web-site:</p> <a href="!#">{link}</a>
     </div>
    </>
}

export default Work;