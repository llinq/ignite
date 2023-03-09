// props: {author: string, content: string}

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}

// Default Exports vs Named Exports
// Default Exports = Podemos definir o nome do componente na importação e não na exportação
// Named Exports = Definimos o nome do componente na exportação