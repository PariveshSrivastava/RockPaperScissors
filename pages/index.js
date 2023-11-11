import '@/styles/globals.css'
import { useState } from 'react';

export default function Home() {
    //1 = rock
    //2 = paper
    //3 = scisors

    let [start, setStart] = useState(true);

    let [resultPage, setResultPage] = useState(false);
    let [animationPage, setAnimationPage] = useState(false);
    let [result, setResult] = useState();
    let [imga, setImga] = useState();
    let [imgb, setImgb] = useState();

    let [scorePlayer, setScorePlayer] = useState(0);
    let [scoreAi, setScoreAi] = useState(0);
    // let resultPage = false;

    let [aniText, setAniText] = useState("");

    const image_list = ["https://img.icons8.com/ios/100/hand-rock.png", "https://img.icons8.com/ios/100/hand.png", "https://img.icons8.com/ios/100/hand-scissors--v1.png"];

    function random(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function showText(message, speed) {
        let i = 0;
        let interval = setInterval(function () {
            setAniText((prevAniText) => prevAniText + message[i]);
            i++;
            if (i >= message.length) {
                clearInterval(interval);
                setAnimationPage(false);
            }
        }, speed);
    }

    function record(a) {
        let rand = random(1, 3);
        console.log(a, rand);

        setImga(image_list[a - 1]);
        setImgb(image_list[rand - 1]);

        if (a === rand) {
            setResult("DRAW");
        } else if ((a === 2 && rand === 1) || (a === 3 && rand === 2) || (a === 1 && rand === 3)) {
            setScorePlayer(scorePlayer + 1);
            setResult("YOU WIN");
        } else {
            setScoreAi(scoreAi + 1)
            setResult("YOU LOSE");
        }

        setAniText(new String);
        setResultPage(true);
        setAnimationPage(true);

        showText(" Choosing...", 130, () => {
            setAnimationPage(false);
        });
        setTimeout(() => {
            setResultPage(false);
        }, 3000);

        // setAnimationPage(false);
    }

    return (
        <>
            {
                start ?
                    <>
                        <div className="flex justify-center pt-5">
                            <p className="text-8xl sm:text-6xl font-light">ROCK PAPER SCISSORS</p>

                        </div>
                        <div className="flex justify-center pb-5" >
                            <p className="font-extralight">- Parivesh</p>
                        </div>
                        <div className="flex justify-center"><button onClick={() => { setStart(false) }}>
                            <p className="underline font-light">Start</p>
                        </button>
                        </div>
                    </>
                    : <>
                        {resultPage ?
                            <>
                                {
                                    animationPage ?
                                        <>
                                            <p className="flex justify-center mt-10 mb-5 text-3xl font-light" id="msg">
                                                {aniText}
                                            </p>
                                        </>
                                        : <>
                                            <div className="">
                                                {/* <p>Results page</p> */}
                                                <p className="flex justify-center mt-10 mb-5 text-3xl font-light">{result}</p>
                                                <div className="flex justify-center align-middle ">
                                                    <img className="m-7" width="100" height="100" src={imga} alt="hand-rock" />
                                                    <img className="m-7" width="100" height="100" src={imgb} alt="hand-scissors--v1" />
                                                </div>
                                            </div>
                                        </>
                                }

                            </>
                            :
                            <>
                                <div className="">
                                    <p className="flex justify-center mt-10 mb-5 text-4xl font-light">ROCK PAPER SCISSORS</p>
                                    <p className="flex justify-center m-5">AI COUNT : {scoreAi}&nbsp; |&nbsp; Player Count : {scorePlayer}</p>
                                    <div className="flex justify-center align-middle ">
                                        <button onClick={() => record(1)}>
                                            <img className="m-7" width="100" height="100" src="https://img.icons8.com/ios/100/hand-rock.png" alt="hand-rock" />
                                        </button>
                                        <button onClick={() => record(2)}>
                                            <img className="m-7" width="100" height="100" src="https://img.icons8.com/ios/100/hand.png" alt="hand" />
                                        </button>
                                        <button onClick={() => record(3)}>
                                            <img className="m-7" width="100" height="100" src="https://img.icons8.com/ios/100/hand-scissors--v1.png" alt="hand-scissors--v1" />
                                        </button>
                                    </div>
                                </div>
                            </>}
                    </>
            }
        </>
    )
}
