import  { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() =>  {
        document.title = `${title}  - LAPTOPELLA-Use Laptop Reselling Platform`;
       
    },[title])
};

export default UseTitle;