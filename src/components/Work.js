function Work({title, description, name, link}) {
    return <>
     <div>
        <h2>Work Experience</h2>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Name: {name}</p>
        <p>Web-site:</p> <a href="!#">{link}</a>
     </div>
    </>
}

export default Work;