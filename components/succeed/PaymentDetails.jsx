
// Define the PaymentDetails component
const PaymentDetails = ({ payment }) => {
const customer = payment?.customer_details;
  const productDetails = payment?.line_items?.data?.map(item => ({
    ...item.price.product,
    price: item.price.unit_amount,
    quantity: item.quantity,
  }));

  const totalSub = payment?.amount_subtotal;
  const total = payment?.amount_total;
  // const { cardNumber, cardHolderName, expiryDate, billingAddress } = payment;
  console.log("productDetails" , productDetails)
  return (
    <div className="payment-details">
      <h2>Payment Details</h2>
      <ul>
        <li><strong>User email:</strong> {customer.email}</li>
        <li><strong>Card Holder Name:</strong> {customer.name}</li>
        <li><strong>productDetails:</strong> {productDetails.map((item)=>{
          return (
            <>
            <p>{item.id}</p>
            </>
          )
        })}</li>
        {/* <li><strong>Billing Address:</strong> {billingAddress}</li> */}
      </ul>
    </div>
  );
};



export default PaymentDetails;
