import { useState } from "react";

function Form({onAddItem}) {

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ name, setName ] = useState('');
  const [ link, setLink ] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = { title, description, name, link };
    onAddItem(newItem);
    setTitle('');
    setDescription('');
    setName('');
    setLink('');
  }

    return <>
        <form onSubmit={handleSubmit}>
        <h3>Add new work experience</h3>
          <input
                type="text"
                placeholder="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
          />
          <textarea placeholder="Describe your responsibilities..."
                    value={description}
                    onChange={event => setDescription(event.target.value)}>
          </textarea>
          <input
                type="text"
                placeholder="name"
                value={name}
                onChange={event => setName(event.target.value)}
          />
          <input/>
          <input
                type="text"
                placeholder="link"
                value={link}
                onChange={event => setLink(event.target.value)}
          />
          <input/>
          <button type="submit">Add new experience</button>
        </form>
    </>
}

export default Form;