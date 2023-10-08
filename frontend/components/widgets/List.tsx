"use client";

import { Spinner } from ".";

interface ConfigProps {
  label: string;
  value: string | undefined;
}

interface ListProps {
  config: ConfigProps[];
}

// Usage example:
const List: React.FC<ListProps> = ({ config }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {config.map(({ label, value }) => {
        return (
          <li key={label} className="flex justify-between gap-x-6 py-5">
            <div>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {label}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {value || <Spinner sm />}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
