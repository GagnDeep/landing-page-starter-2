export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} The Caterer&apos;s Business Toolkit.
        All rights reserved.
      </div>
    </footer>
  )
}
