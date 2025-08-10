import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function About() {
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <div
          className="flex flex-col items-center justify-center gap-5  pt-5"
          id="about"
        >
          <img
            src="/public/file.enc"
            alt="Profile Picture"
            className="w-44 h-44 rounded"
          />
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://www.instagram.com/brunoferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-[14px]"
            >
              <IconBrandInstagram size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/brunoferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-[14px]"
            >
              <IconBrandLinkedin size={35} />
            </a>
            <a
              href="https://github.com/brunoferreira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-[14px]"
            >
              <IconBrandGithub size={35} />
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col gap-5 items-center justify-center max-w-3xl ">
          <p>
            Con más de 1 año de experiencia desarrollando aplicaciones web
            utilizando tecnologías como Java y Spring Boot, JavaScript y Vue.js,
          </p>
          <p>
            He contribuido a la creación de aplicaciones web escalables y de
            alta calidad, utilizando metodologías ágiles y tecnologías de
            vanguardia para mejorar la experiencia del usuario y la eficiencia
            del desarrollo.
          </p>
        </div> */}
      </div>
    </>
  );
}
