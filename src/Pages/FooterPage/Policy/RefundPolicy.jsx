import React from "react";

const RefundPolicy = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto text-left mt-10 mb-40">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>

      {/* Refund Method */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Refund Method:</h3>
        <p className="mb-2">
          Once the returned item is received and inspected, we will notify you
          of the approval or rejection of your refund. If approved, the refund
          will be processed to the original payment method used for the
          purchase. Please note that it may take some time for the refund to be
          reflected in your account, depending on your payment provider.
        </p>
        <p className="mb-2 font-semibold">
          Some points should be noted while refunding an order:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Advance payment for any order is fully{" "}
            <strong>Non-refundable</strong>
            (if we are not able to provide the ordered product to the customer
            in the given timeline then the refund will be initiated within the
            next 48 hours).
          </li>
          <li>
            Refunds will be given in the same way the payment was made (SSL /
            MFS / BANK TRANSFER).
          </li>
        </ul>
      </section>

      {/* Refund Timeline */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Refund Timeline:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Bank Transfer:</strong> 3 Working Days
          </li>
          <li>
            <strong>Online Gateway / MFS:</strong> 7 to 15 Working Days
          </li>
          <li>
            <strong>EMI:</strong> 7 to 15 Working Days
          </li>
          <li>
            <strong>Cash On Delivery:</strong> 3 Working Days
          </li>
        </ul>
        <p className="mt-2">
          Refund Timeline will be counted after the cancellation of the order or
          after the end of the delivery timeline if the product cannot be
          delivered. Refund timeline excludes weekends and public holidays.
        </p>
      </section>

      {/* Modifications */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Modifications to Policy:</h3>
        <p>
          We reserve the right to modify or update this Refund Policy at any
          time without prior notice. Any changes will be effective immediately
          upon posting on our website.
        </p>
      </section>

      {/* Note */}
      <section>
        <p className="italic text-sm">
          N.B. Please note that this Refund Policy is part of our overall Terms
          and Conditions, and by using our e-commerce website, you acknowledge
          that you have read, understood, and agreed to these policies. If you
          have any questions or concerns, please contact our customer support
          for assistance.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
