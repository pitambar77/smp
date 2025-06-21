import React, { useState } from "react";
import axios from "axios";

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) return alert("Razorpay SDK failed to load.");

    const { data } = await axios.post("http://localhost:8000/api/payment/create-order", {
      amount: formData.amount,
      currency: "INR",
    });

    const options = {
      key: 'rzp_live_nGwqfddRD6IglI',
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Your Company",
      description: "Test Payment",
      order_id: data.order.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log(response);

        // Optional: verify on backend
        axios.post("http://localhost:8000/api/payment/verify-payment", response).then((res) => {
          alert(res.data.message);
        });
      },
      prefill: {
        name: formData.name,
        email: formData.email,
      },
      theme: { color: "#6366f1" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Make a Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="number"
          name="amount"
          required
          placeholder="Amount in INR"
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
