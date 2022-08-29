

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Navbar({cur}){
    return (
        <div className="Navbar">
            <motion.div initial = {{y : '-100vw'}} animate = {{y : 0}} transition = {{duration : 0.5, type : "spring" , delay : 1.5}} className="Navbarlink">
                { cur === 0 ? <a className='clink'>Home</a> : <Link to="/">Home</Link>}
                { cur === 1 ? <a className='clink'>Projects</a> :<Link to="/projects">Projects</Link>}
                { cur === 2 ? <a className='clink'>Contact</a> :<Link to="/contact">Contact</Link>}
            </motion.div>
        </div>
    )
}

export default Navbar;