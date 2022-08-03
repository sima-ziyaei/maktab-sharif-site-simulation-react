import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';
import reactPhoto from '../assets/react2.png';
import javaPhoto from '../assets/java2.png';
import pythonPhoto from '../assets/python.jpg';
import androidPhoto from '../assets/android.png';
import '../styles/bootCamps.css';

const links=[
    {
        name:'react',
        photo:reactPhoto
    },
    {
        name:'java',
        photo:javaPhoto
    },
    {
        name:'python',
        photo:pythonPhoto
    },
    {
        name:'android',
        photo:androidPhoto
    }
]

const BootCamps = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='cards'
    >

        {
            links.map((el)=>{
                return(
                <Link to={el.name} className='card'>
                    <img src={el.photo} alt={el.photo} className='reactPhoto' />
                    <p className='camps'>{el.name}</p> 
                </Link>
                )
            })
        }
        <Outlet />
    </motion.div>
}

export default BootCamps;