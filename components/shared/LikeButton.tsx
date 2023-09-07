"use client";

import { addLike } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  currentUserId: string;
  isLiked: boolean;
  threadId: string;
}

const LikeButton = ({ currentUserId, isLiked, threadId }: Props) => {
  const pathname = usePathname();

  const handleAddLike = async () => {
    const result = await addLike(currentUserId, threadId, pathname);
  };

  return (
    <Image
      src={`/assets/heart-${isLiked ? "filled" : "gray"}.svg`}
      alt="heart"
      width={24}
      height={24}
      className="cursor-pointer object-contain"
      onClick={handleAddLike}
    />
  );
};

export default LikeButton;
