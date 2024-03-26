export default function Products ({productsList}) {
  return (
    <div>
      {
        productsList.map((s)=>
        <h1>{s.title}</h1>)
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from an external API or database
  const { params } = context;
  const data = await fetch("http://localhost:4000/products")
  const jsonData = await data.json()

  // Pass data to the page via props
  return {
    props: {
      productsList: jsonData
    }
  }
}