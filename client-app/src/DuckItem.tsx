import { Duck, ducks } from "./demo"

interface Pumi{
    duck:Duck
}


export default function DuckItem({duck}:Pumi) {
  return (
    <ul key={duck.name}>
        <li>
            <span>Nume   {duck.name}    +   {ducks.indexOf(duck)}</span>
            <button onClick={()=>duck.makeSound(duck.name+' quack')}>Make sound</button>
        </li>
    </ul>
  )
}
