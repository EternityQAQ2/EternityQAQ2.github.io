import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'

import { useCommandPaletteShortcut } from './hooks/useCommandPaletteShortcut'
import { CommandPalette } from './modules/cmdk/CommandPalette'
import { RootProviders } from './providers/root-providers'

function ErrorFallback({ error, resetErrorBoundary }: { error: unknown, resetErrorBoundary: () => void }) {
  const message = error instanceof Error ? error.message : 'An unexpected error occurred'
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-900 px-4">
      <div className="text-center">
        <i className="i-mingcute-warning-line mb-4 block text-5xl text-red-400" />
        <h2 className="mb-2 text-lg font-semibold text-white">Something went wrong</h2>
        <p className="mb-4 max-w-md text-sm text-white/60">{message}</p>
        <button
          onClick={resetErrorBoundary}
          className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

// prefetch preview page route
function App() {
  useEffect(() => {
    import('~/pages/(main)/photos/[photoId]/index')
  }, [])

  return (
    <RootProviders>
      <div className="overflow-hidden lg:h-svh">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
        <CommandPaletteContainer />
      </div>
    </RootProviders>
  )
}

const CommandPaletteContainer = () => {
  const { isOpen, setIsOpen } = useCommandPaletteShortcut()
  return <CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} />
}
export default App
