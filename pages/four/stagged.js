// components/StaggeredList.js
import { motion } from "framer-motion";
import AnimatedCard from "./card";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const StaggeredList = () => {
  const items = [
    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},
    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},

    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},

    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},

    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},

    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},

    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},

    {title:"burger","description":"buger description",imageUrl:"https://tse1.mm.bing.net/th?id=OIP.CLLTL5fR4yJ8g4IWLSjTGwHaEo&pid=Api&P=0&h=180"},

];

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={itemVariants}>
          {/* {item} */}
          <AnimatedCard title={item.title} description={item.description} imageUrl={item.imageUrl}/>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList;
