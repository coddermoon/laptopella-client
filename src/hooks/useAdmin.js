import { useEffect, useState } from "react"


const useAdmin = email => {
    const [userType, setUserType] = useState(false); 
       const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://laptopella.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
               
                    setUserType(data.accountType);
                    setIsAdminLoading(false);
                })
            
        }

    }, [email])
    
    return [userType, isAdminLoading]
}

export default useAdmin;