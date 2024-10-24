import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import { User } from "@prisma/client";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR<User>(
    "/api/current",
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useCurrentUser;
