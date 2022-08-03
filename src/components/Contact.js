import {motion} from 'framer-motion';

const Contact = () =>{
    return <motion.div 
    initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>Contact page</motion.div>
}

export default Contact;