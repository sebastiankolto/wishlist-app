"use client";
import { usePathname, useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button className="text-white cursor-pointer" onClick={() => router.back()}>
      ← Back
    </button>
  );
};

export default BackButton;
