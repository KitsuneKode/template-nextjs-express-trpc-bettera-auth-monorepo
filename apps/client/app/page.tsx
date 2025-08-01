import { Button } from '@template/ui/components/button'
import { Textarea } from '@template/ui/components/textarea'

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <Textarea />
      </div>
    </div>
  )
}
