"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactContent from "@/components/ContactContent";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your wardrobe? Contact us to start your sustainable fashion journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactContent />
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </main>
    </div>
  );
}
