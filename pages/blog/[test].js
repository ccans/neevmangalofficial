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
          <div> </div>

        )
      }
 }
 
 export default SomeDynamicPage;