import React from 'react'
import '../BarberShop/BarberShop.css'
import Boton from '../Boton/Boton'
import estilo1 from '/estilo1.webp'
import estilo2 from '/estilo2.webp'
import estilo3 from '/estilo3.webp'
import estilo4 from '/estilo4.webp'

export default function BarberShop() {
    return (
        <main className='barbershop-container'>
            <div className="banner-container">
                <img className="bannerPeluqueria" src="" alt="" />
                <h1 className="servicesTitle">SERVICES</h1>
            </div>

            <section>
                <div className='servicio'>

                    <div className='contenedorTarjetas'>
                        <img src={estilo1} alt="" />
                        {/* estilo 1 */}
                        <div className='tarjetas'>
                            <h1>HAIR STYLING</h1>
                            <p>Our experienced stylists are skilled in creating a wide range
                                of hair styles to suit your preferences. Whether you're
                                looking for a trendy haircut, a classic updo, or a special
                                occasion hairstyle, we have the expertise to bring your vision
                                to life. With a keen eye for detail and a deep understanding
                                of hair textures and face shapes, we'll work with you to
                                achieve a personalized and flattering style that complements
                                your individuality.</p>
                            <ul>
                                <li>Customized Styles</li>
                                <li>Trendy and Versatile</li>
                                <li>Finishing Touches</li>
                            </ul>
                            <Boton texto="Book Appointment" className="boton custom-class" />

                        </div>
                    </div>

                    <div className='contenedorTarjetas'>
                        <img src={estilo2} alt="" />
                        {/* estilo 2 */}
                        <div className='tarjetas'>
                            <h1>HAIR CUT</h1>
                            <p>At Trim & Style, we take pride in delivering precision haircuts
                                that leave you looking sharp and confident. Our talented
                                barbers are trained in the latest cutting techniques and
                                styles, ensuring that you receive a tailored haircut that
                                suits your face shape, hair type, and personal style.
                                Whether you prefer a traditional, clean-cut look or a
                                modern, edgy hairstyle, we'll provide meticulous attention
                                to detail to achieve the perfect cut.</p>
                            <ul>
                                <li>Tailored Haircuts</li>
                                <li>Clean and Precise</li>
                                <li>Refresh and Transform</li>
                            </ul>
                            <Boton texto="Book Appointment" className="boton custom-class" />
                        </div>
                    </div>

                    <div className='contenedorTarjetas'>
                        <img src={estilo3} alt="" />
                        {/* estilo 3 */}
                        <div className='tarjetas'>
                            <h1>BEARD TRIM</h1>
                            <p>Our beard grooming services are designed to help you maintain
                                a well-groomed and polished appearance. Our skilled barbers
                                specialize in beard shaping, trimming, and detailing to
                                enhance your facial features and achieve a neat and stylish
                                beard. Whether you're going for a full beard, a finely
                                sculpted look, or a clean and defined outline, we'll ensure
                                your beard is expertly trimmed and shaped to your desired
                                specifications.</p>
                            <ul>
                                <li>Expert Beard Shaping</li>
                                <li>Grooming and Maintenance</li>
                                <li>Personalized Advice</li>
                            </ul>
                            <Boton texto="Book Appointment" className="boton custom-class" />
                        </div>
                    </div>

                    <div className='contenedorTarjetas'>
                        <img src={estilo4} alt="" />
                        {/* estilo 4 */}
                        <div className='tarjetas'>
                            <h1>HAIR WASH</h1>
                            <p>Sit back and relax while we treat you to a rejuvenating
                                hair wash experience. Our hair wash service goes beyond
                                cleansing; it revitalizes your hair and scalp, leaving them
                                feeling refreshed and nourished. We use high-quality hair
                                care products that are tailored to your specific hair type
                                and needs. Our attentive staff will provide a soothing scalp
                                massage, ensuring a relaxing and invigorating experience.</p>
                            <ul>
                                <li>Deep Cleansing and Nourishment</li>
                                <li>Relaxation and Rejuvenation</li>
                                <li>Healthy Hair Care</li>
                            </ul>
                            <Boton texto="Book Appointment" className="boton custom-class" />
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
