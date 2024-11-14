import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="bg-[#9538E2] text-center text-white">
        <h2 className="text-2xl my-4 font-bold pt-10">Ask Question</h2>
        <p className="pb-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart <br /> devices to the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="mt-24 mb-48 p-3 md:p-10 rounded-md bg-base-100 shadow-xl space-y-4">
        <div className="collapse   collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          Do you offer any warranties on products?
          </div>
          <div className="collapse-content">
            <p>Yes, many of our products come with manufacturer warranties. The duration and terms vary by product, so please refer to each product’s page or contact our support team for details on warranties.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How can I track my order?
          </div>
          <div className="collapse-content">
            <p> After placing an order, you’ll receive an email with a tracking number and a link to monitor your order’s progress. Alternatively, you can log in to your account, go to "My Orders," and track your order status directly from our website.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          What is the return policy at Gadget Haven?
          </div>
          <div className="collapse-content">
            <p> We offer a 30-day return policy for most items, allowing you to return products in their original condition if you’re not completely satisfied. Please review our Return Policy page for specific details and any exceptions.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How can I contact customer support?
          </div>
          <div className="collapse-content">
            <p>Our customer support team is here to help! You can reach us via email, phone, or live chat, all available on our Contact Us page. We’re dedicated to providing quick and helpful responses to all inquiries.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Can I pre-order upcoming products?
          </div>
          <div className="collapse-content">
            <p>Yes! For select new releases, we offer a pre-order option so you can reserve your device before it’s available. Keep an eye on our website or subscribe to our newsletter to stay updated on upcoming pre-orders.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faq;
