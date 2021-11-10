import { useEffect, useState } from "react";
import StripCheckout from "react-stripe-checkout";
import useRequest from "../../hooks/use-request";

const OrderShow = ({order, currentUser}) => {
    
    const [timeLeft, setTimeLeft] = useState(0);

    const {doRequest, errors} = useRequest({
        url:'/api/payments',
        method:'post',
        body:{
            orderId:order.id
        },
        onSuccess: (payment) => consolt.log(payment)
    })

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order?.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000))
        }

        const intervalId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    if(timeLeft < 0 ){
        return <div>Order expired</div>
    }


    return <div>
            {msLeft/1000} seconds untill order expires
            <StripCheckout 
                token={(token) => console.log(token)}
                stripeKey=""
                amount={order.ticket.price * 100}
                email={currentUser.email}
            />
            {errors}
        </div>

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