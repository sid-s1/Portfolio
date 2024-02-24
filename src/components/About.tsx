import React from "react";
import Header from "./Header";
import "../App.css";
import "../About.css";

interface AboutProps {
    changeMainPage: (param: string) => void;
}

const About: React.FC<AboutProps> = ({changeMainPage}) => {
    const onNavbarClick = (param: string) => changeMainPage(param);
    return (
    <>
        <Header onNavbarClick={onNavbarClick} selectedPage={"About"}/>
        <div className="background-info">
            <h3>Early Days</h3>
            <p>
                I was one of the lucky kids back in my hometown in 2003 who got a computer for his birthday because of how much I was drawn to them. Growing up, it was hard to keep me away from a computer, and from asking a barrage of questions of anyone who would indulge me. The technicians who came to our house for service calls would have gotten pretty sick of me I am sure
            </p>
            <h3>High School</h3>
            <p>
                In India's schooling system, there was always a high significance attached to the grades we got in every subject that was allocated to us. Every day, we used to have 8 different classes, all of which were mandatory. 50+ students in each class especially in summers, and scorching days in school (oh yeah, 40+ degree heat, without air-conditioners by the way), and a 45+ minute ride in the bus back home - all these things made every student pretty excited about the prospect of being able to pick and choose which subjects they studied. 
                <br></br>
                <br></br>
                That was an option we all finally got, partially after grade 8, and almost fully after grade 10. Most of us wanted to find a subject which could be an easy 90%+, because why put ourselves through more pain and suffering. Right? Right. But I went with Computer Science as my elective anyway; because how could I not. 
                <br></br>
                <br></br>
                Besides having a perennial desire to take the harder road even when the promised land of roses and lilies is right in front of me, I felt compelled to continue learning about the world of computers and software engineering because it has always felt completely in line with how I think. The logical, systematic problem-solving that sits at the core of this industry, has always been a draw for me. 
                <br></br>
                <br></br>
                Little did I know, but Life had different plans for me. I was reasonably good at Physics and Mathematics at the time, and because I had not developed a conviction of any kind by then, I ended up going with what my peers were doing at the time, and I truly considered myself as not being at par with some other acquaintances at the time whom I thought were ‘more meant’ for the world of software engineering than I was.
                That said, I don’t want to discount the element of choice that I had in the matter. At the time, I thought that in future I will have enough flexibility to move around and then I will do what I truly want to in life. 
            </p>
            <h3>University</h3>
            <p>
                After graduating, the true weight of it all truly hit me for the first time. Searching for jobs in Mechanical Engineering completely failed to compel me to act in the job space.
                <br></br>
                <br></br>
                Because I had moved to Australia on a visa, and I did not want to go back home after having spent $100k without the knowledge of who I was and what I wanted to be, I made the decision to foray into the world of Operations & Logistics (where I still used my Engineering skills), and my software quest went on the back-burner until I figured it all out much later in 2022/23.
            </p>
            <h3>Getting the visa and finally making the switch</h3>
            <p>
                I had done several online courses before in web development, some I had completed, and some (guilty as charged) I had left midway. But in all those courses, I never felt like I was working on projects or learning things that were weighty enough. 
                <br></br>
                <br></br>
                So after a vacation back home in 2022, where I had more than a few moments of (crystal) clarity, I decided that I will not put off the dreams of my true self anymore and I will pursue what I truly want out of my life. I decided. I developed a conviction. I was going to be a Software Engineer. 
                <br></br>
                <br></br>
                I threw myself straight into the deep end, by joining General Assembly’s Software Engineering Immersive bootcamp. Because I was not a permanent resident of Australia at the time, I ended up having to pay the full amount by myself within a few months; that drilled a massive hole in my bank account, but it was a hole that I have been proud of ever since it happened. I also took support from my best friends, whom I will eternally be grateful to for having my back.
                <br></br>
                <br></br>
                Due to the constantly changing government rules regarding immigration, and their eternally shifting priorities, my plans to search for jobs in this space kept getting delayed. They were finally put to an end when I became a permanent resident of Australia in 2023. Woo-hoo! 
            </p>
        </div>
    </>
    )
};

export default About;