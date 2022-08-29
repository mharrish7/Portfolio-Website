
import {motion} from 'framer-motion'

function Contact({setc}){
    setc(2);

    return(
        <motion.div className="Contact" initial = {{ y : '100vw'}} animate = {{y : 0}} transition = {{duration : 1 , delay : 0.5}}>
                
        </motion.div>
    )
}

export default Contact;