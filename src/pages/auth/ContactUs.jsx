import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
        <div className='flex flex-col items-center'>
            <h1 className='font-black text-3xl'>Contact Us</h1>
            <p className='text-[#727272]'>Any question or remarks? Just write us a message!</p>
        </div>
        <div>
            <div>
            <div>
                <div>
                    <h3>Contact Information</h3>
                    <p>Say something to start a live chat!</p>
                </div>
                <div>
                    <p> <span>icon here</span> <span>+233 24 179 0035</span></p>
                    <p><span>email icon</span> <span>devs@gmail.com</span></p>

                </div>
                <div>
                    <p><span>location icon</span> <span>132 Buro, Labone Street</span></p>
                </div>
            </div>
            <div>
                <span>x icon</span>
                <span> ig icon</span>
                <span>facebook</span>
            </div>
            </div>
            <div>
                <form action="">
                    <div>
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>
                    </div>
                    <div>
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="number"/>
                    </div>
                    </div>
                    <div>
                        <label htmlFor=""> <input type="radio" name="subject" id="" value='General Inquiry' /> General Inquiry</label>
                        <label htmlFor=""> <input type="radio" name="subject" id="" value='Refund' /> Refund</label>
                        <label htmlFor=""> <input type="radio" name="subject" id="" value='Suggestion' /> Suggestion</label>
                        <label htmlFor=""> <input type="radio" name="subject" id="" value='Compliment' /> Compliment</label>
                    </div>
                    <div>
                        <label htmlFor="">Message</label>
                        <textarea name="message" id="" ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default ContactUs