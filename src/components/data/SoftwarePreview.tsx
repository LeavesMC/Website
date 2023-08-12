import Link from "next/link";
import type { FunctionComponent } from "react";

export interface SoftwarePreviewProps {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: FunctionComponent<any>;
  description?: string;
  download?: boolean;
}

const SoftwarePreview = ({
  id,
  name,
  icon: Icon,
  description,
  download,
}: SoftwarePreviewProps) => (
  <Link
    href={
      download
        ? `/downloads/${id}`
        : `/software/${id}`
    }
    passHref
  >
    <a>
      <article className="rounded-xl transition-all h-full p-4 md:p-8 hover:(shadow-lg bg-green-300 dark:bg-gray-800)">
        <div className="flex flex-row items-center gap-4">
          <div className="rounded-lg w-12 h-12 bg-gray-800 p-3">
            <Icon />
          </div>
          <h3 className="font-medium flex-1">{name}</h3>
        </div>

        {description && (
          <p className="text-gray-800 dark:text-gray-200 mt-4">{description}</p>
        )}
      </article>
    </a>
  </Link>
);

export default SoftwarePreview;
