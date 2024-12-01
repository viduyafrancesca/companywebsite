'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import * as emailjs from '@emailjs/browser';

const Contact = () => {
    // State to manage form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // State to manage form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    // State to track EmailJS initialization
    const [isEmailJsReady, setIsEmailJsReady] = useState(false);

    // Initialize EmailJS on component mount
    useEffect(() => {
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            try {
                emailjs.init(publicKey);
                setIsEmailJsReady(true);
                // console.log('EmailJS initialized successfully');
            } catch (error) {
                console.error('Failed to initialize EmailJS:', error);
                setSubmitStatus('Email service initialization failed');
            }
        } else {
            // console.error('EmailJS Public Key is not defined');
            setSubmitStatus('Email service configuration is incomplete');
        }
    }, []);

    // Validate form before submission, don't delete this is for debugging
    const isFormValid = name.trim() !== '' &&
        email.trim() !== '' &&
        message.trim() !== '' &&
        isEmailJsReady;

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate environment variables
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        if (!serviceId || !templateId) {
            setSubmitStatus('Email configuration is incomplete');
            return;
        }

        // Reset previous status
        setSubmitStatus('');
        setIsSubmitting(true);

        // EmailJS template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        try {
            // Send email
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams
            );

            // Log the result for debugging
            console.log('Email sent successfully:', result);

            // Success handling
            setSubmitStatus('Thank you for reaching out to us, please allow up to 3 business days for a reply!');

            // Clear form inputs
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            // Error handling
            console.error('Failed to send email:', error);
            setSubmitStatus('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-16 px-4 bg-white" id="contact">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Card className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900 focus:ring-[#ffbd59] focus:border-[#ffbd59]">
                        <CardHeader>
                            <CardTitle>Connect with us for events and partnerships!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Input
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Your Message"
                                        className="min-h-[120px]"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>
                                {submitStatus && (
                                    <div className={`text-center ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                        {submitStatus}
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    className="w-full text-gray-600 bg-[#ffd159] hover:bg-[#ffbd59]"
                                    disabled={!isFormValid || isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                            {/* Debugging information - don't delete, use for debugging*/}
                            {/* <div className="mt-4 text-xs text-gray-500">
                                <p>Debug Info:</p>
                                <p>Name: {name ? 'Filled' : 'Empty'}</p>
                                <p>Email: {email ? 'Filled' : 'Empty'}</p>
                                <p>Message: {message ? 'Filled' : 'Empty'}</p>
                                <p>EmailJS Ready: {isEmailJsReady ? 'Yes' : 'No'}</p>
                            </div> */}
                        </CardContent>
                    </Card>

                    <Card
                        className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900 focus:ring-[#ffbd59] focus:border-[#ffbd59]"
                    >

                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-amber-600" />
                                <p>27 G. Del Pilar Street, Parang, Marikina City</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-amber-600" />
                                <p>(+63) 966 843 4064</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-amber-600" />
                                <p>beantalksph@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-amber-600" />
                                <div>
                                    <p>Mon-Fri: 7am - 8pm</p>
                                    <p>Sat-Sun: 8am - 9pm</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default Contact;
