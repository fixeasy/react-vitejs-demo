import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from '../types/contact';

const INITIAL_FORM: ContactForm = {
  nom: '',
  email: '',
  sujet: '',
  message: '',
};

const SUJETS = [
  { id: 'mission', label: 'Proposition de mission freelance' },
  { id: 'renseignement', label: 'Demande de renseignements techniques' },
  { id: 'collaboration', label: 'Proposition de collaboration sur un projet' },
  { id: 'formation', label: 'Demande de formation ou mentorat' },
  { id: 'conference', label: 'Invitation à une conférence/événement' },
  { id: 'autre', label: 'Autre sujet' },
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>(INITIAL_FORM);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.nom,
          from_email: formData.email,
          subject: formData.sujet,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      toast.success('Message envoyé avec succès !');
      setFormData(INITIAL_FORM);
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Parlons de votre projet</h3>
            <p className="text-gray-600 mb-8">
              Vous avez un projet ou une opportunité à discuter ? Je suis toujours intéressé 
              par de nouveaux défis et collaborations dans le domaine DevOps.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" size={24} />
                <span className="text-gray-700">contact@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" size={24} />
                <span className="text-gray-700">+33 6 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600" size={24} />
                <span className="text-gray-700">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
                Sujet
              </label>
              <select
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez un sujet</option>
                {SUJETS.map((sujet) => (
                  <option key={sujet.id} value={sujet.id}>
                    {sujet.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                'Envoi en cours...'
              ) : (
                <>
                  <span>Envoyer le message</span>
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default Contact;