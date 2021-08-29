import BlogDoc from "../../components/BlogDoc"
import SocialsBox from "../../components/SocialsBox"
import Timeline from "../../components/Timeline"

import { motion, AnimatePresence } from "framer-motion"
import "@fontsource/roboto";

// data-fetching methods
export const getServerSideProps = async (ctx) => {
    // you have access to the route param slug in the ctx object
    const slug = ctx.params.test 
 
    // fetch the data required for the page by a database query or from a remote API
 
    // return the fetched data as props

    console.log(slug);

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
  if(props.name == "binary-problem") {
  return (
    <div style={{backgroundColor: "#000"}} className=" flex justify-center" >
      <div className="w-1/6"> 
        <Timeline />
      </div>
      <motion.div className="flex-grow pt-4 pb-4" style={{maxWidth: "66%", minHeight: "90vh", fontFamily: "roboto" }} initial="hidden" animate="visible" variants={{
            hidden: {
                translateY: 200,
                opacity: 0
            },
            visible: {
                translateY: [200, -50, 0],
                opacity: 1,
                transition: {
                    delay: .1,
                    duration: .5
                }
            }

        }}> 
        <BlogDoc />
      </motion.div>
      <div className="w-1/6 flex justify-center pt-20">
        <motion.div className="fixed w-1/6 h-full flex justify-center" initial="hidden" animate="visible" variants={{
            hidden: {
                translateX: 300,
            },
            visible: {
                translateX: [300, -20, 0],
                transition: {
                    delay: .6,
                    duration: .5
                }
            }

        }}> 
          <SocialsBox />
        </motion.div>
      </div>
    </div>
  )

      } else {
        return (
          <div style={{opacity: "1"}}> 
            <div style={{color: "#000", background: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif", height: "100vh", textAlign: "center",display: "flex" , flexDirection:"column",alignItems: "center", justifyContent: "center"}}>
              <div>
                <h1 style={{display: "inline-block", borderRight: "1px solid rgba(0, 0, 0,.3)", margin: "0", marginRight: "20px", padding:"10px 23px 10px 0", fontSize: "24px", fontWeight:"500", verticalAlign: "top"}}>
                404
                </h1>
                <div style={{display:"inline-block", textAlign: "left", lineHeight: "49px", height:"49px", verticalAlign: "middle"}}>
                  <h2 style={{fontSize: "14px", fontWeight: "normal", lineHeight: "inherit", margin: "0", padding:"0"}}>This blog article could not be found</h2>
                </div>
              </div>
            </div>
          </div>
        )
      }
 }
 
 export default SomeDynamicPage;