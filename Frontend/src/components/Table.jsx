import React from "react";
import Skeleton from "../Skeleton/Skeleton";

const Table = ({ columns, data, loading, emptyState, onRowClick }) => {
  if (loading) {
    return (
      <div className="w-full overflow-x-auto bg-surface dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b dark:border-gray-700">
              {columns.map((_, i) => (
                <th key={i} className="p-4">
                  <Skeleton className="h-4 w-20" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr
                key={i}
                className="border-b dark:border-gray-700 last:border-0"
              >
                {columns.map((_, j) => (
                  <td key={j} className="p-4">
                    <Skeleton className="h-4 w-full max-w-[120px]" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      emptyState || (
        <div className="p-8 text-center text-gray-500">No data available</div>
      )
    );
  }

  return (
    <div className="w-full overflow-x-auto bg-surface dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <table className="w-full text-left text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
        <thead className="text-gray-500 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-800/50">
          <tr className="border-b dark:border-gray-700">
            {columns.map((col, i) => (
              <th
                key={col.key || i}
                className={`p-4 font-medium ${col.className || ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id || i}
              onClick={() => onRowClick && onRowClick(row)}
              className={`border-b dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${onRowClick ? "cursor-pointer" : ""}`}
            >
              {columns.map((col, j) => (
                <td key={j} className={`p-4 ${col.className || ""}`}>
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
