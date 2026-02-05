import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      Welcome to the shell app
      <br/>
      <Link to="/products">Go to Product Catalog</Link>
    </div>
  )
}

export default Home
