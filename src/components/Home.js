import screenPhoto from '../assets/85.png';
import '../styles/home.css';
import {motion} from 'framer-motion';
const Home = () => {

    return (
        <motion.div 
        className='main'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >

            <div className='text'>
                <h1 className='titr'>ReactJs</h1>
                <p className='site'>Maktabsharif.ir</p>
                <p className='par'>(ReactJs)زبان برنامه نویسی </p>
            </div>
            <img className='screenPhoto' src={screenPhoto} alt='screenPhoto' />

        </motion.div>)
}
export default Home 