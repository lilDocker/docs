export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-md my-6">
      <div className="text-blue-900 text-sm">{children}</div>
    </div>
  );
}