import { motion } from 'framer-motion';
import '../styles/about.css';
import firstPhoto from '../assets/about.jpg';
import secondPhoto from '../assets/about2.jpg';
import { BsLightbulbFill } from 'react-icons/bs'

const About = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div>
            <div className='header'>
                <h1>هر آنچه باید در مورد مکتب بدانید</h1>
                <p>!تمام ویژگی هایی که ما را متمایز می‌کند</p>
            </div>
            <div className='listCard'>
                <img src={firstPhoto} alt='animated photo' />
                <ul className='list mainList'>
                    <li><BsLightbulbFill className='listIcon' /> <span className='topList'>مکتب آموزشگاه نیست.</span>
                        <ul className='list'>
                            <li>مکتب یه مدرسه برنامه‌نویسیه، یعنی جایی که در کمترین مدت مهارت‌های مورد نیاز بازار کار رو به صورت عملی یاد میده.</li>
                        </ul>
                    </li>
                    <li> <BsLightbulbFill className='listIcon' /> <span className='topList'>هدف مکتب استخدام هست.</span>
                        <ul className='list'>
                            <li>مدرک گرفتن فایده‌ای نداره، استخدام شدن اصل قضیه است.</li>
                        </ul>
                    </li>
                    <li> <BsLightbulbFill className='listIcon' /> <span className='topList'> بازدهی برای مکتب مهمه.</span>
                        <ul className='list'>
                            <li>کیفیت یادگیری و فهم عمیق مطالب برای ورود به بازار کار مهمه.</li>
                        </ul>
                    </li>

                </ul>
            </div>
            <div className='listCard'>
                <ul className='mainList list'>
                    <li><BsLightbulbFill className='listIcon' /><span className='topList'>لزومی نداره کامپیوتری باشی</span>
                        <ul className='list'>
                            <li>دانشجوهای کامپیوتر و فناوری اطلاعات ممکنه جلوتر به نظر برسن، ولی بقیه هم می‌تونند به عنوان برنامه‌نویس استخدام بشن. رشته ملاک موفقیت نیست.</li>
                        </ul>
                    </li>
                    <li><BsLightbulbFill className='listIcon' /><span className='topList'>سابقه کار اونقدر اهمیت نداره</span>
                        <ul className='list'>
                            <li>توی آگهی‌های کار می‌نویسن چند سال سابقه کار در فلان حوزه، ولی واقعیت اینه که حرف اول و آخر رو مهارت میزنه. مهارت نشون میده که سابقه کار داری یا نه!</li>
                        </ul>
                    </li>
                    <li><BsLightbulbFill className='listIcon' /><span className='topList'>استعداد و انگیزه مهم‌ترین چیزه</span>
                        <ul className='list'>
                            <li>اشتیاق به مباحث و سرعت یادگیری خوب می‌تونه آدم رو تا نوک کوه بالا ببره.</li>
                        </ul>
                    </li>
                </ul>
                <img className='secondPhoto' src={secondPhoto} />
            </div>
        </div>
    </motion.div>
}

export default About;