import React, { useState } from 'react';
import '../BarberShop/BarberShop.css'
import Boton from '../Boton/Boton'
import estilo1 from '/estilo1.webp'
import estilo2 from '/estilo2.webp'
import estilo3 from '/estilo3.webp'
import estilo4 from '/estilo4.webp'

export default function MyHairdresser() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const datos = [
    {
      img: estilo1,
      titulo: 'HAIR STYLING',
      description: 'Our experienced stylists are skilled in creating a wide range of hair styles to suit your preferences. Whether you are looking for a trendy haircut, a classic updo, or a special occasion hairstyle, we have the expertise to bring your vision to life.',
      service1: 'Customized Styles',
      service2: 'Trendy and Versatile',
      service3: 'Finishing Touches'
    },
    {
      img: estilo2,
      titulo: 'HAIR CUT',
      description: 'At Trim & Style, we take pride in delivering precision haircuts that leave you looking sharp and confident. Our talented barbers are trained in the latest cutting techniques and styles.',
      service1: 'Tailored Haircuts',
      service2: 'Clean and Precise',
      service3: 'Refresh and Transform'
    },
    {
      img: estilo3,
      titulo: 'BEARD TRIM',
      description: 'Our beard grooming services are designed to help you maintain a well-groomed and polished appearance.',
      service1: 'Expert Beard Shaping',
      service2: 'Grooming and Maintenance',
      service3: 'Personalized Advice'
    },
    {
      img: estilo4,
      titulo: 'HAIR WASH',
      description: 'Sit back and relax while we treat you to a rejuvenating hair wash experience.',
      service1: 'Deep Cleansing and Nourishment',
      service2: 'Relaxation and Rejuvenation',
      service3: 'Healthy Hair Care'
    },
  ];

  return (
    <main className='barbershop-container'>
      <div className="banner-service">
        <img className="bannerPeluqueria" src="" alt="" />
        <h1 className="servicesTitle">SERVICES</h1>
      </div>

      <section>
        {datos.map((item, index) => (
          <div key={index} className='servicio contenedorTarjetas'>
            <img src={item.img} alt={item.titulo} />
            <div className='tarjetas'>
              <h1>{item.titulo}</h1>
              <p>{item.description}</p>
              <ul>
                <li>{item.service1}</li>
                <li>{item.service2}</li>
                <li>{item.service3}</li>
              </ul>
              <Boton texto="Book Appointment" className="boton custom-class" onClick={openModal} />
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-over">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>✖</button>
            <h2>APPOINTMENT FORM</h2>
            <form>
              <div className="modalForm-row">
                <label>
                  Your Name
                  <input type="text" name="name" placeholder='Enter your name' required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder='Enter your email' required />
                </label>
              </div>
              <div className="modalForm-row">
                <label>
                  Phone Number
                  <input type="tel" name="phone" placeholder='Enter your Phone' required />
                </label>
                <label>
                  Date
                  <input type="date" name="appointmentDate" required />
                </label>
              </div>
              <div className="modalForm-row">
                <label>
                  Select Service
                  <select name="service" required>
                    <option value="hairstyling">Hair Styling</option>
                    <option value="haircut">Hair Cut</option>
                    <option value="beardtrim">Beard Trim</option>
                    <option value="hairwash">Hair Wash</option>
                  </select>
                </label>
                <label>
                  Select Barber
                  <select name="barber" required>
                    <option value="barber1">Barber 1</option>
                    <option value="barber2">Barber 2</option>
                    <option value="barber3">Barber 3</option>
                  </select>
                </label>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="boton custom-class">Book Appointment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
