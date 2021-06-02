
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm();

    return (
        <div className='bg-[#4601c5] rounded-full w-[25vw] h-[25vw] mx-auto flex shadow-xl'>
        <form method="POST" name="contact" data-netlify="true" netlify-honeypot="bot-field" id='contact'>
            <input type="hidden" name="form-name" value="contact" />
            <h3 className='text-3xl text-center text-white mb-8 font-bold focus-none mt-16'>Get in touch...</h3>
           
                <div className={"flex flex-col w-full justify-center items-center"}>
                    <div className={"text-black flex-grow w-8/12 "}>
                        <p className="hidden">
                            <label>
                                Don’t fill this out if you're human: <input name="bot-field" />
                            </label>
                        </p>
                        
                            <label htmlFor="name" className="mr-2">
                                <input
                                    type="text"
                                    name="contactName"
                                    id="contactName"
                                    placeholder="Name"
                                    {...register('name',{ required: "Name is required" })}
                                    className={
                                        "w-full my-2 pl-2"
                                    }
                                />
                            </label>
                            
                        
                        <label htmlFor="email">
                            <input
                                type="email"
                                name="contactEmail"
                                id="contactEmail"
                                placeholder="Email Address"
                                {...register('email',{ required: "Valid email is required" })}
                                className={
                                    "w-full my-2 pl-2"
                                }
                            />
                        </label>
                        <label htmlFor="question">
                            <textarea
                                type="text"
                                
                                name="contactQuestion"
                                id="contactQuestion"
                                rows="3"
                                placeholder="Say something"
                                className={
                                    "w-full my-2 pl-2"
                                }
                            />
                        </label>
                        
                        <button
                            type="submit"
                            className="bg-[#ffd000] text-gray-800 font-semibold w-full py-1 mt-4 hover:bg-[#94df57] transform hover:scale-105 shadow-md hover:shadow-lg transition duration-250"
                        >
                            Send
                        </button>
                    </div>
                
            </div>
        </form></div>
    );
};
export default ContactForm;