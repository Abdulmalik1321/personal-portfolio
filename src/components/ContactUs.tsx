import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/ui/select";
import { Textarea } from "@/shadcn/ui/textarea";
import { Github, Linkedin } from "lucide-react";

export function ContactUs() {
  return (
    <section
      id="ContactUs"
      className="md:h-screen w-full flex flex-col md:flex-row md:items-center gap-12 justify-center p-6 pt-28 md:mt-0 md:p-12 relative"
    >
      <div>
        <div className="md:w-[33vw] flex flex-col gap-5">
          <p className="text-xl md:text-3xl">
            Let’s Connect
            <br />
            and Explore New Opportunities
          </p>
          <p>
            I’m eager to connect with professionals, recruiters, and
            organizations looking for innovative solutions in development and
            accounting. Feel free to reach out if you have any questions or want
            to discuss potential job opportunities.
          </p>
          <a
            target="_blank"
            className="font-bold underline"
            href="https://wa.me/+966538495575"
          >
            Contact me via WhatsApp: +966538495575
          </a>
          <div className="contact-info-benefits">
            <p className="font-bold">What I bring to the table:</p>
            <div className="grid grid-cols-2 mt-1">
              <p>
                <b>✓</b> Technical Expertise
              </p>
              <p>
                <b>✓</b> Problem-Solving Skills
              </p>
              <p>
                <b>✓</b> Innovation-Driven
              </p>
              <p>
                <b>✓</b> Results-Oriented
              </p>
              <p>
                <b>✓</b> Strong Communication
              </p>
              <p>
                <b>✓</b> Team Player
              </p>
            </div>
          </div>
          <div className="social-media flex flex-col gap-4">
            <p className="text-2xl">Connect with me:</p>
            <p>
              <a
                href="https://www.linkedin.com/in/abdulmalik-almasud/"
                target="_blank"
                className="text-2xl underline flex items-center gap-3"
              >
                <Linkedin />
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Abdulmalik1321"
                target="_blank"
                className="text-2xl underline flex items-center gap-3"
              >
                <Github />
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[33vw] relative shadow-xl bg-background-op backdrop-blur-3xl border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl ">
        <img
          src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
          alt="circuit-board-pattern"
          className="absolute top-0 left-0 z-0 invert size-[175%] object-cover opacity-[2%]"
        />
        <div className="w-full flex justify-center mb-5"></div>
        <p className="font-bold text-xl md:text-2xl text-white mb-4">
          Get in Touch
        </p>

        <form
          className="relative flex flex-col gap-2 z-10"
          action="mail.php"
          method="post"
        >
          <div>
            <p>Full Name:</p>
            <Input name="full-name" type="text" />
          </div>

          <div>
            <p>Company/Organization:</p>
            <Input name="company" type="text" />
          </div>

          <div>
            <p>Email Address:</p>
            <Input name="email" type="text" />
          </div>

          <div>
            <p>Message:</p>
            <Textarea name="message"></Textarea>
          </div>

          <Button className="mt-5" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
