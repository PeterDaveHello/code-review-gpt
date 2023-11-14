import { signOff } from "../../constants";
import { ReviewFile } from "../../types";

export const formatReviewComment = (review: ReviewFile): string => {
  const suggestionSection = review.suggestion
    ? `\`\`\`suggestion\n${review.suggestion}\n\`\`\`\n`
    : "";

  return `${review.issue}\n\n${suggestionSection}\n\n---\n\n${signOff}`;
};