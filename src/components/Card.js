import Profile from './Profile.jpeg'
import {motion} from 'framer-motion'


export default function MediaCard({content, img}) {

  

  return (
    <motion.div className="Cmain" whileHover={{scale : 1.1}}>
        <div className="Cmain1">
            <motion.img src = {img || Profile} alt = "P1" whileHover={{scale : 2, borderRadius : 0}} transition = {{duration : 0.3 }}></motion.img>
            <h1>Title</h1>
            <p>{content}</p>
            <div className='Clinks'>
              <a href='#'>To source code</a>
              <a href='#'>TO Demo</a>
            </div>
        </div>
        
    </motion.div>
  );
}