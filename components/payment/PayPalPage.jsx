import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalPage() {
  const amount = 10; // Amount to be charged

  return (
    <div>
      <PayPalScriptProvider
        options={{
          clientId: "AUBJVOell9P7XCZwXjee1CzA8lQRnOFwmU2Bjo3fHCKQHU8pXW2MTPx1p0DJ_VudxJ1Z6BaiRdxUXZzV",
        }}
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toString(), // Amount to be charged
                },
              }],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();

            console.log("Transaction completed by:", details.payer.name.given_name);
            console.log("details:", details);
            alert('Transaction completed by ' + details.payer.name.given_name);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default PayPalPage;
