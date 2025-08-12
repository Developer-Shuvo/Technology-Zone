import React from "react";

const Exchange = () => {
  return (
    <div className="space-y-4 p-4 max-w-[1300px] mx-auto mt-10 mb-30">
      <div className="border text-left border-gray-200 rounded shadow p-6  bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-3xl font-semibold">Exchange Policy</h2>
        </div>

        {/* Content */}
        <div className="text-gray-600 space-y-3 text-lg leading-relaxed">
          <p>
            If you wish to exchange an item, you will need to contact our
            customer service team and they will initiate the process.
          </p>
          <p className="font-bold text-gray-800">
            Some key factors while exchanging a product:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              For any kind of exchange, you may have to bear a demurrage of{" "}
              <strong>5% to 30%</strong> of the product's original price which
              is being exchanged.
            </li>
            <li>
              Standard delivery and courier charges will be added for the
              shipment of previously and newly bought products.
            </li>
            <li>
              Customers will bear the shipping cost while returning a product to
              us for exchange purposes.
            </li>
            <li>
              Exchange price is calculated based on the current market’s MRP
              price of the product.
            </li>
          </ul>
          <p className="font-bold text-gray-800">Modifications to Policy:</p>
          <p>
            We reserve the right to modify or update this Exchange Policy at any
            time without prior notice. Any changes will be effective immediately
            upon posting on our website.
          </p>
          <p className="text-sm text-gray-500">
            <strong className="text-md">N.B.</strong> Please note that the
            Exchange Policy is part of our overall Terms and Conditions, and by
            using our e-commerce website, you acknowledge that you have read,
            understood, and agreed to these policies. If you have any questions
            or concerns, please contact our customer support for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
