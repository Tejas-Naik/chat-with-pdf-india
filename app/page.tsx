import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon 
} from "lucide-react";

const features = [
  {
    name: "Blazing fast responses",
    description: "Experience lightning-fast response times for all your queries and actions.",
    icon: ZapIcon
  },
  {
    name: "Chat memorization",
    description: "Easily recall past conversations and keep track of important information.",
    icon: BrainCogIcon
  },
  {
    name: "Interactive PDF viewer",
    description: "Engage with your PDF documents in a dynamic and interactive way.",
    icon: EyeIcon
  },
  {
    name: "Cloud Backup",
    description: "Securely store and access your data from anywhere with our reliable cloud backup.",
    icon: ServerCogIcon
  },
  {
    name: "Responsive across devices",
    description: "Enjoy a seamless experience on any device, whether it's a desktop, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon
  },
  {
    name: "Store your PDF Documents",
    description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon
  }
];


export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Interactive Document Companion 
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform Your PDFs into Interactive Conversations</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br/>
              <br/> Upload your document, and out chatbot will answer questions, summarize content, and answer all your Qs. Ideal for everyone, <span className="text-indigo-600">Chat with PDF</span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations,</span>
              enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild className="mt-10">
              <Link href="/dashboard"> Get started</Link>              
          </Button>
            
        </div>

        <div>
          <div>
            <Image 
              alt="App screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
