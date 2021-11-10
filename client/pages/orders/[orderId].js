import { useEffect, useState } from "react";

const OrderShow = ({order}) => {
    
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order?.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000))
        }

        setInterval(findTimeLeft, 1000);
    }, [])


    return <div>{msLeft/1000} seconds untill order expires</div>

    return(
        <div>
            Order show
        </div>
    )
}

OrderShow.getInitialProps = async (context, client) => {
    const {orderId} = context.query;
    const {data} = await client.get(`/orders/${orderId}`)
    return{
        order:data
    }
}

export default OrderShow;