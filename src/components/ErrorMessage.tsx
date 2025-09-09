import type { JSX } from "react";

interface ErrorMessageProps {
  children: React.ReactNode;
};

export default function ErrorMessage({
  children,
}: ErrorMessageProps): JSX.Element {
  return <div className="text-center text-red-500">{children}</div>;
}
