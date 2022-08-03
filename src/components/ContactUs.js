import { motion } from 'framer-motion';
import '../styles/contactUs.css';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from 'react';



const ContactUs = () => {

  const [errorName, setErrorName] = useState('');
  const [errorNumber, setErrorNumber] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputData, setInputData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setInputData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    validate()
    
  }



  const validateName = () => {
    console.log(inputData.name);
    if (inputData.name === "") {
      setErrorName("نام اجباری است");
    } else if (inputData.name.length <= 4) {
      setErrorName("نام باید بیشتر از چهار حرف باشد");
    }
    else {
      setErrorName('');
    }
  };


  const validateNumber = () => {

    if (inputData.number === "") {
      setErrorNumber(" شماره تماس اجباری است");
    } else if (inputData.number.length !== 11 && typeof inputData.number !== 'number') {
      setErrorNumber(" شماره تماس نامعتبر است")
    }
    else {
      setErrorNumber('');
    }

  };

  const validateEmail = () => {

    if (inputData.email === "") {
      setErrorEmail("ایمیل اجباری است");
    } else if (!inputData.email.includes('@')) {
      setErrorEmail("ایمیل نامعتبر است");
    }
    else {
      setErrorEmail("");
    }
  };


  const validateMessage = () => {

    if (inputData.message === "") {
      setErrorMessage("پیغام اجباری است");
    } else if (inputData.message.length <= 10) {
      setErrorMessage("پیغام باید بیشتر از ده حرف باشد");
    }
    else {
      setErrorMessage('');
    }
  };

  const validate = () => {
    validateName();
    validateMessage();
    validateNumber();
    validateEmail();

    if(errorEmail === '' && 
    errorMessage==='' &&
    errorName=== '' &&
    errorNumber===''){
      setIsSubmit(true);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    if(isSubmit){
      toast(<span className='toast'> <AiOutlineCheckCircle className='icon' />  پیغام شما ارسال شد</span>, {
      style: {
        height: '50px',
        width: '200px',
        padding: '5px',
        border: '2px solid rgb(51, 231, 51)',
        color: 'rgb(51, 231, 51)',

      }
    })
    setInputData({
      name: '',
      number: '',
      message: '',
      email: '',
    })
    setIsSubmit(false);
    }
    

  }

  return <motion.div
    className='wrapper'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
    <form className='form' onSubmit={(e) => handleSubmit(e)}>
      <lable>نام و نام خانوادگی</lable>
      <input type='text' placeholder='نام' name='name' onChange={handleChange} value={inputData.name} />
      <p className='error'>{errorName}</p>

      <lable> تلفن تماس</lable>
      <input type='tel' placeholder='تلفن تماس' name='number' onChange={handleChange} value={inputData.number} />
      <p className='error'>{errorNumber}</p>

      <lable>ایمیل</lable>
      <input type='text' placeholder='ایمیل' name='email' onChange={handleChange} value={inputData.email} />
      <p className='error'>{errorEmail}</p>

      <lable>پیغام</lable>
      <textarea type='text' placeholder='پیغام خود را بنویسید' name='message' onChange={handleChange} value={inputData.message} />
      <p className='error'>{errorMessage}</p>
      <input type='submit' value='ارسال' className='submit' />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </form>
  </motion.div >
}

export default ContactUs;