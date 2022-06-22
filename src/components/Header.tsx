import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="py-5 w-full flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}
