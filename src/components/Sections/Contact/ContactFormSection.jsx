import Button from "@/components/Button";
import { Send } from "lucide-react";
import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    alert("Terima kasih! Pesan Anda telah dikirim.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-bgColor-1 to-textColor-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Kirim Pesan
              </h2>
              <p className="text-textColor-1 mb-8">
                Isi form di bawah ini dan tim kami akan merespons dalam 24 jam.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgColor-2 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgColor-2 focus:border-transparent"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-primary font-medium mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgColor-2 focus:border-transparent"
                    required
                  >
                    <option value="">Pilih kategori</option>
                    <option value="general">Pertanyaan Umum</option>
                    <option value="partnership">Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback & Saran</option>
                    <option value="report">Laporkan Masalah</option>
                  </select>
                </div>

                <div>
                  <label className="block text-primary font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bgColor-2 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <Button onClick={handleSubmit} width="full">
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
