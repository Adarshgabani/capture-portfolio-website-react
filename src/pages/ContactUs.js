import React from 'react';

//animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const ContactUs = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate="show" exit='exit'>
            contactUS
        </motion.div>
    )
}

export default ContactUs
