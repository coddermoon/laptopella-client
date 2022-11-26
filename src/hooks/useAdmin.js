import { useEffect, useState } from "react"

const useAdmin = email => {
    const [userType, setUserType] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://laptopella.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
               
                    setUserType(data.accountType);
                    setIsUserLoading(false);
                })
        }
    }, [email])
    return [userType, isUserLoading]
}

export default useAdmin;