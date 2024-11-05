"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PaymentDetails from "@/components/succeed/PaymentDetails";

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id") ?? "";

  const [checkoutSession, setCheckoutSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      if (sessionId) {
        try {
          const response = await fetch(`/api/stripe/sessions/${sessionId}`);
          const data = await response.json();
          setCheckoutSession(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchCheckoutSession();
  }, [sessionId]);

  if (loading) return <div>Loading...</div>;
  if (checkoutSession) return <PaymentDetails payment={checkoutSession} />;

  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <h2>Our Mission</h2>
        <p>
          <b>PayPal Payment Gateway</b>
        </p>
        <p>
          Our mission is to provide exceptional service and to follow through on
          our promises. We aim to deliver individualized solutions to all our
          needs and add value to our businesses.
        </p>

        <p>
          <b>Stripe Payment Gateway</b>
        </p>

        <h2>Our Vision</h2>
        <p>
          We strive to be the leaders in our industry and to be recognized for
          our commitment to quality, integrity, and innovation.
        </p>

        <h2>Our Team</h2>
        <p>
          Our team is made up of experienced professionals who are passionate
          about what they do. We are committed to fostering a collaborative and
          inclusive work environment.
        </p>
      </section>
    </div>
  );
};

export default PaymentPage;
