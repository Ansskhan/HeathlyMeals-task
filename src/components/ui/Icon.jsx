import {
  Salad,
  Leaf,
  Star,
  Users,
  Gem,
  Heart,
  Truck,
  Sprout,
  User,
  ChefHat,
} from 'lucide-react'

const ICONS = {
  salad: Salad,
  leaf: Leaf,
  star: Star,
  users: Users,
  gem: Gem,
  heart: Heart,
  truck: Truck,
  sprout: Sprout,
  user: User,
  'chef-hat': ChefHat,
}

/**
 * Renders a named icon from the central icon map.
 * Used so data files can reference icons by string key.
 */
export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.5 }) {
  const Ic = ICONS[name] || Leaf
  return <Ic className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}
