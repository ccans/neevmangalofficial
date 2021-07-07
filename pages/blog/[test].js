// data-fetching methods
export const getServerSideProps = async (ctx) => {
    // you have access to the route param slug in the ctx object
    const slug = ctx.params.test 
 
    // fetch the data required for the page by a database query or from a remote API
 
    // return the fetched data as props
    return {
        props: {
          name: slug
        }
    }
 
 }
 
 // the page component
 const SomeDynamicPage = (props) => {
 
  // props will contain the data that was returned from the data-fetching method-
  // getServerSideProps 
 
  return (
    <div>
      <h1 className="pt-16"> {props.name} </h1>
    </div>
  )
 }
 
 export default SomeDynamicPage;