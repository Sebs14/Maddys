"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "¡Mensaje enviado correctamente! Te responderé pronto.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Error al enviar el mensaje");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#022733] py-20 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="font-dogurtlen text-4xl md:text-5xl text-[#F1EBDF] mb-3 tracking-wide">
            CONTACTO
          </h2>
          <p className="font-figtree text-base md:text-lg text-[#8BC9AA]/80">
            Cuéntame sobre tu proyecto
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-[#022733]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-figtree text-[#F1EBDF]/70 mb-2 text-sm tracking-wide"
                >
                  NOMBRE
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent text-[#F1EBDF] rounded-none font-figtree text-base focus:outline-none border-b-2 border-[#F1EBDF]/20 focus:border-[#8BC9AA] transition-colors placeholder:text-[#F1EBDF]/30"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-figtree text-[#F1EBDF]/70 mb-2 text-sm tracking-wide"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent text-[#F1EBDF] rounded-none font-figtree text-base focus:outline-none border-b-2 border-[#F1EBDF]/20 focus:border-[#8BC9AA] transition-colors placeholder:text-[#F1EBDF]/30"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block font-figtree text-[#F1EBDF]/70 mb-2 text-sm tracking-wide"
              >
                ASUNTO
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent text-[#F1EBDF] rounded-none font-figtree text-base focus:outline-none border-b-2 border-[#F1EBDF]/20 focus:border-[#8BC9AA] transition-colors placeholder:text-[#F1EBDF]/30"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-figtree text-[#F1EBDF]/70 mb-2 text-sm tracking-wide"
              >
                MENSAJE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-transparent text-[#F1EBDF] rounded-none font-figtree text-base focus:outline-none border-b-2 border-[#F1EBDF]/20 focus:border-[#8BC9AA] transition-colors resize-none placeholder:text-[#F1EBDF]/30"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            {/* Mensaje de estado */}
            {submitStatus.type && (
              <div
                className={`p-4 font-figtree text-sm border-l-4 ${
                  submitStatus.type === "success"
                    ? "bg-[#8BC9AA]/10 border-[#8BC9AA] text-[#8BC9AA]"
                    : "bg-[#EF7B32]/10 border-[#EF7B32] text-[#EF7B32]"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-3 bg-transparent hover:bg-[#F1EBDF]/5 text-[#F1EBDF] font-figtree text-sm tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-[#F1EBDF]/30 hover:border-[#8BC9AA]"
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
