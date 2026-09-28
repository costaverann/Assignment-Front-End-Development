export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-32">
      <p className="mb-4 rounded-full bg-secondary px-4 py-1 text-sm text-foreground">
        Welcome to Ann's very own Mini Project
      </p>
      <h1 className="max-w-2xl text-5xl font-bold leading-tight text-foreground">
        Perempuan Inovasi GENerasi AI - AI Full Stack Web Development: Front-End Project.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Welcome to my very first project-a digital space where simple ideas begin to transform into meaningful experiences and a proof that I am really trying.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="/services" className="rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium">
          View Projects
        </a>
        <a href="/contact" className="rounded-full border border-border px-6 py-3 text-foreground font-medium">
          Say Hello!
        </a>
      </div>
    </div>
  );
}