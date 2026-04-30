import logo from "@assets/moderncents/logo.jpeg";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      crossOrigin="anonymous"
      alt="Modern Cents"
      className={className}
    />
  );
}
