import dancingImg from './content/dancing.jpg';
import pearlImg from './content/pearl.jpg';
import vinciImg from './content/vinci.jpg';

import goghImg from './style/gogh.jpg';
import picassoImg from './style/picasso.jpg';
import staircaseImg from './style/staircase.jpg';

import dancingGoghImg from './gen/dancing_gogh.png';
import dancingPicassoImg from './gen/dancing_picasso.png';
import dancingStaircaseImg from './gen/dancing_staircase.png';
import pearlGoghImg from './gen/pearl_gogh.png';
import pearlPicassoImg from './gen/pearl_picasso.png';
import pearlStaircaseImg from './gen/pearl_staircase.png';
import vinciGoghImg from './gen/vinci_gogh.png';
import vinciPicassoImg from './gen/vinci_picasso.png';
import vinciStaircaseImg from './gen/vinci_staircase.png';


const images = {
    content: [
        {id: 'dancing', img: dancingImg, desc: 'Dancing Ballerina', link: 'https://catalogue.nla.gov.au/Record/3101869'},
        {id: 'pearl', img: pearlImg, desc: 'Girl with Earring', link: 'https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring'},
        {id: 'vinci', img: vinciImg, desc: 'Mona Lisa', link: 'https://en.wikipedia.org/wiki/Mona_Lisa'}
    ],
    style: [
        {id: 'gogh', img: goghImg, desc: 'Starry Night', link: 'https://en.wikipedia.org/wiki/The_Starry_Night'},
        {id: 'picasso', img: picassoImg, desc: 'Seated Nude', link: 'https://www.pablopicasso.org/seated-nude.jsp'},
        {id: 'staircase', img: staircaseImg, desc: 'Staircase', link: 'https://en.wikipedia.org/wiki/Nude_Descending_a_Staircase,_No._2'}
    ],
    gen: [
        {id: 'dancingGogh', content: 'dancing', style: 'gogh', img: dancingGoghImg},
        {id: 'dancingPicasso', content: 'dancing', style: 'picasso', img: dancingPicassoImg},
        {id: 'dancingStaircase', content: 'dancing', style: 'staircase', img: dancingStaircaseImg},
        {id: 'pearlGogh', content: 'pearl', style: 'gogh', img: pearlGoghImg},
        {id: 'pearlPicasso', content: 'pearl', style: 'picasso', img: pearlPicassoImg},
        {id: 'pearlStaircase', content: 'pearl', style: 'staircase', img: pearlStaircaseImg},
        {id: 'vinciGogh', content: 'vinci', style: 'gogh', img: vinciGoghImg},
        {id: 'vinciPicasso', content: 'vinci', style: 'picasso', img: vinciPicassoImg},
        {id: 'vinciStaircase', content: 'vinci', style: 'staircase', img: vinciStaircaseImg}
    ]
}

export default images;