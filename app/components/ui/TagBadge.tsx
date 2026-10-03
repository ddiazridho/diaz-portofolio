"use client";

interface TagBadgeProps {
  tags: string[];
}

const tagColors: string[] = [
  "bg-blue-100 text-blue-800 border-blue-200",
  "bg-red-100 text-red-700 border-red-200",
  "bg-yellow-100 text-yellow-800 border-yellow-200",
  "bg-purple-100 text-purple-800 border-purple-200",
];

export default function TagBadge({ tags }: TagBadgeProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border-2 uppercase tracking-wide ${tagColors[i % tagColors.length]}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
