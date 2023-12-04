import { useEffect, useState } from "react";
import { AnalyticsBrowser } from "@june-so/analytics-next";

export function useJune(writeKey: string) {
  const [analytics, setAnalytics] = useState<any>(null);

  useEffect(() => {
    const loadAnalytics = async () => {
      let response = AnalyticsBrowser.load({
        writeKey,
      });
      setAnalytics(response);
    };
    loadAnalytics();
  }, [writeKey]);

  return analytics;
}
