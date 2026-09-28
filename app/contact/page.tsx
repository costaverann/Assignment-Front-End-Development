export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 grid gap-8 sm:grid-cols-2">
      <div className="rounded-2xl bg-card border border-border p-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Contact</h1>
        <p className="text-muted-foreground mb-6">
          Got a question, an idea, or just want to collaborate? Drop me a message below and lets chat!
        </p>
        <form className="flex flex-col gap-4">
          <input placeholder="Name" className="rounded-lg border border-border bg-background px-4 py-2" />
          <input placeholder="Email" className="rounded-lg border border-border bg-background px-4 py-2" />
          <textarea placeholder="Message" rows={4} className="rounded-lg border border-border bg-background px-4 py-2" />
          <button className="rounded-full bg-primary text-primary-foreground py-2 font-medium">
            Send Message
          </button>
        </form>
      </div>
      <div className="rounded-2xl bg-accent p-8 flex flex-col justify-center">
        <h2 className="text-xl font-bold text-accent-foreground mb-2">Lets Stay Connected</h2>
        <p className="text-accent-foreground/80 mb-4">
          If you prefer a more casual chat, feel free to connect or say hello on Instagram.
        </p>
        <a href="https://instagram.com/aarasinna" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium w-fit">
          @aarasinna
        </a>
      </div>
    </div>
  );
}