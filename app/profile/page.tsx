import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="rounded-2xl bg-card border border-border p-10 text-center">
        <Image
          src="/foto-ann.png"
          alt="Annisa Rahmawati"
          width={140}
          height={140}
          className="rounded-full object-cover w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-foreground">Annisa Rahmawati</h1>
        <p className="text-muted-foreground mt-1">ASN · Law Student · Lifelong Learner</p>
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">
  I work as a government worker in labor protection specifically Indonesian migrant workers, while also pursuing my law degree at Universitas Terbuka. Learning is something I genuinely enjoy, and I love pushing myself outside my comfort zone. Beyond stepping into the tech world through the Perempuan Inovasi bootcamp, I&apos;m also currently working toward the N2 JLPT exam in Japanese. Juggling a full-time career, university, language studies, and Perempuan Inovasi&apos;s Bootcamp (AI Full Stack Web Development) hasn&apos;t always been easy, but it&apos;s taught me a lot about staying organized and disciplined with my time. When I&apos;m not behind a screen or a book, I like to stay active, usually running, hitting the gym, or practicing Thai boxing to keep both my mind and body sharp.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="https://instagram.com/aarasinna" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium">
            Instagram
          </a>
          <a href="/contact" className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}