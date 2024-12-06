"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ArrowsCounterClockwise, Copy } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function UUIDPage() {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([uuid()]);

  useEffect(() => {
    if (count === uuids.length) {
      return;
    }
    const missingIds = new Array<string>(Math.max(0, count - uuids.length))
      .fill("")
      .map(() => uuid());

    setUuids(uuids.slice(0, count).concat(...missingIds));
  }, [count, uuids]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-6 pt-6">
        <h1 className="text-3xl font-bold text-moonstone-300">
          UUID Generator
        </h1>
        <div className="flex w-full flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-4">
            <label className="font-bold">Count:</label>
            <Input
              id="count"
              type="number"
              value={count}
              className="w-16"
              onChange={(event) => {
                const newCount = parseInt(event.target.value);
                if (Number.isNaN(newCount)) {
                  return;
                }
                setCount(
                  newCount === 0 ? 1 : newCount < 0 ? newCount * -1 : newCount,
                );
              }}
            />
          </div>
          <Button onClick={() => setUuids(uuids.map(() => uuid()))}>
            <ArrowsCounterClockwise />
            Regenerate
          </Button>
        </div>

        <div className="group relative">
          <textarea
            id="uuids"
            className="w-[350px] resize-none rounded-lg border px-6 py-3 text-sm leading-6 outline-none sm:w-[400px] sm:text-base"
            rows={Math.min(count, 20)}
            readOnly
            value={uuids.join("\n")}
          />

          <Button
            className="absolute right-1 top-1 opacity-0 group-hover:opacity-100"
            intent="neutral"
            size="sm"
            onClick={() => {
              navigator.clipboard
                .writeText(uuids.join("\n"))
                .catch((error) =>
                  console.error("failed to copy email to clipboard", error),
                );
            }}
          >
            <Copy />
          </Button>
        </div>
      </div>
    </div>
  );
}
