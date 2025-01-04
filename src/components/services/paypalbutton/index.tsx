import style from '@/app/paypal.module.css'
import { Stack, Image } from '@mantine/core';

export default function PaypalButton(props:{paymentName: string, description: string, warning: string}) {

    return <Stack justify="center" className={style.paypalFlex}><h3 className={style.paymentName}>
    {props.paymentName}
    </h3>
    <p className={style.description}>
    {props.description}
    </p> 
    <p className={style.warning}>
    {props.warning}
    </p>
    
      
    <form className={style.form_outer} action="https://www.paypal.com/ncp/payment/QU8XUFZ8H7YBL" method="post" target="_top">
      <input className={style.pp_QU8XUFZ8H7YBL} type="submit" value="Pay Now" />
      <Image src={"https://www.paypalobjects.com/images/Debit_Credit_APM.svg"} alt="cards" />
      <section style={{color:"black"}}> Powered by <Image src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className={style.section_img}/></section>
    </form>
    </Stack>      
}
  