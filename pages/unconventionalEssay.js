import PosterComponent from '../components/PosterComponent';
import { motion, Override, motionValue, useTransform } from "framer-motion"
import React, { useEffect, useState } from 'react';
// import stopImage from '../public/Stop.png';


// NOTE: I could also create my own poster wall of nonsense positive stuff



function unconventionalEssay() {

    // const [scrollPosition, setScrollPosition] = useState(0);
    const [initPos, setInitPos] = useState(0);   
    const [posterArr, setPosterArr] = useState();

    // var posterArr = []

    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     setScrollPosition(position);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     console.log(scrollPosition/window.innerHeight)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [scrollPosition]);

    useEffect(() => {
        var linkArr = ["https://i5.walmartimages.com/asr/d29f50dd-39a9-4469-bc8f-f7dbffaa2464_1.ea02182ba9f8817a7c066ca2c6d12ba7.jpeg", "https://images-na.ssl-images-amazon.com/images/I/51X9SAbUI1L._SX331_BO1,204,203,200_.jpg", "https://rukminim1.flixcart.com/image/416/416/jbtomfk0/poster/5/a/g/medium-motivational-posters-for-office-and-home-decor-don-t-say-original-imafff3xmcysztbu.jpeg?q=70", "https://i.etsystatic.com/18347625/r/il/17a0f0/1615827360/il_fullxfull.1615827360_7xpw.jpg", "https://m.media-amazon.com/images/I/71gGlYbJKeL._AC_SX466_.jpg", "https://i.pinimg.com/originals/c0/73/39/c07339acc1997f0b150d217ef22ae074.jpg", "https://i5.walmartimages.com/asr/c958df76-ab5b-4f89-8883-7be62460c409.553646d270ca6a5ef6443158bdec6bc6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", "https://m.media-amazon.com/images/I/81Gs4qmn+JL._AC_SL1500_.jpg", "https://ecdn.teacherspayteachers.com/thumbitem/11-Motivational-Posters-4756736-1596374812/original-4756736-1.jpg", "https://cdn.shopify.com/s/files/1/0118/8167/6864/products/image_09909667-cc98-45c8-9c68-d0fd4c3ab958_300x300.png?v=1585626198", "https://i.pinimg.com/originals/74/aa/cf/74aacf0fa82bc087b8e22d1788b56563.jpg", "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/18/1416335404948/When-quotes-are-everywher-012.jpg?width=620&quality=85&auto=format&fit=max&s=cbe2ae365652fc4f0b1d4eb3990d8084", "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/18/1416336217211/1fc34c40-428c-4924-9ba6-eb5c760613ee-bestSizeAvailable.jpeg?width=620&quality=85&auto=format&fit=max&s=a1907cac4db1c684ab99976b920228fa", "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/18/1416336509415/6edcbc6a-7c63-4358-a67c-7b0f1454bcad-bestSizeAvailable.jpeg?width=620&quality=85&auto=format&fit=max&s=662bc6039767048902b37accccbf8c65", "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/18/1416336641509/ac475d99-87d0-4876-9f1f-d2e84c5211d2-bestSizeAvailable.jpeg?width=620&quality=85&auto=format&fit=max&s=f75590b4e13c4d51c3bc1e1f6dfa6a75", "http://www.lookupquotes.com/quote_imgs/thumb/wherever_you_go_go_with_all_your_heart~0.jpg"];
        var temp = [];
    
        for(var y = 0; y < 3; y++) {
            for(var x = 0; x < linkArr.length; x++) {
                temp.push(<PosterComponent topM={Math.floor(Math.random() * 700) - 100} leftM={Math.floor(Math.random() * (window.innerWidth - 300) - 100)} url={linkArr[x]} delay={Math.floor(Math.random() * 9000)} speed ={Math.floor(Math.random() * (window.innerHeight - 300)) } key={x}  pWidth="400px">  </PosterComponent>)
                console.log("pushed");
            }
        }

        temp.push(<PosterComponent topM={Math.floor(Math.random() * 700) - 100} leftM={Math.floor(Math.random() * (window.innerWidth - 400))} url="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/20/1416486134163/24a4bc83-4cdb-4d8f-80db-ba81ff179a6b-620x372.jpeg?width=620&quality=85&auto=format&fit=max&s=1b90fc1ba13464192d347df5135bb8e7" delay={Math.floor(Math.random() * 2000)} speed ={Math.floor(Math.random() * (window.innerHeight - 200))}  pWidth="400px"> </PosterComponent>)

        setPosterArr(temp);
    }, [initPos]);

    

    return (
        <div style={{height: "1200vh", backgroundColor: "white"}}>
            <div className="absolute" style={{top: "1100vh", width: "100%", height: "100vh", maxWidth: "100vw", backgroundColor: "white", zIndex: "1", opacity: ".8"}}> </div> 

            <div className="fixed" style={{height: "1200vh", marginTop: "60px"}}>
                <h1 className="fixed" style={{marginTop: "30vh", fontSize: "200px", width: "100vw", textAlign: "center"}}> THE POINT </h1>
                {posterArr}

                <div className="absolute" style={{top: "50vh", left: "50vw", marginTop: "-400px", marginLeft: "-300px"}}> <PosterComponent topM="0px" leftM="0px" url="https://i.ibb.co/gyC2sK3/Stop.png" delay="7500" speed ="500" pWidth="600px"> </PosterComponent> </div>
                
                
            </div>

            <div className="fixed" style={{height: "1200vh", marginTop: "60px", zIndex: "2"}}>
                <div className="absolute" style={{top: "50vh", left: "50vw", marginTop: "-400px", marginLeft: "-300px", zIndex: "1"}}> <PosterComponent topM="0px" leftM="0px" url="https://i.ibb.co/gyC2sK3/Stop.png" delay="7500" speed ="500" pWidth="600px"> </PosterComponent> </div>

            </div>
            
        </div>
    )
}


export default unconventionalEssay
