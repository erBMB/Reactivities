import { List } from "semantic-ui-react"
import { Duck, ducks } from "./demo"

interface Pumi{
    duck:Duck
}


export default function DuckItem({duck}:Pumi) {
  return (
    <List key={duck.name}>
        <List.Item key={duck.name}>
            <span>Nume   {duck.name}    +   {ducks.indexOf(duck)}</span>
            <button onClick={()=>duck.makeSound(duck.name+' quack')}>Make sound</button>
        </List.Item>
    </List>
  )
}
