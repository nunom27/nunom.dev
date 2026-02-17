import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function ExperienceCard({
  title,
  company,
  date,
  description,
}: {
  title: string;
  company: string;
  date: string;
  description: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortDescription = description.split(".")[0] + ".";
  const shouldShowToggle = description.length > 100;

  return (
    <div className="border border-zinc-700 rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-zinc-400">
        {company} | {date}
      </p>
      <p className="mt-2 text-zinc-300">
        {shouldShowToggle && !isExpanded ? shortDescription : description}
      </p>
      {shouldShowToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center gap-1 text-sm text-blue-600 hover:underline"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUpIcon className="size-4" />
            </>
          ) : (
            <>
              Read more <ChevronDownIcon className="size-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
