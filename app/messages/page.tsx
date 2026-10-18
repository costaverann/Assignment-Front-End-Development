import { messages } from "@/lib/db";
import { deleteMessageAction } from "./actions";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
};

export const dynamic = "force-dynamic";

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        Incoming Letters
      </h1>

      {messages.length === 0 ? (
        <p className="text-muted-foreground">Still empty here.</p>
      ) : (
        <div className="grid gap-4">
          {messages.map((item: Message) => (
            <article
              key={item.id}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h2 className="font-semibold text-foreground">{item.name}</h2>
              <p className="mb-3 text-sm text-muted-foreground">
                {item.email}
              </p>
              <p className="text-foreground">{item.message}</p>

              <form action={deleteMessageAction} className="mt-4">
                <input type="hidden" name="id" value={item.id} />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  Delete
                </button>
              </form>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}