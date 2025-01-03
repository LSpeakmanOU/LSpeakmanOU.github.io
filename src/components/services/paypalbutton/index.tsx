import style from '@/app/paypal.module.css'

export default function PaypalButton() {

    return <form className={style.form_outer} action="https://www.paypal.com/ncp/payment/QU8XUFZ8H7YBL" method="post" target="_top">
      <input className={style.pp_QU8XUFZ8H7YBL} type="submit" value="Pay Now" />
      <img src={"https://www.paypalobjects.com/images/Debit_Credit_APM.svg"} alt="cards" />
      <section> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className={style.section_img}/></section>
    </form>                
}
  