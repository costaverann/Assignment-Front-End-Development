import Image from "next/image";

const values = [
  { title: "Background", desc: "I currently serve as a civil servant (ASN), focusing on the protection of Indonesian migrant workers." },
  { title: "Education", desc: "Alongside my work, I am pursuing my Bachelor of Laws at Universitas Terbuka and expanding my horizons in tech through Perempuan Inovasi." },
  { title: "Why Coding", desc: "Law, governance, and technology don't have to be separate. Combined, they can create a powerful impact on bureaucratic reform and digital transformation." },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1 text-sm text-foreground">
        About Me
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
        <Image
          src="/foto-ann.png"
          alt="Annisa Rahmawati"
          width={120}
          height={120}
          className="rounded-full object-cover w-28 h-28"
        />
        <h1 className="text-4xl font-bold text-foreground">
          Hello, I&apos;m Annisa Rahmawati
        </h1>
      </div>
      <p className="text-muted-foreground text-lg max-w-2xl">
        You can call me Ann. I am a government worker and a bachelor law student at Universitas Terbuka. Maybe you are wondering why I am here — how could a government worker and even a law student jump into the developer world? Let me tell you a little more below.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-accent p-8 text-center">
        <h2 className="text-2xl font-bold text-accent-foreground mb-2">
          Let&apos;s Connect
        </h2>
        <p className="text-accent-foreground/80 mb-4">
          Interested in collaborating or just want to say hi? Feel free to reach out.
        </p>
        <a href="https://instagram.com/aarasinna" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary text-primary-foreground px-6 py-2 font-medium">Contact Me</a>
      </div>
    </div>
  );
}