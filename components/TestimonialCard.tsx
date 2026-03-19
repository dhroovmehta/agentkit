export default function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="bg-card border border-gray-200 rounded-xl p-6">
      <svg
        className="w-8 h-8 text-primary/20 mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
      </svg>
      <p className="text-sm text-text leading-relaxed mb-4">{quote}</p>
      <div>
        <p className="text-sm font-semibold text-text">{author}</p>
        <p className="text-xs text-muted">{role}</p>
      </div>
    </div>
  );
}
