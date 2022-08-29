import Profile from './Profile.jpeg'
import {motion} from 'framer-motion'


function MainHome({setc}){

    setc(0);
    
    const variants1 = {
        anim : {
            scale : [1.1,1],
            transition : {
                delay : 1.2 , 
                duration : 1.5, 
                yoyo : Infinity,
            }
        },
        glow:{
            boxShadow : ["0 0 100px rgb(255,255,255,0.5)","0 0 50px rgb(255,255,255,0.5)"]
        }

    }

    return(
        <motion.div className='Smain' initial = {{x : 0}} exit = {{x:'-100vw'}} transition = {{duration : 0.5}}>
        <div className="MainH">
            <motion.div className="MainH1" initial ={{x : '-100vw'}} animate = {{x : 0}} transition = {{duration : 1 , delay : 0.5}}>
                <h1>Hi 👋, I am <motion.div className='th text'>H</motion.div>
                <motion.div className='ta text'>A</motion.div>
                <motion.div className='tr text'>R</motion.div>
                <motion.div className='tr1 text'>R</motion.div>
                <motion.div className='ti text'>I</motion.div>
                <motion.div className='ts text'>S</motion.div>
                <motion.div className='th1 text'>H</motion.div></h1>
                <h2>Love Coding, Tech enthusiast</h2>
            </motion.div>
            <motion.div className="MainH2" initial ={{x : '100vw'}} animate = {{x : 0}} transition = {{duration : 1, delay : 0.5}}>
                <motion.img 
                drag 
                // animate = {{scale : [1.1,1]}}
                variants={variants1}
                animate = "anim"
                dragConstraints = {{left : 0, right : 0, top : 0, bottom : 0}}
                dragElastic = {2}
                // transition = {{delay : 1.2 , duration : 1.5, yoyo : Infinity, }}
                // whileHover = {{boxShadow : "0 0 150px rgb(255,255,255,0.5)"}}
                transition = {{duration : 0.5}}
                src={Profile} 
                alt="Profile" className='profileimg'></motion.img>
            </motion.div>

            
        </div>
            <motion.div className='MainE1' drag  dragConstraints = {{left : 0, right : 0, top : 0, bottom : 0}}>
                <motion.div className='About' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <h1>ABOUT ME</h1>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p><span className='otex'>class</span> WhoAmI:</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p><span className='space'>____</span> user = 'Harrish'</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p>  <span className='space'>____</span> current_edu = "NIT trichy"</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p>  <span className='space'>____</span> hobbies = Drawing,Watching Anime,OPM</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p>  <span className='space'>____</span> <span className='otex'>def</span> getCity:</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p>   <span className='space'>____</span> <span className='space'>____</span> <span className='otex'>return</span> Nagercoil</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p>  <span className='space'>____</span>  <span className='otex'>def</span> Ambitions:</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p>   <span className='space'>____</span> <span className='space'>____</span> 	LearnTensorflow2.x</p>
                </motion.div>
                <motion.div className='Me1' viewport={{ once: true }} initial = {{opacity : 0}} whileInView = {{opacity : 1, x : 0}} transition = {{duration : 0.4, delay : 0.5}}>
                <p>   <span className='space'>____</span> <span className='space'>____</span> 	Restart_my_youtube_channel</p>
                </motion.div>
            </motion.div>
            
        </motion.div>
            
    )
}

export default MainHome;

   