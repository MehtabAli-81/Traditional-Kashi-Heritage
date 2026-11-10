"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { MapPin, MessageCircle, Send } from "lucide-react";
import { PageHeading } from "@/components/PageHeading";
import { DemoNotice } from "@/components/DemoNotice";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Nothing was sent or saved. Connect a verified customer-care inbox or form service before using this as a live store.");
  }

  return (
    <div className="contact-page wrap">
      <PageHeading eyebrow="A HUMAN HELLO" title={<>Let’s talk <em>craft.</em></>} description="Have a question about a sample piece, a custom gift, or the story behind Kashi pottery?" />
      <DemoNotice compact />
      <div className="contact-layout">
        <div className="contact-info-card">
          <span className="eyebrow">THE STUDIO, ON THE MAP</span>
          <div className="contact-info-item"><MapPin size={20} /><div><strong>Nasarpur, Sindh</strong><span>Pakistan · the home of this craft</span></div></div>
          <div className="contact-info-item"><MessageCircle size={20} /><div><strong>Customer care details</strong><span>The assignment does not provide a verified phone number, WhatsApp account, or email address. Add these before launch.</span></div></div>
          <div className="contact-note"><span>NOTE</span><p>Custom orders, overseas delivery, and availability require a direct artisan quote. This demo does not connect messages to a business inbox.</p></div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <span className="eyebrow">A MESSAGE PREVIEW</span><h2>Leave a note.</h2>
          <p>This form demonstrates the interface only. Your entries are not transmitted or stored.</p>
          <label className="form-field">Your name<input name="name" required maxLength={100} placeholder="Name" /></label>
          <label className="form-field">Email address<input name="email" type="email" required maxLength={160} placeholder="you@example.com" /></label>
          <label className="form-field">What would you like to ask?<textarea name="message" required maxLength={1200} rows={5} placeholder="Tell us what you have in mind" /></label>
          <button className="button button-primary" type="submit">Preview message <Send size={16} /></button>
          {message && <p className="form-status" role="status">{message}</p>}
        </form>
      </div>
    </div>
  );
}
