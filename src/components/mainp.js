
import {motion} from 'framer-motion'
import MediaCard from './Card.js'
import P1 from './P1.png'
import P2 from './P2.png'
import P3 from './P3.png'
import P4 from './P4.png'
import P5 from './P5.png'
import P6 from './P6.png'


function MainPro({setc}){
    setc(1);
    var text = "sdssds d s ds fd fdfd f dfd f d fd d "

    return(
        <motion.div className="MainP" initial = {{x : '100vw'}} animate = {{x : 0}} transition = {{duration : 1}} exit = {{x : '100vw'}}>
            <div className='MainP1'>
                <MediaCard img = {P1}/>
                <MediaCard img = {P2}/>
                <MediaCard img = {P3}/>
                <MediaCard img = {P4}/>
                <MediaCard img = {P5}/>
                <MediaCard img = {P6}/>
                <MediaCard img = {P6}/>

            </div>
        </motion.div>
    )
}

export default MainPro;