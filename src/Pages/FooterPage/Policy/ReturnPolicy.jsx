import React from "react";

const ReturnPolicy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Return Policy
          </h1>
          <p className="mt-4 text-gray-700">
            Please read the following Return and Refund Policy carefully before
            making a purchase on our website:
          </p>

          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Returns Eligibility:
              </h2>
              <p className="mt-2">
                We accept returns for most products purchased through our
                website, subject to the conditions outlined below:
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  The return must be initiated within 48 hours of receiving the
                  product.
                </li>
                <li>
                  The product must be unused, in its original condition, and in
                  the original packaging.
                </li>
                <li>
                  Certain items, such as protectors or campaign or discounted
                  products may not be eligible for return.
                </li>
                <li>
                  The product must have a valid issue that violates our warranty
                  policy to be eligible for return.
                </li>
                <li>
                  To return a product, The customer must have a full unboxing
                  video of the product.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Return Process:
              </h2>
              <p className="mt-2">
                To initiate a return, please contact our customer support team
                or follow the return instructions provided on our website.
                Provide the necessary details, including your order number, the
                item(s) you wish to return, and the reason for the return. Our
                customer support will guide you through the return process.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Return Shipping:
              </h2>
              <p className="mt-2">
                The cost of return shipping may be the responsibility of the
                customer, unless the return is due to an error on our part
                (e.g., wrong item shipped or product defect). We recommend using
                a trackable shipping method and obtaining proof of shipment for
                your return.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Modifications to Policy:
              </h2>
              <p className="mt-2">
                We reserve the right to modify or update this Return Policy at
                any time without prior notice. Any changes will be effective
                immediately upon posting on our website.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <strong>N.B.</strong> Please note that this Return Policy is
                part of our overall Terms and Conditions, and by using our
                e-commerce website, you acknowledge that you have read,
                understood, and agreed to these policies. If you have any
                questions or concerns, please contact our customer support for
                assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
