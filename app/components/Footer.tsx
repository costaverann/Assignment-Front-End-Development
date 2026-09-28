export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card px-8 py-6 mt-auto">
      <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Ann&apos;s Workplace. All rights reserved. | Annisa Rahmawati of Cut Meutia.
      </div>
    </footer>
  );
}