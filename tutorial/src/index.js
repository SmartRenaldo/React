import ReactDom from 'react-dom'

function Greeting()
{
  return <article>This is Renaldo and this is my first component!</article>;
}

ReactDom.render(<Greeting/>, document.getElementById('root'))
