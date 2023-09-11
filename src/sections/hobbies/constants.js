import athleticsImg from '../../images/athletics-soccer.jpg';
import destinyImg from '../../images/destiny.png';

export const hobbies = [
    {
        name: 'Hackathons',
        entries: [
            'The perfect environment for pushing my programming skills to the next level.',
            'One of the hackathons that I enjoyed the most was Hack the North. Our group created a program to change LED light blinking speed depending on the genre of song being played. It was my first introduction to incorporating an external API in my code, and was instrumental in building my familiarity with APIs to where it is today. (You can view our demo on the left!)',
            'Other competitions that I\'ve participated in are ClimaTech and the Digital Inclusion Challenge. Source code for all of these projects can be found on my GitHub profile.'
        ],
        videoId: 'E91ISr_zqLM',
        srcType: 'video'
    },
    {
        name: 'Athletics',
        entries: [
            'Nothing beats breaking a sweat with friends!',
            'I\'ve played competitive soccer for over 10 years, split between the Stouffville and Markham rep teams. These moments have become some of my most cherished memories, such as winning the Richmond Hill Challenge Cup tournament. I currently play in the Adult League at Markham Soccer Club, and I still enjoy every second of it.',
            'At a more casual level, I also play volleyball, basketball, spikeball, tennis, ping pong, you name it. Trying out new activities is always interesting, with the added benefit of keeping me in shape.',
            'Lastly, I\'m a Toronto Maple Leafs fan, so I like to catch their games on TV whenever Hockey Night in Canada rolls around.',
        ],
        image: athleticsImg,
        srcType: 'image'
    },
    {
        name: 'Gaming',
        entries: [
            'My go-to pastime for cooling down after a long day.',
            'Destiny 2 has been my favourite game ever since I first picked it up in 2018. A fast-paced looter shooter coupled with incredible lore, this game is a mainstay in my gaming rotation. Warlock supremacy!',
            'I also enjoy playing metroidvanias and rogue-likes. Hollow Knight ranks at the top of my list for these categories, but I\'ve had a lot of fun with Hades, Dead Cells, and the Ori games as well.',
            'Finally, there\'s nothing like a good zombie game! State of Decay 2 and the Call of Duty Zombies franchise are great for providing a little horror to those late night gaming sessions.',
        ],
        image: destinyImg,
        srcType: 'image'
    }
];

export const sizes = {
    cardWidthMax: 1000,
    cardWidthMd: 580,
    cardWidthSm: 320,
    mediaWidth: 450,
    mediaHeight: 400,
    textWidth: 550,
};
