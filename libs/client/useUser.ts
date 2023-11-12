import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { getIdFromEmail } from "./utils";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/log-in");
    }
  }, [data, router]);

  if (data?.profile) {
    data.profile = {
      ...data.profile,
      emailId: getIdFromEmail(data.profile.email),
    };
  }

  return { user: data?.profile, isLoading: !data && !error };
}
