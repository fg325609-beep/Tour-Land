'use client'

import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '3 yoki 4 yoki 5 kishi',
    date: '',
    destination: 'Masalan, Pekin',
    visaSupport: 'Masalan, Chandu'
  })
  
  const [status, setStatus] = useState({
    type: null,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: null, message: '' })

    const BOT_TOKEN = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0"
    const CHAT_ID = "6660879147"

    const text = `
<b>✈️ Yangi Buyurtma (Tourland)</b>
<b>👤 Ismi:</b> ${formData.name}
<b>📞 Telefon raqami:</b> ${formData.phone}
<b>👥 Mehmonlar soni:</b> ${formData.guests}
<b>📅 Kelish sanasi:</b> ${formData.date}
<b>📍 Borish joyi:</b> ${formData.destination}
<b>🎫 Viza ko'magi:</b> ${formData.visaSupport}
    `.trim()

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML' 
        })
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Buyurtmangiz muvaffaqiyatli qabul qilindi!' })
        setFormData({
          name: '',
          phone: '',
          guests: '3 yoki 4 yoki 5 kishi',
          date: '',
          destination: 'Masalan, Pekin',
          visaSupport: 'Masalan, Chandu'
        })
      } else {
        setStatus({ type: 'error', message: 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Tarmoqda xatolik yuz berdi.' })
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          O'z band qilish formulasi
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 text-sm font-medium">Sizning ismingiz</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Misol. Palonchi Palonchiyev"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-sky-400 placeholder-gray-400 text-gray-800 transition-colors"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 text-sm font-medium">Sizning telefon raqamingiz</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Misol. +998 99 999 99 90"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-sky-400 placeholder-gray-400 text-gray-800 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 text-sm font-medium">Mehmonlar soni</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-sky-400 text-gray-800 transition-colors appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
              >
                <option value="1 kishi">1 kishi</option>
                <option value="2 kishi">2 kishi</option>
                <option value="3 yoki 4 yoki 5 kishi">3 yoki 4 yoki 5 kishi</option>
                <option value="5 jamoadan ko'p">5 jamoadan ko'p</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 text-sm font-medium">Kelish sanasi</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-sky-400 text-gray-800 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 text-sm font-medium">Sizning borish punktingizni tanlang</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-sky-400 text-gray-800 transition-colors appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            >
              <option value="Masalan, Pekin">Masalan, Pekin</option>
              <option value="Shanxay">Shanxay</option>
              <option value="Guanchjou">Guanchjou</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 text-sm font-medium">Sizning viza ko'magingizni tanlang</label>
            <select
              name="visaSupport"
              value={formData.visaSupport}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-sky-400 text-gray-800 transition-colors appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            >
              <option value="Masalan, Chandu">Masalan, Chandu</option>
              <option value="Pekin Viza ko'magi">Pekin Viza ko'magi</option>
              <option value="Sian">Sian</option>
            </select>
          </div>

          {status.type && (
            <div className={`p-4 rounded-xl text-sm font-medium text-center ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {status.message}
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#9CD3F5] hover:bg-[#8bc5e9] text-white font-semibold py-4 px-6 rounded-full transition-colors text-center shadow-sm"
            >
              Hozir band qilish
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Form