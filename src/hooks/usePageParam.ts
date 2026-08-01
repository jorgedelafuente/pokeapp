import { useState, useCallback } from "react";

const PARAM = "page";

function readPageParam(): number {
  const raw = new URLSearchParams(window.location.search).get(PARAM);
  const parsed = raw ? parseInt(raw, 10) : NaN;
  return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
}

export function usePageParam() {
  const [page, setPageState] = useState(readPageParam);

  const setPage = useCallback((next: number) => {
    setPageState(next);
    const url = new URL(window.location.href);
    url.searchParams.set(PARAM, String(next));
    window.history.replaceState(null, "", url);
  }, []);

  return [page, setPage] as const;
}
