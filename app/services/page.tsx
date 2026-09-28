const services = [
  { title: "Legal Support and Consultation", desc: "Providing professional insights on legal migration frameworks and dedicated protection for Indonesian migrant workers.", icon: "⚖️" },
  { title: "Digital Empowerment", desc: "Supporting women's communities to embrace technology and thrive confidently in the digital era.", icon: "💡" },
  { title: "Web Development", desc: "Crafting simple, clean, and functional websites customized for personal or community needs.", icon: "💻" },
];

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1 text-sm text-foreground">
        What I Offer
      </p>
      <h1 className="text-4xl font-bold text-foreground mb-4">Services</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mb-12">
        A collection of ways I can help, built on my professional experience and continuous learning journey.
      </p>
      <div className="grid gap-6 sm:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl bg-card border border-border p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center text-xl">
              {s.icon}
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}