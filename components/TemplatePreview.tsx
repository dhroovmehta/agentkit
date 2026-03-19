import type { Template } from "@/content/templates";

export default function TemplatePreview({
  template,
}: {
  template: Template;
}) {
  return (
    <div className="bg-secondary rounded-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-gray-400 font-mono ml-2">
          system-prompt.txt
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
          {template.promptExcerpt}
        </pre>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500 italic">
            Preview showing first ~200 characters. Full prompt is 2,000-5,000
            words with detailed instructions, output formats, and constraints.
          </p>
        </div>
      </div>
    </div>
  );
}
