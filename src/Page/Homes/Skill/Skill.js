import React from 'react';
import Skills from './Skills';

const Skill = () => {
    const mySkill = [
        {
            id: 1,
            name: "HTML",
            img: "https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
        },
        {
            id: 2,
            name: "CSS",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"
        },
        {
            id: 3,
            name: "JavaScript",
            img: "https://www.computersciencemaster.com.br/wp-content/uploads/2018/10/O-que-e-javascript-1024x1024.png"
        },
        {
            id: 4,
            name: "BootStrap",
            img: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png"
        },
        {
            id: 5,
            name: "TailwindCss",
            img: "https://cms-assets.tutsplus.com/uploads/users/30/posts/33545/preview_image/tailwind-pre.png"
        },
        {
            id: 6,
            name: "Daisy UI",
            img: "https://images.opencollective.com/daisyui/d1eb928/logo/256.png"
        },
        {
            id: 7,
            name: "React.js",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwoQOKaEC2yGqs3Qt7cM-m4AGON6PeUEc81wnzHh-igFMBptr8uhyyEx0YGAm485M_LI&usqp=CAU"
        },
        {
            id: 8,
            name: "Node.js",
            img: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"
        },
        {
            id: 9,
            name: "Firebase",
            img: "https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
        },
        {
            id: 10,
            name: "MongoDB",
            img: "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"
        },
        {
            id: 11,
            name: "Figma",
            img: "https://yt3.ggpht.com/ytc/AMLnZu9WFZ1kTBuy0mo3cVlo17QFXNT_55y2W_QMoRWLFw=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            id: 12,
            name: "vercel",
            img: "https://logovtor.com/wp-content/uploads/2020/10/vercel-inc-logo-vector.png"
        },
        {
            id: 13,
            name: "React-Form",
            img: "https://i.ytimg.com/vi/nF4vw3efUwY/maxresdefault.jpg"
        },
        {
            id: 14,
            name: "Rest Api",
            img: "https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png"
        },

    ]
    return (
        <div className='my-20'>
            <div>
                <h1 className='text-5xl text-center font-gloock text-green-600 my-10'>My Skill</h1>
            </div>
            <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-5'>
                {
                    mySkill.map(skill => <Skills
                        key={skill.id}
                        skill={skill}
                    ></Skills>)
                }
            </div>
        </div>
    );
};

export default Skill;