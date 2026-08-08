export function Footer() {
  return (
    <footer className="mt-16 border-t border-border py-8 font-mono text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Institute of RIA. All rights
          reserved.
        </p>
        <p className="text-muted-foreground">Regulatory Ledger Theme</p>
      </div>
    </footer>
  )
}
