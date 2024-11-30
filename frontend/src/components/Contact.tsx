import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
    return (
        <div className="py-16 px-4 bg-white" id="contact">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#171717] text-center mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Card
                        className="bg-[#f9f9f9] border-2 border-[#ffbd59] text-gray-900 focus:ring-[#ffbd59] focus:border-[#ffbd59]"
                    >
                        <CardHeader>
                            <CardTitle>Connect with us for events and partnerships!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div>
                                    <Input placeholder="Your Name" />
                                </div>
                                <div>
                                    <Input type="email" placeholder="Your Email" />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Your Message"
                                        className="min-h-[120px]"
                                    />
                                </div>
                                <Button className="w-full text-gray-600 bg-[#ffd159] hover:bg-[#ffbd59]">
                                    Send Message
                                </Button>
                            </form>
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
