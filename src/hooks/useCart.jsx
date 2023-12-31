import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () =>{
    const {user, loading} = useAuth()
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data : cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token") && !loading,

        queryFn: async () =>{
            const res = await fetch(`https://summer-photo-camp-server.vercel.app/carts?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        },
      })

      return [cart, refetch]
}

export default useCart;