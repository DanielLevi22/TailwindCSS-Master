'use client'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { Navitem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import Button from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6  border-b border-zinc-200 bg-white p-4 px-5 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.CollapsibleTrigger>
      </div>
      <Collapsible.Content
        forceMount
        className=" flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <Navitem icon={Home} title="Home" />
          <Navitem icon={BarChart} title="Dashboard" />
          <Navitem icon={SquareStack} title="Projects" />
          <Navitem icon={CheckSquare} title="Taks" />
          <Navitem icon={Flag} title="Reporting" />
          <Navitem icon={Users} title="Users" />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <Navitem title="Support" icon={LifeBuoy} />
            <Navitem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="bg-zinc200 h-px dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
