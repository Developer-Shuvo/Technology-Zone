import React from "react";

const DeliveryPolicy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 text-left">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Delivery Policy</h2>
          <p className="mt-4 text-gray-600">
            Please review our delivery policy and charges carefully before
            placing an order.
          </p>
        </div>

        {/* Delivery Charges */}
        <div className="space-y-8 ">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Delivery Charges For Smartphones and Tablets
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Shop Pickup from any of our outlets - Free</li>
              <li>Regular Delivery (Inside Dhaka) - BDT 100</li>
              <li>Regular Delivery (Outside Dhaka) - BDT 200</li>
              <li>Express On Day Delivery (Inside Dhaka) - BDT 300</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Delivery Charges For Smart Gadgets and Accessories
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Shop Pickup from any of our outlets - Free</li>
              <li>Regular Delivery (Inside Dhaka) - BDT 70</li>
              <li>Regular Delivery (Outside Dhaka) - BDT 120</li>
              <li>Express On Day Delivery (Inside Dhaka) - BDT 200</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600">
              For Cash On Delivery outside Dhaka, 1% extra Courier Condition
              Charge will be added with the total order amount.
            </p>
            <p className="mt-2 text-gray-600">
              For smartphones, laptops, tablets, gadgets or accessories weighted
              above 1 kg, delivery charge may increase according to the rules
              and regulations of the delivery service providing
              company/authority.
            </p>
            <p className="mt-2 text-gray-600">
              Any orders placed after 4.00 PM shall be treated as orders placed
              in the next working day.
            </p>
            <p className="mt-2 text-gray-600">
              For Cash On Delivery orders, one needs to pay an initial advance
              amount based on the product price via MFS / Bank transfer as
              stated below:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
              <li>
                Product Price between (BDT. 501 to BDT 5,000) - Advance BDT. 500
              </li>
              <li>
                Product Price between (BDT. 5001 to BDT 50,000) - Advance BDT.
                1,000
              </li>
              <li>Product Price more than BDT. 50,000 - Advance BDT. 2,000</li>
            </ul>
          </div>
        </div>

        {/* Delivery Timeline */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Delivery Timeline
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              For Regular orders (Inside/Outside Dhaka), products will be
              delivered within 24 Hours to 96 Hours of placing the order.
            </li>
            <li>
              For express delivery, place the order before 4.00 PM to get
              delivery within the same working day. Orders placed after 4.00 PM
              will be delivered the next working day.
            </li>
            <li>
              For Shop Pickups at Bashundhara City outlet, products can be
              collected on the same day (if the outlet is open).
            </li>
            <li>
              Due to bad weather or natural calamities, delivery timelines may
              change without prior notice.
            </li>
            <li>
              For other outlets, shop pickup will take 24–48 hours depending on
              product availability.
            </li>
          </ul>
        </div>

        {/* Modifications */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Modifications to Policy
          </h3>
          <p className="text-gray-600">
            We reserve the right to modify or update this Delivery Policy at any
            time without prior notice. Any changes will be effective immediately
            upon posting on our website.
          </p>
          <p className="mt-4 text-gray-600">
            <strong>N.B.</strong> This Delivery Policy is part of our overall
            Terms and Conditions. By using our e-commerce website, you
            acknowledge that you have read, understood, and agreed to these
            policies. If you have any questions or concerns, please contact our
            customer support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPolicy;
