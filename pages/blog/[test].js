import BlogDoc from "../../components/BlogDoc"
import BlogDocTwo from "../../components/BlogDocTwo"
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

  var textArrAI=  ["From the moment I learned about Artificial Intelligence, I was fascinated. As a tool, it seemed not only extremely powerful, but wonderfully versatile. However, for the longest time, AI felt extremely inaccessible—a mystical abstract that was impossibly complicated and beyond my scope of understanding.", 
    "However, I recently realized that I was looking at AI the wrong way. In reality, Artificial Intelligence is, as I previously alluded to, a tool. A carpenter does not need to build his power tools to use them; he just needs to have a good understanding of how they work. Similarly, my extensive programming experience meant that I had the ability to use AI. I was just intimidated by its apparent hugeness.",
    
    "AI Camp",
    
    "This realization first started when I was bombarded by emails from my teachers for a project-based Artificial Intelligence camp taught by Stanford graduates. None of my teachers knew much about the camp, but they all wanted to share the opportunity with me since they knew that I was interested in programming. When I looked into the camp, I was dazzled to see full-fledged AI projects of various calibers completed by students as old as I was. I immediately filled out an application and was thrilled to obtain a partial scholarship.",
    
    "The first week of the summer camp covered the basics of programming and machine learning, and I was able to coast through most of it. During week two, however, my small cohort was thrown into the deep end as we were asked to design and create a machine learning project without ever having built anything remotely similar. While the breakneck speed at which we traveled through the project was fantastic for supplementing my own learning, I noticed that many other students were falling behind and often lost. Despite my desire to help others, there was no option but to keep pushing if we wanted to complete our project within the week.",
    
    "Our Project",
    
    "My group settled on the idea of creating an AI algorithm that had something to do with food, and we soon arrived on the idea of creating an AI that could identify the ingredients in a particular dish. Datasets consisting of dishes from around the world proved to be too expansive and poorly labeled, so we decided to focus on creating an AI to specifically identify ingredients in East Asian dishes.",
    "As the highest cohort, my group was drawn to the difficult challenge of looking at a dish and identifying (often homogenous) ingredients. Having the most front-end experience, my first task consisted of creating a website to showcase our model, a project that I completed within a couple of days and progressively reworked until the final day of the camp itself. I soon switched to training models, however, and I started to truly familiarize myself with the Convolutional Neural Network that we were creating.",
    
    "To provide a bit of context, machine learning is essentially the development of computer algorithms that can improve automatically at a certain task through repeated experience at that task. This experience typically consists of the algorithm using data to make predictions, checking its predictions, and adjusting itself based on whether or not it was correct. This repeated adjustment is the learning aspect of machine learning and is referred to as training the model. As the model trains and adjusts itself, it becomes better at the given task. A Convolutional Neural Network (CNN) iterates over an image in multiple stages to convert it into an array that represents the ingredients that the model thinks are in the image of a dish. As mentioned, the model compares its prediction with the actual ingredients in the dish and adjusts itself to be more accurate. The convolutional neural network that my cohort created took about 45 minutes to run, so we had to train the model overnight.",
    
    "Presentation Day!",
    
    "The final day of camp consisted of each cohort presenting their machine learning project and the results they were able to achieve. Our model’s final iteration had an accuracy of 91%, performing much better than we thought it would given the complexity of the project, the fast-paced timeline, and our relative inexperience. My cohort was fascinated to see other groups' projects, especially those with potential real-world applications such as a machine learning model trained to identify ASL signs. As my group began discussing potential implementations of the various machine learning models, we began to consider the possibilities of expanding the scope of our project.",
    
    "The most exciting conclusion we reached was that the premise of our AI - ingredient detection - could be expanded far beyond the project we completed in two weeks. AIs could be trained to discern the ingredients from other cuisines, and the same technology could be used to detect food allergens or recreate dishes from social media posts. One of our cohort members had recently visited Eastern Asia, and he discussed the immense demand tourists might have for a tool that tells them exactly what they’re eating. The project itself could also be broadened in scope—multiple AIs could be trained to identify ingredients from dishes in various cuisines and another AI could be trained to figure out what cuisine a dish is from. This would allow for a photo of a dish to be sorted into a type of cuisine and subsequently have its ingredients identified by an AI created specifically to identify ingredients in dishes from that cuisine.",
    
    "The Last Day of Camp",
    
    "Looking back on the project as a whole, I was really surprised by how much I had grown. Creating this model was an important building block that has allowed me to begin tackling real-world issues by applying Artificial Intelligence. Thanks to this program, AI was no longer an inaccessible subject—I had tamed it into a tool in my toolbox.", 
    
    "Check out our final project video and some additional photos <a href=https://www.youtube.com/watch?v=K67E81Ui8CE> here! </a>",
    
    "Check out my current AI research here that I was able to build up thanks to this experience.",
    
    "Research!",
    
    "AI Camp gave me the skills I needed to do research involving Artificial Intellgence in my junior year. Under the mentorship of Professor Ardeshir Ebtehaj at the University of Minnesota, I worked as an independent researcher determining whether an Artificial Intellgence program could be used to identify ocean plastic in multispectral satellite imagery.",
    
    "It sounds complicated, I know! But what I was essentially doing can be explained quite simply. I was training an AI to look at satellite imagery of the ocean (think about Google Earth) and identify which pixels contained plastic. In my research journey, I talked to researchers from all across the world—everywhere from Ireland and Greece to India and right here at home in the United States. I spoke with professors, NASA employees, and engineers.",
    
    "My model had great success, with over 95% accuracy and precision. I have submitted my paper for publication in the Journal of Student Reserach, and you can read it <a> here! </a>"]
    
 
    var boldArrAI = [false, false, true, false, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, false]


    var textArrPat = ["Every neighborhood has that one house. Whether it is haunted, overgrown, or infamous for having a dog that incessantly barks at unsuspecting pedestrians, the local homeowners’ association undoubtedly considers it a constant irritant. In my neighborhood, these criteria are met by a boisterous building just a little ways down the street. Located on an otherwise quaint cul-de-sac, the abode itself is unremarkable save for two “Pillars of Patriotism” planted firmly in the front yard. Towering above other notable features, a gargantuan Trump flag perches atop one of the Pillars while a (comparatively smaller) American flag flutters on the other.",
      "While I never considered the adornment anything more than a novelty, I always wondered what could compel someone to so boldly proclaim a love of America… and Trump? Clearly, my neighbor was under the impression that Trump—despite being a draft-dodging narrow-minded elitist businessman who incited an insurrection against the United States government—embodied American values. The size of Trump’s pillared presence suggested that Trump didn’t just embody America—he was more American than America itself.",
      "Unfortunately, this misguided sense of patriotism is nothing new. ",
      "In 1857, the United States decided in the case of Dred Scott that there was no such thing as a “free state” since it would violate slave owners' Fifth Amendment right to property (Kearse). This was considered patriotism.",
      "In 1942, the United States government imprisoned 120,000 Japanese Americans in internment camps for fear that they would act as spies (Editors of Encyclopedia Britannica). This was considered patriotism.",
      "In 2021, the President of the United States actively encouraged an insurrection that attempted to overturn the results of his failed re-election, threatening an already precarious democracy. This was considered patriotism.",
      "But none of these were acts of patriotism. Where was liberty? Where was equality? Where was democracy? ",
      "Nowhere to be found. ",
      "The government has forever failed to uphold the foundation of American democracy and continues to do so. And yet, a “patriot” from any one of those generations would have proudly stood by these actions. Unconditional support for the government has gradually been made interchangeable with sanctioning American values. Constitutional mangling and intimidation tactics perpetually paint progressive movements as anti-patriotic to suggest that the status quo is the most American America there is—a blatant lie. The flag-waving, face-coloring, firework-bursting, and war-making “red-blooded Americans” do not stand for America’s tenets. They never have. They never will. ",
      "Real patriots challenge their country to live up to its promises. Whether through letters, pamphlets, petitions, protests, boycotts, campaigns, rallies, or strikes, they work tirelessly to ensure that the American pillars of equality, representation, life, liberty, democracy, and freedom are upheld. They can be found in Stonewall, Selma, or Seneca Falls. They exist in every decade, from the revolutionaries of the 18th century to the feminists of the 21st. As these patriots carry out the real work of the Constitution, “patriots” of the same generation become the out-of-touch conservatives of the next. The crazy uncles and old-fashioned grandparents whose insensitive commentary at the Thanksgiving table is often met with forced, uncomfortable laughter.",
        "Standing for the principles of the United States has often meant standing against its self-identified “patriots”. As this is seldom acknowledged, the conventional narrative of patriotism continues to advocate for ignorance by abhorrently twisting American values. In a country built on tolerance, free expression, and equality, this reality is bitterly ironic. It is an affront to those who have dedicated and lost their lives fighting for a better America.",
      "My neighbor proudly displays an American flag and a Trump flag. Is this patriotism?",
      "No. Patriotism is more than waving a flag. True patriots are defined by the actual work they do to hold their country accountable."
      ]

      var boldArrPat = [false, false, false, false, false, false, false, false, false, false, false, false, false]

      var textArrFour = ["Throughout its relatively brief tenure, “America” has existed more as an abstraction than a physical construct. The Fourth of July is tethered to this conceptual idea, representing a celebration of the tenets on which the United States is built. Yet, these principles are not upheld for all, raising an important question: What does the Fourth of July mean for those in bondage? Situated amidst rising abolitionist sentiment in the 1850s, Frederick Douglas’ “The Meaning of July Fourth for the Negro” powerfully postulates an answer—it is the cruelest of ironies. Infusing a heavy drizzle of emotional appeals through patriotic and religious allusions with splodges of rambling syntax and streams of rhetorical questions and hypophora, Douglas effectively argues that slavery must be abolished as it is an insult to God, country, and humanity.",
        "Douglas adeptly uses patriotic and religious allusions to craft an emotional argument emphasizing that slavery exists in sharp contrast with basic human morality and the principles of the Constitution. He begins his speech by applauding the founding fathers, expressing that “[t]he signers of the Declaration of Independence were brave [and] great men… [for] the principles they contended for” but immediately reprimands that “[t]he rich inheritance of justice, liberty, prosperity and independence, bequeathed by your fathers, is… not [shared] by me… [but] has brought [me] stripes and death” (Douglas). By commending the framers of the Constitution but observing that the ideas they represent are not shared by all, Douglas powerfully postulates that slavery must be abolished to uphold the original tenets of the United States. He then incorporates religious imagery by cautioning that “it is dangerous to copy the example of a nation whose crimes, towering up to heaven, were thrown down by the breath of the Almighty” (Douglas). Surrounded by the God-fearing men of 1850s America, the presentation of slavery as ungodlike is particularly effective to promoting the passage of its eradication. This loathsome practice is brought under full blitz when Douglas scorchingly declares that “standing with God and the crushed and bleeding slave on this occasion, [he] will… in the name of the Constitution and the Bible which are disregarded and trampled upon… denounce… everything that serves to perpetuate slavery[,] the great sin and shame of America!” Utilizing both patriotic and religious allusions in tandem—the Constitution and the Bible, respectively—the institution of slavery is depicted as abominable betrayal of both creator and creed. While Douglas presents himself on the side of God, he portrays slavery as the “sin and shame” of the United States. Ultimately, this emotional heave serves to promote abolishment as the only correct course of action to maintain the integrity of the nation.",
        "Douglas juxtaposes this sharp inequity in treatment and quality of life between the freeman and the slave with the numerous similarities they share by infusing rambling syntax, ultimately advocating for the abolishment of slavery. This is evident through Douglas’ presentation of black folk as people who “are ploughing, planting, and reaping, using all kinds of mechanical tools… reading, writing and ciphering, acting as clerks, merchants and secretaries, having among [them] lawyers, doctors, ministers, poets, authors, editors, orators and teachers.” The drawn-out syntax bombards the listener with a torrent of “enterprises common to other men” (Douglas) that the black man participates in, effectively conveying that all men are equal in capability and should therefore be equal under the law. Unfortunately, this expectation is far from the truth, as Douglas attests that “it is wrong to make men brutes, to rob them of their liberty, to work them without wages, to keep them ignorant of their relations to their fellow men, to beat them with sticks, to flay their flesh with the lash, to load their limbs with irons, to hunt them with dogs, to sell them at auction, to sunder their families, to knock out their teeth, to burn their flesh, to starve them into obedience and submission to their masters.” Once again, the Brobdingnagian breadth of Douglas’ syntax overwhelms listeners, attesting to the titanic exploitation of those in bondage. This scorching onslaught forces his audience to face the reality of what slavery is—the abhorrent and systematic exploitation of human beings. Douglas effectively dispels the despicable sense of racial superiority that underpins such immoral abuses through his aforementioned “affirm[ation of] the equal manhood of the Negro race” (Douglas). This equal aptitude of black folk is juxtaposed with a sharp disparity in their treatment to affirm that slavery must be done away with as it is senseless.",
        "A combination of hypophora and rhetorical questions (that are asked and answered in groups) further displays the cornucopia of fallacies that exist within bondage as an institution. Douglas unveils these absurdities through a deluge of rhetorical questions, inquiring whether he “[m]ust… argue the wrongfulness of slavery? Is [it] a question for Republicans? Is it to be settled by the rules of logic and argumentation… involving a doubtful application of the principle of justice, hard to be understood?” By presenting the idea that bondage is a political issue—the morality of which is to be debated by thousands of politicians and bureaucrats and lobbyists and legislators in frustratingly ineffective political theaters—as a rhetorical question, Douglas powerfully insinuates the irrationality of slavery. This sentiment is cemented by his sharp rebuke that “[t]o [answer these questions] would be to make [himself] ridiculous” (Douglas). A question Douglas does answer, however, is the central question posited in his speech: “What, to the American slave, is your 4th of July?” He resoundingly roars in response that it is “a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim” (Douglas). The Fourth of July is, as Douglas states, the cruelest of ironies—an annual slap in the face of every slave. The use of hypophora installs great emphasis on Douglas’ use of the Fourth of July as a metaphorical stand-in for institutional injustice. The existence of the occasion is itself the ultimate manifestation of the contradiction-ridden basis of slavery, stressing an urgent need to abolish the abhorrent practice altogether.",
        "Paradoxically, Douglas ends his speech with notions of hope. Rather than reaffirming the repugnance of the state of America at the time, Douglas challenges his listeners to envision what the Fourth of July could, one day, stand for. A challenge that has been iterated and re-iterated by the greatest speakers in American history—King, Garrison, Anthony—in different forms and for different purposes. A challenge that is as relevant today as it was a century ago. A challenge to become a society that better represents the tenets on which this country is founded. This challenge is what distinguishes this speech as a truly American Philippic."
      ]

      var boldArrFour = [false, false, false, false, false, false, false, false, false, false, false, false, false]

      var textArrOdyssey  = ["From the cradle of civilization to modern-day, an everlasting constant that has held over generations has been a strong relationship between objective cultural “right” and fate. The Greeks are perhaps unrivaled in their ability to procure masterful poems that present this tenet, of which Homer’s The Odyssey is no exception. Illustrated magnificently by contrasts in the actions and resulting fates of foil characters, Homer’s The Odyssey showcases how the degree to which one possesses or expresses societal values determines one’s fate, regardless of outside factors.",
        "This determination additionally controls one’s role in the narrative of society, as shown by the stark contrast between the fate of Odysseus and that of his men. Odysseus’ men do as the prophet Teiresias warns against and “raid the beeves [of Apollo]” (Homer 188), which Teiresias accurately predicts as precipitating “destruction for ship and crew” (Homer 188). These selfish actions defy societal values about respecting the gods, making the men antagonists and ultimately culminating in their demise. Contradictively, Odysseus, the foil, makes his crewmates swear to “[Let] any herd of cattle [found]... go unharmed” (Homer 219), and faces no similar fate. Odysseus’ actions nobly uphold the values of society and reaffirm his protagonism. Their juxtaposing fates illustrate how disparate outcomes result from the extent to which one complies with an established moral code.",
        "Consequently, these outcomes are infinitesimally affected by one’s position in the social hierarchy, as brutally shown by the foil between Eumaios and Melanthios. Both reside on the same near-bottom tier of society but act vastly different. Upon meeting a beggar, Eumaios gallantly proclaims that “‘rudeness to a stranger is not decency’” (Homer 249) while Melanthios “taunt[s]... [the beggar] so grossly that [his] heart gr[ows] hot” (Homer 316). Where Eumaios’ virtuous belief shows his unflinching exemplification of xenia, Melanthios’ actions arise from a sick feeling of power that represents the converse. The upshot is opposing fates, with Melanthios’ “genitals [being pulled] to feed the dogs” (Homer 424) and Eumaios doing the pulling. This irony underlines how social status has no impact on outcome, while actions do. Ultimately, the delicate relationship between one’s conformity to social dogma and their fate acts irrespective of superficial factors.",
        "Critics may argue that this principle works irrespective even of non-superficial factors such as exemplifying social values, illustrated by the suitors’ arbitrary fate. An example is Amphinomous, who maintains civility among the suitors and is even told by Odysseus to “take [himself]... homeward” (Homer 340), yet is “[bound] by Athena” (Homer 340) to die. This demonstrates that even those who adhere to societal values face dismal consequences, invalidating any correlation between values and fate. In actuality, this situation strongly reinforces the aforementioned connection. In his speech, Odysseus additionally mentions that the suitors have collectively been “living [in] a household eaten up, [with]a wife dishonored” (Homer 340). Through compliance, Amphinomous is guilty by association in these heinous acts and is thus violating societal values, which necessitates a dire fate. These consequences showcase how somewhat satisfying the morals of society is not enough to be righteous in the eyes of destiny and will lead to repercussions.",
        "Chiefly, these repercussions from non-adherence to the established moral philosophy make no distinction even between the gods and mortals, as exemplified by the foil of Penelope and Kalypso, both of whom contend over Odysseus. Where Kalypso employs egocentric tactics of “compell[ing] him [every night]” (Homer 85), Penelope grimly waits in, as she articulates, “‘[unspeakable] misery’” (Homer 372) over “‘years of pain’” (Homer 357). Penelope exemplifies idealistically the Greek virtue of loyalty while her foil, Kalypso, represents gross deception through her deeds. Accordingly, Hermes forces Kalypso to part with Odysseus, which makes her call him “vile… in jealousy supernatural” (Homer 84), while Penelope reunites with Odysseus “with eyes brimming tears” (Homer 435). The goddess facing consequences while the mortal does not has severe implications. This polarity emphasizes how the cold rulings of justice, dependent on one’s assimilation to moral expectations, fall equally on all beings, favoring none.",
        "Whether under the name of karma, through the hands of God, or by the far-reaching power of the law, all societies postulate that good leads to good. Accordingly, epic poems naturally follow since the entire notion of the “epic hero” is built around the cornerstone that their embodiment of societal values makes them virtuous. This philosophy has existed in every civilization since the dawn of culture and remains a staple because it is imperative to amicable societies that actions, weighed against an arbitrary moral standard, must exist in lockstep with consequences to encourage harmony."
              ]

      var boldArrOdyssey  = [false, false, false, false, false, false]

  // props will contain the data that was returned from the data-fetching method-
  // getServerSideProps 
  if(props.name == "binary-problem") {
  return (
    <div className=" flex justify-center" >
      <div className="w-1/6 hidden md:block" > 
        <Timeline />
      </div>
      <motion.div className="flex-grow pt-4 pb-4 w-2/3 px-4" style={{minHeight: "90vh", fontFamily: "roboto" }} initial="hidden" animate="visible" variants={{
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
      <div className="w-1/6 justify-center pt-20 hidden sm:flex">
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
          <SocialsBox date={"July 4th, 2021"} />
        </motion.div>
      </div>
    </div>
  )

      } else if (props.name == "ai-camp") {
        return (
          <div className=" flex justify-center" >
            <div className="w-1/6 hidden md:block" > 
              <Timeline title="Artificial Intelligence" units={["AI Camp", "Our Project", "Presentation Day!", "Conclusions", "Research"]} />
            </div>
            <motion.div className="flex-grow pt-4 pb-4 w-2/3 px-4" style={{minHeight: "90vh", fontFamily: "roboto" }} initial="hidden" animate="visible" variants={{
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
              <BlogDocTwo title="Artificial Intelligence" textArr={textArrAI} boldArr={boldArrAI} imageLink="https://assets.spe.org/dims4/default/eb14dec/2147483647/strip/true/crop/1024x757+0+0/resize/800x591!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.amazonaws.com%2Ff4%2Fad%2F61fb2ee84edb8b836770aa794b5c%2Ftwa-2021-12-ai-basics.jpg"/>
            </motion.div>
            <div className="w-1/6 justify-center pt-20 hidden sm:flex">
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
                <SocialsBox date={"June 18th, 2022"}/>
              </motion.div>
            </div>
          </div>
        )
      
      
    } else if(props.name == "patriotism") {
      return (
        <div className=" flex justify-center" >
          <div className="w-1/6 hidden md:block" > 
            {/* <Timeline title="False Idols and Fake Patriots" units={[]} /> */}
          </div>
          <motion.div className="flex-grow pt-4 pb-4 w-2/3 px-4" style={{minHeight: "90vh", fontFamily: "roboto" }} initial="hidden" animate="visible" variants={{
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
            <BlogDocTwo title="False Idols and Fake Patriots" textArr={textArrPat} boldArr={boldArrPat} imageLink="https://www.maxpixel.net/static/photo/1x/Eagle-Patriotic-Usa-America-Freedom-Symbol-Flag-5461544.jpg"/>
          </motion.div>
          <div className="w-1/6 justify-center pt-20 hidden sm:flex">
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
              <SocialsBox date={"December 23rd, 2021"}/>
            </motion.div>
          </div>
        </div>
      )
    
    
    
          } else if(props.name == "fourjuly") {
            return (
              <div className=" flex justify-center" >
                <div className="w-1/6 hidden md:block" > 
                  {/* <Timeline title="False Idols and Fake Patriots" units={[]} /> */}
                </div>
                <motion.div className="flex-grow pt-4 pb-4 w-2/3 px-4" style={{minHeight: "90vh", fontFamily: "roboto" }} initial="hidden" animate="visible" variants={{
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
                  <BlogDocTwo title="An American Philippic" textArr={textArrFour} boldArr={boldArrFour} imageLink="https://nmaahc.si.edu/sites/default/files/images/blog/frederick_douglass_portrait.jpg"/>
                </motion.div>
                <div className="w-1/6 justify-center pt-20 hidden sm:flex">
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
                    <SocialsBox date={"November 05, 2021"}/>
                  </motion.div>
                </div>
              </div>
            )
          
          
          
                } else if(props.name == "odyssey") {
                  return (
                    <div className=" flex justify-center" >
                      <div className="w-1/6 hidden md:block" > 
                        {/* <Timeline title="False Idols and Fake Patriots" units={[]} /> */}
                      </div>
                      <motion.div className="flex-grow pt-4 pb-4 w-2/3 px-4" style={{minHeight: "90vh", fontFamily: "roboto" }} initial="hidden" animate="visible" variants={{
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
                        <BlogDocTwo title="The Delicate Dance of Foil, Fate, and Fortune" textArr={textArrOdyssey} boldArr={boldArrOdyssey } imageLink="http://www.sacred-texts.com/cla/homer/ody/img/homer.jpg"/>
                      </motion.div>
                      <div className="w-1/6 justify-center pt-20 hidden sm:flex">
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
                          <SocialsBox date={"October 28, 2020"}/>
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