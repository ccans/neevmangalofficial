import "@fontsource/roboto";
import "@fontsource/inconsolata/300.css";
import "@fontsource/raleway";



function BlogDocTwo() {
    return (
        <div className="shadow-lg text-white" style={{backgroundColor: "#000", minHeight: "100%", borderRadius: "25px"}}>
            {/* <img style={{borderRadius: "25px"}} src="https://www.maxpixel.net/static/photo/1x/Eagle-Patriotic-Usa-America-Freedom-Symbol-Flag-5461544.jpg" /> */}
            <div className="sm:px-10 md:px-20 pt-12 text-box" style={{backgroundColor: "#000", fontFamily: "Inconsolata" }}>
            <h1 className="title" > Artificial Intelligence </h1>


            From the moment I learned about Artificial Intelligence, I was fascinated. As a tool, it seemed not only extremely powerful, but wonderfully versatile. However, for the longest time, AI felt extremely inaccessible—a mystical abstract that was impossibly complicated and beyond my scope of understanding.
<br /> <br />
However, I recently realized that I was looking at AI the wrong way. In reality, Artificial Intelligence is, as I previously alluded to, a tool. A carpenter does not need to build his power tools to use them; he just needs to have a good understanding of how they work. Similarly, my extensive programming experience meant that I had the ability to use AI. I was just intimidated by its apparent hugeness.
<br /> <br />

<a className="subtitle bold" id="AI Camp"> AI Camp </a> <br />

This realization first started when I was bombarded by emails from my teachers for a project-based Artificial Intelligence camp taught by Stanford graduates. None of my teachers knew much about the camp, but they all wanted to share the opportunity with me since they knew that I was interested in programming. When I looked into the camp, I was dazzled to see full-fledged AI projects of various calibers completed by students as old as I was. I immediately filled out an application and was thrilled to obtain a partial scholarship.
<br /> <br />
The first week of the summer camp covered the basics of programming and machine learning, and I was able to coast through most of it. During week two, however, my small cohort was thrown into the deep end as we were asked to design and create a machine learning project without ever having built anything remotely similar. While the breakneck speed at which we traveled through the project was fantastic for supplementing my own learning, I noticed that many other students were falling behind and often lost. Despite my desire to help others, there was no option but to keep pushing if we wanted to complete our project within the week. 
<br /> <br />
<a className="subtitle bold" id="Our Project"> Our Project </a> <br />
My group settled on the idea of creating an AI algorithm that had something to do with food, and we soon arrived on the idea of creating an AI that could identify the ingredients in a particular dish. Datasets consisting of dishes from around the world proved to be too expansive and poorly labeled, so we decided to focus on creating an AI to specifically identify ingredients in East Asian dishes. 
<br /> <br />
As the “highest” cohort, my group was drawn to the difficult challenge of looking at a dish and identifying (often homogenous) ingredients. Having the most front-end experience, my first task consisted of creating a website to showcase our model, a project that I completed within a couple of days and progressively reworked until the final day of the camp itself. I soon switched to training models, however, and I started to truly familiarize myself with the Convolutional Neural Network that we were creating. 
<br /> <br />
To provide a bit of context, machine learning is essentially the development of computer algorithms that can improve automatically at a certain task through repeated “experience” at that task. This “experience” typically consists of the algorithm using data to make predictions, checking its predictions, and adjusting itself based on whether or not it was correct. This repeated adjustment is the “learning” aspect of machine learning and is referred to as “training” the model. As the model trains and adjusts itself, it becomes better at the given task. A Convolutional Neural Network (CNN) iterates over an image in multiple stages to convert it into an array that represents the ingredients that the model thinks are in the image of a dish. As mentioned, the model compares its prediction with the actual ingredients in the dish and adjusts itself to be more accurate. The convolutional neural network that my cohort created took about 45 minutes to run, so we had to train the model overnight. 
<br /> <br />
<a className="subtitle bold" id="Presentation Day!"> Presentation Day! </a> <br />
The final day of camp consisted of each cohort presenting their machine learning project and the results they were able to achieve. Our model’s final iteration had an accuracy of 91%, performing much better than we thought it would given the complexity of the project, the fast-paced timeline, and our relative inexperience. My cohort was fascinated to see other groups' projects, especially those with potential real-world applications such as a machine learning model trained to identify ASL signs. As my group began discussing potential implementations of the various machine learning models, we began to consider the possibilities of expanding the scope of our project. 
<br /> <br />
The most exciting conclusion we reached was that the premise of our AI - ingredient detection - could be expanded far beyond the project we completed in two weeks. AIs could be trained to discern the ingredients from other cuisines, and the same technology could be used to detect food allergens or recreate dishes from social media posts. One of our cohort members had recently visited Eastern Asia, and he discussed the immense demand tourists might have for a tool that tells them exactly what they’re eating. The project itself could also be broadened in scope—multiple AIs could be trained to identify ingredients from dishes in various cuisines and another AI could be trained to figure out what cuisine a dish is from. This would allow for a photo of a dish to be sorted into a type of cuisine and subsequently have its ingredients identified by an AI created specifically to identify ingredients in dishes from that cuisine.
<br /> <br />

<a className="subtitle bold" id="Conclusions"> The End of Camp </a> <br />

Looking back on the project as a whole, I was really surprised by how much I had grown. Creating this model was an important building block that has allowed me to begin tackling real-world issues by applying Artificial Intelligence. Thanks to this program, AI was no longer an inaccessible subject—I had tamed it into a tool in my toolbox.  
<br /> <br />
Check out our final project video and some additional photos <a style={{color: "lightblue"}} href="https://www.youtube.com/watch?v=K67E81Ui8CE"> here! </a> 
<br /> <br />
Check out my current AI research here that I was able to build up thanks to this experience.
<br /> <br />

<a className="subtitle bold" id="Conclusions"> Research! </a> <br />

AI Camp gave me the skills I needed to do research involving Artificial Intellgence in my junior year. Under the mentorship of Professor Ardeshir Ebtehaj at the University of Minnesota, I worked as an independent researcher determining whether an Artificial Intellgence program could be used to identify ocean plastic in multispectral satellite imagery.
<br /> <br />
It sounds complciated, I know! But what I was essentially doing can be explained quite simply. I was training an AI to look at satellite imagery of the ocean (think about Google Earth) and identify which pixels contained plastic. In my research journey, I talked to researchers from all across the world—everyhwere from Ireland and Greece to India and right here at home in the United States. I spoke with professors, NASA employees, and engineers. 
<br /> <br />
My model had great success, with over 95% accuracy and precision. I have submitted my paper for publication in the Journal of Student Reserach, and you can read it <a style={{textDecoration: "underline"}} href="https://docs.google.com/document/d/10mRnFK6X5cqoXdM2ehm-Vw3SpY9tt4Qasp6noLYw_wI/edit"> here! </a>
            </div>

        </div>
    )
}

export default BlogDocTwo
