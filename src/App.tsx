import { useEffect } from "react"
import { useCounterStore } from "./store/counterStore"
import shallow from "zustand/shallow"

function App() {

  /*const count = useCounterStore((state) => state.count)
  const title = useCounterStore((state) => state.title)*/

   /*const values = useCounterStore((state) => ({
      count: state.count,
      title: state.title
   }))

   console.log(values);*/

   const { title, count, posts } = useCounterStore((state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts
   }), shallow)

   //const increment = useCounterStore(state => state.increment)

   const { increment, getPosts, cleanStore, multiply } = useCounterStore()

   useEffect(() => {
    getPosts()
   }, [])
   

  return (
    <div>
      <h1>{title}: {count}</h1>

      <button 
         onClick={() => {
            increment(10)
         }}
      >
         Increment by 10
      </button>
      <button onClick={() => multiply(2)}>multiply by 2</button>

      <button onClick={() => cleanStore()}>clean store</button>
      <hr/>

      {JSON.stringify(posts)}
    </div>
  )
}

export default App
